import uuid
import warnings

import torch
from graphviz import Digraph


class BackwardLayer:
    def __init__(self, name: str, memory_id: str, custom_id: int, layer_backwards_info: dict, layer=None):
        self.name = name
        self.memory_id = memory_id
        self.custom_id = custom_id
        self.layer = layer
        self.weight_nodes = []
        self.layer_backwards_info = layer_backwards_info


def gather_layer_info(grad_fn_layer):
    search_attributes = [
        'variable',
        '_saved_self',
        '_saved_weight',
        '_saved_self_sym_sizes',
        '_saved_result',
        '_saved_input_sym_sizes',
        '_saved_scale_factors'
    ]
    info = {
        'name': str(type(grad_fn_layer).__name__),
        'memory_id': str(id(grad_fn_layer))
    }
    for attr in search_attributes:
        if hasattr(grad_fn_layer, attr):
            result = getattr(grad_fn_layer, attr)
            info[attr] = result

    return info


class BackwardGraph:
    def __init__(self):
        self.all_layers: dict[int, BackwardLayer] = {}
        self.seen_layers = set()

        # key: id of previous layer, value: id of current layer (previous in terms of a forward pass)
        self.connections: dict[int, int] = {}

    def iterate_graph(self, loss_term):
        self._get_back_rec(loss_term.grad_fn, uuid.uuid4().int)

    def _get_back_rec(self, var_grad_fn, current_id: int):
        if var_grad_fn in self.seen_layers:
            return
        self.seen_layers.add(var_grad_fn)

        current_name = str(type(var_grad_fn).__name__)
        layer_info = gather_layer_info(var_grad_fn)

        self.all_layers[current_id] = BackwardLayer(current_name, str(id(var_grad_fn)), current_id, layer_info)
        for next_function, _ in var_grad_fn.next_functions:
            if next_function is not None:
                next_id_custom = uuid.uuid4().int
                self.connections[next_id_custom] = current_id
                self._get_back_rec(next_function, next_id_custom)

    def reduce_accumulate_nodes(self):
        if len(self.connections) == 0 or len(self.all_layers) == 0:
            warnings.warn('The backward graph is currently empty. Use .iterate_graph() to collect graph data.')
            return

        layers_to_delete = []

        for custom_layer_id in self.all_layers.keys():
            current_layer: BackwardLayer = self.all_layers[custom_layer_id]
            if current_layer.name == 'AccumulateGrad':
                next_layer_id = self.connections[current_layer.custom_id]
                next_layer = self.all_layers[next_layer_id]
                next_layer.weight_nodes.append(current_layer)
                layers_to_delete.append(current_layer.custom_id)
                self.insert_connections(current_layer, next_layer)

        # remove
        for delete_id in layers_to_delete:
            del self.all_layers[delete_id]
            del self.connections[delete_id]

    def create_graph_png(self, out_folder='graph_viz_out'):
        node_attr = dict(style='filled',
                         shape='box',
                         align='left',
                         fontsize='10',
                         ranksep='0.1',
                         height='0.2',
                         fontname='monospace')
        graph = Digraph(node_attr=node_attr)
        for layer_id in self.all_layers.keys():
            if self.all_layers[layer_id].name is None:
                print()
            graph.node(str(layer_id), self.all_layers[layer_id].name)

        for layer_id in self.connections.keys():
            graph.edge(str(layer_id), str(self.connections[layer_id]))
        graph.render(directory=out_folder, view=True)

    def insert_connections(self, current_layer, next_layer):
        connections_to_add = []
        for from_id in self.connections.keys():
            if self.connections[from_id] == current_layer.custom_id:
                connections_to_add.append((from_id, next_layer.custom_id))

        for new_connection in connections_to_add:
            self.connections[new_connection[0]] = new_connection[1]

