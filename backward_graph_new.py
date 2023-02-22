import uuid
from typing import List
from tqdm import tqdm
import torch

from custom_layer import BackwardLayer, ResultLayer, ResultLayerType
from layer_utils import gather_layer_info
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
        module_input_output = self.reorder_model_input_output(module_input_output)
        for inputs, current_module, outputs in tqdm(module_input_output[::-1]):
            # remove operations that do not change the output (i.e. Identity())
            # if check_equal(inputs[0], outputs):
            #     # self.connections.remove_connection(inputs[0].grad_fn, outputs.grad_fn)
            #     continue
            if check_equal(inputs[0], outputs):
                node_type = ResultLayerType.INTERMEDIATE
            else:
                node_type = ResultLayerType.INPUT
            current_scopes: str = current_module.__name__
            if current_scopes.endswith('_leaf'):
                current_scopes += str(uuid.uuid4().hex)
            self.all_scopes[(id(inputs[0]), id(current_module), id(outputs))] = current_scopes

            if check_equal(inputs[0], outputs):
                continue
            inputs = inputs[0]
            if isinstance(inputs, list):
                for input_tensor in inputs:
                    input_node = ResultLayer(current_scopes, input_tensor, node_type)
                    self._insert_result_node_after(input_tensor.grad_fn, input_node)
                    self.input_result_list.append(input_node)
            elif isinstance(inputs, torch.Tensor):
                input_node = ResultLayer(current_scopes, inputs, node_type)
                self._insert_result_node_after(inputs.grad_fn, input_node)
                self.input_result_list.append(input_node)

        for inputs, current_module, outputs in tqdm(module_input_output):
            # remove operations that do not change the output (i.e. Identity())
            if check_equal(inputs[0], outputs):
                # self.connections.remove_connection(inputs[0].grad_fn, outputs.grad_fn)
                continue
            current_scopes = self.all_scopes[(id(inputs[0]), id(current_module), id(outputs))]
            if isinstance(outputs, list):
                for output_tensor in outputs:
                    output_node = ResultLayer(current_scopes, output_tensor, ResultLayerType.OUTPUT)
                    self._insert_result_node_after(output_tensor.grad_fn, output_node, is_output_node=True)
            elif isinstance(outputs, torch.Tensor):
                output_node = ResultLayer(current_scopes, outputs, ResultLayerType.OUTPUT)
                self._insert_result_node_after(outputs.grad_fn, output_node, is_output_node=True)

        self.remove_unused_edges()

    def _insert_result_node_after(self, after_grad_fn, node: ResultLayer, is_output_node: bool = False):
        next_nodes = self.connections.get_next_nodes(after_grad_fn)

        self.all_layers[node.node_id] = node

        if next_nodes is None and not is_output_node:
            # this only happens for the network input
            after_grad_fn = self.input_layer_grad_fn
            next_nodes = self.connections.get_next_nodes(self.input_layer_grad_fn)

        # if next_nodes is not None:
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
        """
        next_layers = set()
        next_layers.add((self.input_layer_grad_fn, tuple([network_name])))

        while len(next_layers) > 0:
            new_found_layers = set()

            for current_layer_id, current_scope_stack in next_layers:

                current_scope_stack = list(current_scope_stack)
                current_layer = self.all_layers[current_layer_id]
                new_layers = self.connections.get_next_nodes(current_layer_id)

                if isinstance(current_layer, ResultLayer):
                    if current_layer.layer_type == ResultLayerType.INPUT:
                        # only keep scopes that are more general than the current scope
                        current_scope_stack = [scope for scope in current_scope_stack
                                               if len(scope.split('/')) < len(current_layer.scope.split('/'))]
                        # current_scope_stack.append(current_layer.scope)

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

                    elif current_layer.layer_type == ResultLayerType.OUTPUT:
                        if current_layer.scope in current_scope_stack:
                            # current_scope_stack.remove(current_layer.scope)
                            current_scope_stack = current_scope_stack[:current_scope_stack.index(current_layer.scope)]
                        else:
                            print(current_layer.scope, 'not in scope stack', current_scope_stack)
                            # this is the case if two connections meet
                            # continue

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

                current_search_layer = layer.grad_fn
                while layer.scope == '':
                    prev_layer = list(self.connections.get_next_nodes(current_search_layer))[0]
                    layer.scope = self.all_layers[prev_layer].scope
                    current_search_layer = prev_layer

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

    def reorder_model_input_output(self, module_input_output):
        scope_dict = {}
        for input_output in module_input_output:
            scope = input_output[1].__name__.split('/')
            scope_len = len(scope)
            if scope_len not in scope_dict.keys():
                scope_dict[scope_len] = []
            scope_dict[scope_len].append(input_output)

        scope_list = []
        input_output_list = []
        sorted_keys = sorted(scope_dict.keys())
        for key in sorted_keys:
            for input_output in scope_dict[key][::-1]:
                scope = input_output[1].__name__.split('/')
                if key > 2 and scope[:-1] in scope_list:
                    insert_index = scope_list.index(scope[:-1]) + 1
                    scope_list.insert(insert_index, scope)
                    input_output_list.insert(insert_index, input_output)
                else:
                    scope_list.append(scope)
                    input_output_list.append(input_output)

        return input_output_list

    def remove_duplicate_result_layers(self):
        for layer_id in self.all_layers.keys():
            layer = self.all_layers[layer_id]
            if not isinstance(layer, ResultLayer):
                continue
            next_layer_keys = self.connections.get_next_nodes(layer.node_id)
            if len(next_layer_keys) != 1:
                continue
            next_layer = self.all_layers[next_layer_keys.pop()]
            if not isinstance(next_layer, ResultLayer):
                continue
            if next_layer.layer_type == layer.layer_type: # and next_layer.scope == layer.scope:
                if len(layer.scope.split('/')) < len(next_layer.scope.split('/')):
                    self.connections.remove_node(layer.node_id, fix_graph=True)
                else:
                    self.connections.remove_node(next_layer.node_id, fix_graph=True)

        # remove all result layers that are no longer connected to anything
        delete_nodes = set()
        all_connected_nodes = self.connections.get_all_nodes()
        for layer_id in self.all_layers.keys():
            if layer_id not in all_connected_nodes:
                delete_nodes.add(layer_id)
        for node in delete_nodes:
            del self.all_layers[node]

    def specify_scopes(self):
        for layer_key in self.all_layers.keys():
            layer = self.all_layers[layer_key]
            if not isinstance(layer, ResultLayer):
                continue
            next_layer_ids = set()
            if layer.layer_type == ResultLayerType.INPUT:
                next_layer_ids = self.connections.get_next_nodes(layer_key)
            elif layer.layer_type == ResultLayerType.OUTPUT:
                next_layer_ids = self.connections.get_previous_nodes(layer_key)

            current_scopes = []
            for i, next_layer_id in enumerate(next_layer_ids):
                next_layer = self.all_layers[next_layer_id]
                next_scopes = next_layer.get_all_scopes()
                if i == 0:
                    current_scopes = next_scopes
                else:
                    current_scopes = set(current_scopes).intersection(next_scopes)
            max_scope = max(current_scopes, key=lambda s: len(s.split('/')))
            layer.scope = max_scope


def see_scope(mod):
    return [m[1].__name__ for m in mod]



