import warnings

from graphviz import Digraph

from layer_utils import gather_layer_info, get_function_name


class BackwardLayer:
    def __init__(self, name: str, memory_id: str, custom_id: int, layer_backwards_info: dict, layer=None):
        self.name = name
        self.memory_id = memory_id
        self.custom_id = custom_id
        self.layer = layer
        self.weight_nodes = []
        self.layer_backwards_info = layer_backwards_info


class BackwardGraph:
    def __init__(self):
        self.all_layers: dict[int, BackwardLayer] = {}
        self.seen_layers = set()

        # key: id of previous layer, value: id of current layer (previous in terms of a forward pass)
        self.connections: list = []

    def iterate_graph(self, loss_term):
        self._get_back_rec(loss_term.grad_fn)

    def _get_back_rec(self, var_grad_fn):
        if var_grad_fn in self.seen_layers:
            return
        self.seen_layers.add(var_grad_fn)

        current_name = str(type(var_grad_fn).__name__)
        layer_info = gather_layer_info(var_grad_fn)

        self.all_layers[int(id(var_grad_fn))] = BackwardLayer(current_name, str(id(var_grad_fn)), int(id(var_grad_fn)),
                                                              layer_info)
        for next_function, _ in var_grad_fn.next_functions:
            if next_function is not None:
                self.connections.append((int(id(next_function)), int(id(var_grad_fn))))
                self._get_back_rec(next_function)

    def reduce_nodes(self, skip_layers):
        for skip_layer in skip_layers:
            self._reduce_nodes(skip_layer)

    def _reduce_nodes(self, skip_layer):
        if len(self.connections) == 0 or len(self.all_layers) == 0:
            warnings.warn('The backward graph is currently empty. Use .iterate_graph() to collect graph data.')
            return

        layers_to_delete = []

        for custom_layer_id in self.all_layers.keys():
            current_layer: BackwardLayer = self.all_layers[custom_layer_id]
            if current_layer.name == skip_layer:
                next_layer_ids = self.get_next_layers(current_layer.custom_id)
                for next_layer_id in next_layer_ids:
                    next_layer = self.all_layers[next_layer_id]
                    next_layer.weight_nodes.append(current_layer)
                    layers_to_delete.append(current_layer.custom_id)
                    self.insert_connections(current_layer, next_layer)

        # remove
        for delete_id in layers_to_delete:
            del self.all_layers[delete_id]
            self.connections = [
                connection for connection in self.connections
                if connection[0] != delete_id and connection[1] != delete_id
            ]

    def create_graph_png(self, out_folder='graph_viz_out'):
        node_attr = dict(style='filled',
                         align='center',
                         fontsize='10',
                         ranksep='0.1',
                         height='0.2',
                         fontname='monospace')
        graph = Digraph(node_attr=node_attr)
        for layer_id in self.all_layers.keys():
            node_name = get_function_name(self.all_layers[layer_id].name)
            shape = 'circle' if node_name == '+' else 'box'
            fillcolor = 'orange' if node_name == 'Convolution' else 'white'
            graph.node(str(layer_id), node_name, shape=shape, fillcolor=fillcolor)

        for from_id, to_id in self.connections:
            graph.edge(str(from_id), str(to_id))
        graph.render(directory=out_folder, view=True)

    def insert_connections(self, current_layer, next_layer):
        connections_to_add = []
        for from_id, to_id in self.connections:
            if to_id == current_layer.custom_id:
                connections_to_add.append((from_id, next_layer.custom_id))

        for new_connection in connections_to_add:
            self.connections.append(new_connection)

    def get_next_layers(self, custom_id):
        next_ids = []
        for connection in self.connections:
            if connection[0] == custom_id:
                next_ids.append(connection[1])
        return next_ids
