import uuid
from typing import Set, List

from tqdm import tqdm
import torch
from graphviz import Digraph

import graphviz_config
from custom_layer import BackwardLayer, ResultLayer
from layer_utils import get_function_description, gather_layer_info
from pytorch_utils import check_equal


class BackwardGraph:
    def __init__(self, input_tensor: torch.Tensor, loss, param_map):
        self.all_layers: dict[object, [BackwardLayer, ResultLayer]] = {}
        self.seen_layers = set()
        self.connections: dict[object, Set[object]] = {}
        self._iterate_graph(loss.grad_fn)
        self.input_layer_grad_fn = self._find_input_layer_grad_fn(input_tensor)
        self.input_result_list: List[ResultLayer] = []
        self.all_scopes = {}
        self.param_map = param_map

        self._input_node_name = 'Input'
        self._output_node_name = 'Output'

    def add_connections(self, from_connection, to_connections):
        if from_connection not in self.connections.keys():
            self.connections[from_connection] = set()

        if not isinstance(to_connections, list):
            self.connections[from_connection].add(to_connections)
        else:
            for new_to_connection in to_connections:
                self.connections[from_connection].add(new_to_connection)

    def _iterate_graph(self, grad_fn):
        if grad_fn in self.seen_layers:
            return
        self.seen_layers.add(grad_fn)
        layer_info = gather_layer_info(grad_fn)

        self.all_layers[grad_fn] = BackwardLayer(grad_fn, layer_info)
        for next_function, _ in grad_fn.next_functions:
            if next_function is not None:
                self.add_connections(next_function, grad_fn)
                self._iterate_graph(next_function)

    def _find_input_layer_grad_fn(self, input_tensor):
        for layer_grad_fn in self.all_layers.keys():
            current_layer: [ResultLayer, BackwardLayer] = self.all_layers[layer_grad_fn]
            if isinstance(current_layer, BackwardLayer):
                if 'variable' in current_layer.layer_backwards_info.keys():
                    if torch.equal(current_layer.layer_backwards_info['variable'], input_tensor):
                        return layer_grad_fn

    def insert_result_nodes(self, module_input_output):
        for inputs, current_module, outputs in tqdm(module_input_output):
            current_scopes: str = current_module.__name__
            if current_scopes in self.all_scopes.values():
                current_scopes += str(uuid.uuid4().hex)
            self.all_scopes[(inputs, current_module, outputs)] = current_scopes

            if check_equal(inputs[0], outputs):
                continue
            inputs = inputs[0]
            if isinstance(inputs, list):
                for input_tensor in inputs:
                    input_node = ResultLayer(current_scopes, input_tensor, self._input_node_name)
                    self._insert_result_node_after(input_tensor.grad_fn, input_node, is_output_node=False)
                    self.input_result_list.append(input_node)
            elif isinstance(inputs, torch.Tensor):
                input_node = ResultLayer(current_scopes, inputs, self._input_node_name)
                self._insert_result_node_after(inputs.grad_fn, input_node, is_output_node=False)
                self.input_result_list.append(input_node)

        for inputs, current_module, outputs in tqdm(module_input_output[::-1]):
            current_scopes = self.all_scopes[(inputs, current_module, outputs)]
            if check_equal(inputs[0], outputs):
                continue
            if isinstance(outputs, list):
                for output_tensor in outputs:
                    output_node = ResultLayer(current_scopes, output_tensor, self._output_node_name)
                    self._insert_result_node_after(output_tensor.grad_fn, output_node, is_output_node=True)
            elif isinstance(outputs, torch.Tensor):
                output_node = ResultLayer(current_scopes, outputs, self._output_node_name)
                self._insert_result_node_after(outputs.grad_fn, output_node, is_output_node=True)

        self.remove_unused_edges()


    def remove_unused_edges(self):
        for input_result_node in self.input_result_list:
            if len(self.connections[input_result_node.node_id]) == 1:
                continue

            prev_layer_ids = self._get_previous_layers(input_result_node.node_id)
            connections_to_delete = []
            connections_to_add = []
            for next_layer_id in self.connections[input_result_node.node_id]:
                if not self.scope_is_closed(input_result_node, next_layer_id):
                    connections_to_delete.append(next_layer_id)
                    for prev_layer_id in prev_layer_ids:
                        connections_to_add.append((prev_layer_id, next_layer_id))

            for connection_to_delete in connections_to_delete:
                self.connections[input_result_node.node_id].remove(connection_to_delete)
            for prev_layer_id, next_layer_id in connections_to_add:
                self.connections[prev_layer_id].add(next_layer_id)

    def _get_previous_layers(self, node_id):
        previous_layers = []
        for connection_origin in self.connections.keys():
            for connection_target in self.connections[connection_origin]:
                if node_id == connection_target:
                    previous_layers.append(connection_origin)
        return previous_layers

    def _insert_result_node_after(self, after_grad_fn, node: ResultLayer, is_output_node: bool):
        new_node_id = node.node_id

        delete_connections = []
        connections_to_add = []
        next_connections = self.connections.get(after_grad_fn)

        self.all_layers[new_node_id] = node

        if next_connections is None and not is_output_node:
            # this only happens for the network input
            after_grad_fn = self.input_layer_grad_fn
            next_connections = self.connections[self.input_layer_grad_fn]

        for next_connection in next_connections:
            connections_to_add.append((after_grad_fn, new_node_id))
            connections_to_add.append((new_node_id, next_connection))
            delete_connections.append(next_connection)

        for delete_connection in delete_connections:
            self.connections[after_grad_fn].remove(delete_connection)
        for prev_node, next_node in connections_to_add:
            self.add_connections(prev_node, next_node)

    def reduce_nodes(self, skip_layers):
        for skip_layer in skip_layers:
            self._reduce_nodes(skip_layer)

    def _reduce_nodes(self, skip_layer):
        assert len(self.connections.keys()) > 0 or len(self.all_layers.keys()) > 0

        connections_to_add = []
        layers_to_delete = []

        for layer_id in self.all_layers.keys():
            current_layer: [BackwardLayer, ResultLayer] = self.all_layers[layer_id]
            if isinstance(current_layer, BackwardLayer):
                if current_layer.grad_fn == self.input_layer_grad_fn:
                    continue

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

    def create_graph_png(self, param_map, out_folder='graph_viz_out'):
        modules = self.split_into_modules()
        graph = Digraph(node_attr=graphviz_config.default_node_attr)
        self._add_modules_to_graph_rec(graph, modules, param_map)

        for from_id in self.all_layers.keys():
            to_ids = self.connections.get(from_id)
            if to_ids is not None:
                for to_id in to_ids:
                    graph.edge(str(from_id), str(to_id))
        graph.render(directory=out_folder, view=True)

    def _add_modules_to_graph_rec(self, graph: Digraph, modules: dict, param_map):
        for scope_name in modules.keys():
            module = modules[scope_name]
            with graph.subgraph(name='cluster' + str(uuid.uuid4().hex)) as sg:
                sg.attr(color='black')
                sg.attr(label=scope_name)
                sg.graph_attr['rank'] = 'same'
                if len(module['next_scopes'].keys()) > 0:
                    self._add_modules_to_graph_rec(sg, module['next_scopes'], param_map)

                for node in module['layers']:
                    node_name = get_function_description(node, param_map)
                    shape = graphviz_config.get_shape(node_name)
                    color = graphviz_config.get_color(node_name)
                    if isinstance(node, BackwardLayer):
                        sg.node(str(node.grad_fn), node_name, shape=shape, fillcolor=color)

                    elif isinstance(node, ResultLayer):
                        sg.node(str(node.node_id), node_name, shape=shape, fillcolor=color)

    def scope_is_closed(self, node: ResultLayer, next_layer_id):
        next_layers = set()
        next_layers.add(next_layer_id)
        observed_layers = set()
        while len(next_layers) > 0:
            new_found_layers = set()
            for current_layer in next_layers:
                current_layer_node = self.all_layers[current_layer]
                if current_layer_node in observed_layers:
                    continue
                if isinstance(current_layer_node, ResultLayer):
                    if current_layer_node.scope == node.scope:
                        return True
                new_layers = self.connections.get(current_layer)
                if new_layers is not None:
                    for new_layer in new_layers:
                        new_found_layers.add(new_layer)
                observed_layers.add(current_layer_node)
            next_layers = new_found_layers
        return False

    def remove_deleted_nodes(self):
        all_layers = self.all_layers.keys()
        for connection_from_name in self.connections.keys():
            connections_to_delete = set()
            for connection in self.connections[connection_from_name]:
                if connection not in all_layers:
                    connections_to_delete.add(connection)
            for connection_to_delete in connections_to_delete:
                self.connections[connection_from_name].remove(connection_to_delete)

    def update_scopes(self, network_name: str):
        next_layers = set()
        next_layers.add((self.input_layer_grad_fn, tuple([network_name])))
        pbar = tqdm(total=len(self.all_layers))

        while len(next_layers) > 0:
            new_found_layers = set()

            for current_layer_id, current_scope_stack in next_layers:
                current_scope_stack = list(current_scope_stack)
                current_layer = self.all_layers[current_layer_id]
                new_layers = self.connections.get(current_layer_id)

                if isinstance(current_layer, ResultLayer):
                    pbar.update()
                    if current_layer.name == self._input_node_name:
                        current_scope_stack.append(current_layer.scope)
                    elif current_layer.name == self._output_node_name:
                        if current_layer.scope in current_scope_stack:
                            current_scope_stack.remove(current_layer.scope)
                        else:
                            continue
                elif isinstance(current_layer, BackwardLayer):
                    pbar.update()
                    current_layer.possible_scopes.add(current_scope_stack[-1])

                if new_layers is not None:
                    for new_layer in new_layers:
                        new_found_layers.add((new_layer, tuple(current_scope_stack.copy())))
            next_layers = new_found_layers

        for layer_id in self.all_layers.keys():
            layer = self.all_layers[layer_id]
            if isinstance(layer, BackwardLayer):
                layer.set_most_specific_scope()

    def split_into_modules(self):
        modules = {}
        for layer_id in self.all_layers.keys():
            layer = self.all_layers[layer_id]
            scope_list = layer.scope.split('/')
            self._create_module_rec(layer, scope_list, modules)
        return modules

    def _create_module_rec(self, layer, scopes, module):
        if scopes[0] not in module:
            module[scopes[0]] = {
                'next_scopes': {},
                'layers': []
            }
        if len(scopes) == 1:
            module[scopes[0]]['layers'].append(layer)
            return

        self._create_module_rec(layer, scopes[1:], module[scopes[0]]['next_scopes'])