import uuid
import warnings
from typing import List

from tqdm import tqdm
import torch
from graphviz import Digraph

import graphviz_config
from custom_layer import BackwardLayer, ResultLayer
from layer_utils import gather_layer_info, get_function_description


class BackwardGraph:
    def __init__(self):
        self.all_layers: dict[object, [BackwardLayer, ResultLayer]] = {}
        self.seen_layers = set()
        self.connections: dict[object, List[object]] = {}

    def iterate_graph(self, loss_term):
        self._get_back_rec(loss_term.grad_fn)

    def add_connections(self, from_connection, to_connections):
        if not isinstance(to_connections, list):
            to_connections = [to_connections]
        if from_connection not in self.connections.keys():
            self.connections[from_connection] = []
        self.connections[from_connection].extend(to_connections)

    def _get_back_rec(self, var_grad_fn):
        if var_grad_fn in self.seen_layers:
            return
        self.seen_layers.add(var_grad_fn)

        current_name = str(type(var_grad_fn).__name__)
        layer_info = gather_layer_info(var_grad_fn)

        for next_function, _ in var_grad_fn.next_functions:
            if next_function is not None:
                self.add_connections(next_function, var_grad_fn)

        self.all_layers[var_grad_fn] = BackwardLayer(
            name=current_name,
            grad_fn=var_grad_fn,
            layer_backwards_info=layer_info,
            next_functions=var_grad_fn.next_functions
        )
        for next_function, _ in var_grad_fn.next_functions:
            if next_function is not None:
                self._get_back_rec(next_function)

    def reduce_nodes(self, skip_layers):
        for skip_layer in skip_layers:
            self._reduce_nodes(skip_layer)

    def _reduce_nodes(self, skip_layer):
        assert len(self.connections.keys()) > 0 or len(self.all_layers.keys()) > 0

        connections_to_add = []
        layers_to_delete = []

        for layer_id in self.all_layers.keys():
            current_layer: BackwardLayer = self.all_layers[layer_id]
            print(current_layer.name)
            if current_layer.name.startswith(skip_layer):
                next_layers_grad_fn = self.connections[current_layer.grad_fn]
                for next_layer_grad_fn in next_layers_grad_fn:
                    next_layer = self.all_layers[next_layer_grad_fn]
                    next_layer.weight_nodes.append(current_layer)
                    next_layer.weight_nodes.extend(current_layer.weight_nodes)
                    current_layer.weight_nodes = []
                    layers_to_delete.append(current_layer.grad_fn)
                    connections_to_add.append((current_layer.grad_fn, next_layer.grad_fn))

        # remove
        for delete_grad_fn in layers_to_delete:
            del self.all_layers[delete_grad_fn]
            del self.connections[delete_grad_fn]

        for current_layer, next_layer in connections_to_add:
            self.add_connections(current_layer, next_layer)
        self.remove_deleted_nodes()

    def insert_result_nodes(self, graph_descriptions):
        graph_descriptions = sorted(graph_descriptions, key=lambda descriptions: len(descriptions[1].__name__.split('/')))[::-1]
        for inputs, current_module, outputs in tqdm(graph_descriptions):
            current_scopes = current_module.__name__
            if current_scopes ==  'AlexNet/features(Sequential)/0(Conv2d)':
                print()

            if isinstance(outputs, list):
                for output_tensor in outputs:
                    output_node = ResultLayer(current_scopes, output_tensor, 'Output Node')
                    self._insert_result_node_after(output_tensor.grad_fn, output_node, is_output_node=True)
            elif isinstance(outputs, torch.Tensor):
                output_node = ResultLayer(current_scopes, outputs, 'Output Node')
                self._insert_result_node_after(outputs.grad_fn, output_node, is_output_node=True)

            inputs = inputs[0]
            if isinstance(inputs, list):
                for input_tensor in inputs:
                    input_node = ResultLayer(current_scopes, input_tensor, 'Input Node')
                    self._insert_result_node_after(input_tensor.grad_fn, input_node, is_output_node=False)
            elif isinstance(inputs, torch.Tensor):
                input_node = ResultLayer(current_scopes, inputs, 'Input Node')
                self._insert_result_node_after(inputs.grad_fn, input_node, is_output_node=False)

    def create_graph_png(self, graph_descriptions, param_map, out_folder='graph_viz_out'):
        print(len(self.all_layers.keys()))
        graph = Digraph(node_attr=graphviz_config.default_node_attr)
        for layer_id in self.all_layers.keys():
            node_name = get_function_description(self.all_layers[layer_id], graph_descriptions, param_map)
            shape = graphviz_config.shapes.get(node_name)
            color = graphviz_config.colors.get(node_name)
            graph.node(str(layer_id), node_name, shape=shape, fillcolor=color)

        for from_id in self.all_layers.keys():
            to_ids = self.connections.get(from_id)
            if to_ids is not None:
                for to_id in to_ids:
                    graph.edge(str(from_id), str(to_id))
        graph.render(directory=out_folder, view=True)

    def _insert_result_node_after(self, after_grad_fn, node: ResultLayer, is_output_node: bool):
        new_node_id = 'new_node_' + str(uuid.uuid4().int)

        self.all_layers[new_node_id] = node
        delete_connections = []
        connections_to_add = []
        next_connections = self.connections.get(after_grad_fn)
        if next_connections is None:
            return
        for next_connection in next_connections:
            if self.scope_is_closed(node, next_connection) or is_output_node:
                connections_to_add.append((after_grad_fn, new_node_id))
                connections_to_add.append((new_node_id, next_connection))
                delete_connections.append(next_connection)

        for delete_connection in delete_connections:
            self.connections[after_grad_fn].remove(delete_connection)
        for prev_node, next_node in connections_to_add:
            self.add_connections(prev_node, next_node)

    def scope_is_closed(self, node: ResultLayer, next_layer):
        next_layers = [next_layer]
        while len(next_layers) > 0:
            new_found_layers = []
            for current_layer in next_layers:
                current_layer_node = self.all_layers[current_layer]
                if isinstance(current_layer_node, ResultLayer):
                    if current_layer_node.scopes == node.scopes:
                        return True
                    if len(current_layer_node.scopes.split('/')) <= len(node.scopes.split('/')):
                        continue
                new_layers = self.connections.get(current_layer)
                if new_layers is not None:
                    new_found_layers.extend(new_layers)
            next_layers = new_found_layers
        return False

    def remove_deleted_nodes(self):
        all_layers = self.all_layers.keys()
        for connection_from_name in self.connections.keys():
            for connection in self.connections[connection_from_name]:
                if connection not in all_layers:
                    self.connections[connection_from_name].remove(connection)

    def remove_duplicate_connections(self):
        for connection_from_name in self.connections.keys():
            self.connections[connection_from_name] = list(set(self.connections[connection_from_name]))


