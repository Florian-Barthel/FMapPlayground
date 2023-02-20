import uuid
from typing import Set, List

from tqdm import tqdm
import torch
from graphviz import Digraph

import graphviz_config
from custom_layer import BackwardLayer, ResultLayer
from layer_utils import get_function_description, gather_layer_info
from pytorch_utils import check_equal
from graph_connections import GraphConnections


class BackwardGraph:
    def __init__(self, input_tensor: torch.Tensor, loss):
        self.all_layers: dict[object, [BackwardLayer, ResultLayer]] = {}
        self.seen_layers = set()
        self.connections: GraphConnections = GraphConnections()
        self._iterate_graph(loss.grad_fn)
        self.input_layer_grad_fn = self._find_input_layer_grad_fn(input_tensor)
        self.input_result_list: List[ResultLayer] = []
        self.all_scopes = {}

        self._input_node_name = 'Input'
        self._output_node_name = 'Output'

    def _iterate_graph(self, grad_fn):
        if grad_fn in self.seen_layers:
            return
        self.seen_layers.add(grad_fn)
        layer_info = gather_layer_info(grad_fn)

        self.all_layers[grad_fn] = BackwardLayer(grad_fn, layer_info)
        for next_function, _ in grad_fn.next_functions:
            if next_function is not None:
                self.connections.add_connection(origin=next_function, target=grad_fn)
                self._iterate_graph(next_function)

    def _find_input_layer_grad_fn(self, input_tensor):
        for layer_grad_fn in self.all_layers.keys():
            current_layer: [ResultLayer, BackwardLayer] = self.all_layers[layer_grad_fn]
            if isinstance(current_layer, BackwardLayer):
                if 'variable' in current_layer.layer_backwards_info.keys():
                    if check_equal(current_layer.layer_backwards_info['variable'], input_tensor):
                        return layer_grad_fn

    def insert_result_nodes(self, module_input_output):
        for inputs, current_module, outputs in tqdm(module_input_output):
            current_scopes: str = current_module.__name__
            if current_scopes.endswith('_leaf'):
                current_scopes += str(uuid.uuid4().hex)
            self.all_scopes[(id(inputs[0]), id(current_module), id(outputs))] = current_scopes

            if check_equal(inputs[0], outputs):
                continue
            inputs = inputs[0]
            if isinstance(inputs, list):
                for input_tensor in inputs:
                    input_node = ResultLayer(current_scopes, input_tensor, self._input_node_name)
                    self._insert_result_node_after(input_tensor.grad_fn, input_node)
                    self.input_result_list.append(input_node)
            elif isinstance(inputs, torch.Tensor):
                input_node = ResultLayer(current_scopes, inputs, self._input_node_name)
                self._insert_result_node_after(inputs.grad_fn, input_node)
                self.input_result_list.append(input_node)

        for inputs, current_module, outputs in tqdm(module_input_output[::-1]):
            current_scopes = self.all_scopes[(id(inputs[0]), id(current_module), id(outputs))]
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

    def _insert_result_node_after(self, after_grad_fn, node: ResultLayer, is_output_node: bool = False):
        next_nodes = self.connections.get_next_nodes(after_grad_fn)

        self.all_layers[node.node_id] = node

        if next_nodes is None and not is_output_node:
            # this only happens for the network input
            after_grad_fn = self.input_layer_grad_fn
            next_nodes = self.connections.get_next_nodes(self.input_layer_grad_fn)

        if next_nodes is not None:
            for next_node in next_nodes:
                self.connections.insert_node_inbetween(after_grad_fn, node.node_id, next_node)

    def remove_unused_edges(self):
        """
        This function removes all edges after each result input layers that do not flow into the same result output
        layer.
        """
        for input_result_node in self.input_result_list:
            output_connections = self.connections.get_next_nodes(input_result_node.node_id)
            if output_connections is None:
                continue
            if len(output_connections) == 1:
                continue

            for next_node in output_connections:
                if not self._scope_is_closed(input_result_node, next_node):
                    self.connections.remove_connection(input_result_node.node_id, next_node, parents_inherit=True)

    def reduce_nodes(self, skip_layers: List[str]):
        """
        Removes all nodes that begin with the string in skip_layers
        :param skip_layers: A list of strings for nodes to ignore (i.e. AccumulateGrad).
        """
        for skip_layer in skip_layers:
            self._reduce_nodes(skip_layer)

    def _reduce_nodes(self, skip_layer):
        for layer_id in list(self.all_layers.keys()).copy():
            current_layer: [BackwardLayer, ResultLayer] = self.all_layers[layer_id]
            if isinstance(current_layer, BackwardLayer):
                # keep the first layer as input layer
                if current_layer.grad_fn == self.input_layer_grad_fn:
                    continue

            if current_layer.name.startswith(skip_layer):
                del self.all_layers[layer_id]
                next_nodes = self.connections.get_next_nodes(current_layer.grad_fn)
                for next_node in next_nodes:
                    next_layer = self.all_layers[next_node]
                    next_layer.weight_nodes.append(current_layer)
                    next_layer.weight_nodes.extend(current_layer.weight_nodes)
                    current_layer.weight_nodes = []
                    self.connections.remove_node(current_layer.grad_fn, fix_graph=False)

    def remove_duplicate_result_nodes(self):
        pass

    def _scope_is_closed(self, node: ResultLayer, next_layer_id):
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
                new_layers = self.connections.get_next_nodes(current_layer)
                if new_layers is not None:
                    for new_layer in new_layers:
                        new_found_layers.add(new_layer)
                observed_layers.add(current_layer_node)
            next_layers = new_found_layers
        return False

    def update_scopes(self, network_name: str):
        """
        Updates all BackwardsLayers using the scope of the last ResultLayer
        :param network_name: name of the whole network
        """
        next_layers = set()
        next_layers.add((self.input_layer_grad_fn, tuple([network_name])))

        while len(next_layers) > 0:
            new_found_layers = set()

            for current_layer_id, current_scope_stack in next_layers:
                current_scope_stack = list(current_scope_stack)
                current_layer = self.all_layers[current_layer_id]

                if isinstance(current_layer, ResultLayer):
                    if current_layer.name == self._input_node_name:
                        # remove all scopes that are more specific if we find a new input node
                        current_scope_stack = [scope for scope in current_scope_stack
                                               if len(scope.split('/')) < len(current_layer.scope.split('/'))]
                        current_scope_stack.append(current_layer.scope)
                    elif current_layer.name == self._output_node_name:
                        if current_layer.scope in current_scope_stack:
                            current_scope_stack.remove(current_layer.scope)
                        else:
                            continue
                elif isinstance(current_layer, BackwardLayer):
                    current_layer.possible_scopes.add(current_scope_stack[-1])

                new_layers = self.connections.get_next_nodes(current_layer_id)
                if new_layers is not None:
                    for new_layer in new_layers:
                        new_found_layers.add((new_layer, tuple(current_scope_stack.copy())))
            next_layers = new_found_layers

        for layer_id in self.all_layers.keys():
            layer = self.all_layers[layer_id]
            if isinstance(layer, BackwardLayer):
                layer.set_most_specific_scope()

    def _split_into_modules(self):
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

    def create_graph_png(self, param_map, out_folder='graph_viz_out'):
        """
        Creates a graphviz graph of the current state and saves it in the out_folder
        :param param_map: named dict of the networks parameters
        :param out_folder: target location for the graph pdf
        """
        modules = self._split_into_modules()
        graph = Digraph(node_attr=graphviz_config.default_node_attr)
        self._add_modules_to_graph_rec(graph, modules, param_map, 1)

        for from_id in self.all_layers.keys():
            to_ids = self.connections.get_next_nodes(from_id)
            if to_ids is not None:
                for to_id in to_ids:
                    graph.edge(str(from_id), str(to_id))
        graph.render(directory=out_folder, view=True)

    def _add_modules_to_graph_rec(self, graph: Digraph, modules: dict, param_map, color_counter: int):
        for scope_name in modules.keys():
            module = modules[scope_name]
            with graph.subgraph(name='cluster' + str(uuid.uuid4().hex)) as sg:
                sg.attr(color='black')
                sg.attr(colorscheme='oranges9') # ylgn9
                sg.attr(bgcolor=str(color_counter))
                sg.attr(style=str('rounded'))
                if '?!module_id:' in scope_name:
                    scope_name = scope_name.split('?!module_id:')[0]
                sg.attr(label=scope_name)
                if len(module['next_scopes'].keys()) > 0:
                    self._add_modules_to_graph_rec(sg, module['next_scopes'], param_map, color_counter + 1)

                for node in module['layers']:
                    node_name = get_function_description(node, param_map)
                    shape = graphviz_config.get_shape(node_name)
                    color = graphviz_config.get_color(node_name)
                    if isinstance(node, BackwardLayer):
                        sg.node(str(node.grad_fn), node_name, shape=shape, fillcolor=color)

                    elif isinstance(node, ResultLayer):
                        sg.node(str(node.node_id), node_name, shape=shape, fillcolor=color)