import uuid
from typing import List, Dict
from tqdm import tqdm
import torch

from custom_layer import BackwardLayer, ResultLayer, ResultLayerType
from layer_utils import gather_layer_info
from module_list import Module
from graph_connections import GraphConnections


class BackwardGraph:
    def __init__(self, input_tensor: torch.Tensor, loss, name):
        self.all_layers: Dict[object, any] = {}
        self._seen_layers = set()
        self.connections: GraphConnections = GraphConnections()
        self.input_result_list: List[ResultLayer] = []
        self.all_scopes = {}
        self._iterate_graph(loss.grad_fn)
        self.model_name = name
        self.input_tensor = input_tensor

        # this has to be called after iterate graph
        self.input_layer_grad_fn = None
        self._set_input_layer_grad_fn()

    def _iterate_graph(self, grad_fn):
        """
        Recursive function that iterates through all graph layers and saves all connections / layers.
        :param grad_fn: Gradient function that points to the previous backpropagation layer.
        This should start with the last layer.
        """

        if grad_fn in self._seen_layers:
            return

        self._seen_layers.add(grad_fn)
        layer_info = gather_layer_info(grad_fn)
        self.all_layers[grad_fn] = BackwardLayer(grad_fn, layer_info)
        for next_function, _ in grad_fn.next_functions:
            if next_function is not None:
                self.connections.add_connection(origin=next_function, target=grad_fn)
                self._iterate_graph(next_function)
            else:
                constant_id = uuid.uuid4().hex
                self.all_layers[constant_id] = BackwardLayer(constant_id, {'name': 'Constant Input'})
                self.connections.add_connection(origin=constant_id, target=grad_fn)

    def _set_input_layer_grad_fn(self):
        """
        Sets the class parameter input_layer_grad_fn, which is the key for the input layer.
        """
        for layer_grad_fn in self.all_layers.keys():
            current_layer: [ResultLayer, BackwardLayer] = self.all_layers[layer_grad_fn]
            if isinstance(current_layer, BackwardLayer):
                if 'variable' in current_layer.layer_backwards_info.keys():
                    if id(current_layer.layer_backwards_info['variable']) == id(self.input_tensor):
                        self.input_layer_grad_fn = layer_grad_fn
                        print('Input layer found:', self.input_tensor.shape)
                        return
        Warning('No input layer found')

    def insert_result_nodes(self, modules):
        module_input_output: List[Module] = modules.get_input_nodes()

        for module in tqdm(module_input_output[::-1]):
            current_scope: str = module.scope
            if current_scope.endswith('_leaf'):
                current_scope += str(uuid.uuid4().hex)
            self.all_scopes[module.id] = current_scope

            if module.equal_io:
                continue

            input_node = ResultLayer(current_scope, module.input_tensor, ResultLayerType.INPUT)
            self._insert_result_node_after(module.input_tensor.grad_fn, input_node)
            self.input_result_list.append(input_node)
        module_input_output = modules.get_output_nodes()

        for module in tqdm(module_input_output[::-1]):
            current_scopes = self.all_scopes[module.id]

            if module.equal_io:
                # input_node = ResultLayer(current_scopes, module.input_tensor, ResultLayerType.INTERMEDIATE)
                # self._insert_result_node_after(module.output_tensor.grad_fn, input_node)
                continue

            output_node = ResultLayer(current_scopes, module.output_tensor, ResultLayerType.OUTPUT)
            self._insert_result_node_after(module.output_tensor.grad_fn, output_node, is_output_node=True)

        self.remove_unused_edges()

    def _insert_result_node_after(self, after_grad_fn, node: ResultLayer, is_output_node: bool = False):

        if after_grad_fn is None and not is_output_node:
            if id(node.data) == id(self.input_tensor):
                after_grad_fn = self.input_layer_grad_fn
                next_nodes = self.connections.get_next_nodes(self.input_layer_grad_fn)
            else:
                return
        else:
            next_nodes = self.connections.get_next_nodes(after_grad_fn)
        self.all_layers[node.node_id] = node

        for next_node in next_nodes:
            self.connections.insert_node_inbetween(after_grad_fn, node.node_id, next_node)

    def remove_unused_edges(self):
        """
        This function removes all edges after each result input layers that do not flow into the same result output
        layer.
        """
        for input_result_node in self.input_result_list:
            output_connections = self.connections.get_next_nodes(input_result_node.node_id)
            if len(output_connections) == 1:
                continue

            prev_nodes = self.connections.get_previous_nodes(input_result_node.node_id)
            for next_node in output_connections:
                if not self._scope_is_closed(input_result_node, next_node):
                    self.connections.remove_connection(input_result_node.node_id, next_node)
                    self.connections.add_connections_multiple_origins(prev_nodes, next_node)

    def reduce_nodes(self, skip_layers: List[str]):
        """
        Removes all nodes that begin with the string in skip_layers
        :param skip_layers: A list of strings for nodes to ignore (i.e. AccumulateGrad).
        """
        for skip_layer in skip_layers:
            for layer_id in list(self.all_layers.keys()).copy():
                current_layer: [BackwardLayer, ResultLayer] = self.all_layers[layer_id]
                if not isinstance(current_layer, BackwardLayer):
                    continue

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

    def update_scopes(self):
        """
        Updates all BackwardLayers using the scope of the last ResultLayer.

        This is implemented using a while loop since this function breaks the recursive stack.
        """
        next_layers = set()
        next_layers.add((self.input_layer_grad_fn, tuple([self.model_name])))

        # for each layer, find all possible scopes
        while len(next_layers) > 0:
            new_found_layers = set()

            for current_layer_id, current_scope_stack in next_layers:
                current_scope_stack = list(current_scope_stack)
                current_layer = self.all_layers[current_layer_id]
                new_layers = self.connections.get_next_nodes(current_layer_id)

                if isinstance(current_layer, ResultLayer):
                    if current_layer.layer_type == ResultLayerType.INPUT: # or current_layer.layer_type == ResultLayerType.INTERMEDIATE:
                        # only keep scopes that are more general than the current scope
                        current_scope_stack = [scope for scope in current_scope_stack
                                               if len(scope.split('/')) < len(current_layer.scope.split('/'))]

                        scope = ''
                        scope_variations = []
                        for i, scope_segment in enumerate(current_layer.scope.split('/')):
                            if i > 0:
                                scope += '/'
                            scope += scope_segment
                            scope_variations.append(scope)
                        for scope_variation in scope_variations:
                            if scope_variation not in current_scope_stack:
                                current_scope_stack.append(scope_variation)

                    if current_layer.layer_type == ResultLayerType.OUTPUT:# or current_layer.layer_type == ResultLayerType.INTERMEDIATE:
                        if current_layer.scope in current_scope_stack:
                            current_scope_stack = current_scope_stack[:current_scope_stack.index(current_layer.scope)]

                elif isinstance(current_layer, BackwardLayer):
                    if current_scope_stack[-1] in current_layer.possible_scopes:
                        continue
                    current_layer.possible_scopes.add(current_scope_stack[-1])

                if new_layers is not None:
                    for new_layer in new_layers:
                        new_found_layers.add((new_layer, tuple(current_scope_stack.copy())))
            next_layers = new_found_layers.copy()

        for layer_id in self.all_layers.keys():
            layer = self.all_layers[layer_id]
            if isinstance(layer, BackwardLayer):
                layer.set_most_specific_scope()

                # if no scope was found, iterate to the next node that has a scope
                current_search_layer = layer.grad_fn
                while layer.scope == '':
                    next_layer = list(self.connections.get_next_nodes(current_search_layer))[0]
                    layer.scope = self.all_layers[next_layer].scope
                    current_search_layer = next_layer

    def split_into_modules(self):
        """
        Creates a dictionary representation of all modules and submodules.
        """

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

    def skip_duplicate_results(self):
        nodes_to_delete = set()
        for from_conn, to_conns in self.connections.iterate_connections():
            from_node = self.all_layers[from_conn]
            for to_conn in to_conns:
                to_node = self.all_layers[to_conn]
                if isinstance(from_node, ResultLayer) and isinstance(to_node, ResultLayer):
                    if from_node.scope == to_node.scope and from_node.layer_type == to_node.layer_type:
                        nodes_to_delete.add(from_node)

        for i in range(len(nodes_to_delete)):
            node = nodes_to_delete.pop()
            self.connections.remove_node(node.node_id, fix_graph=True)
            del self.all_layers[node.node_id]
            print("Removing", node.scope)




