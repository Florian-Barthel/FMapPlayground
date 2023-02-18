from typing import List


class BackwardLayer:
    def __init__(self, name: str, grad_fn: str, layer_backwards_info: dict, next_functions: List[str], layer=None):
        self.name = name
        self.grad_fn = grad_fn
        self.layer = layer
        self.weight_nodes = []
        self.layer_backwards_info = layer_backwards_info
        self.next_functions = next_functions


class ResultLayer:
    def __init__(self, scopes, data, name='Result Layer'):
        self.scopes = scopes
        self.data = data
        self.name = name
        # self.weight_nodes = []
