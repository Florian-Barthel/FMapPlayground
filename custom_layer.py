import uuid


class BackwardLayer:
    def __init__(self, grad_fn, layer_backwards_info):
        self.name = str(type(grad_fn).__name__)
        self.grad_fn = grad_fn
        self.weight_nodes = []
        self.layer_backwards_info = layer_backwards_info
        self.next_functions = grad_fn.next_functions
        self.possible_scopes: set = set()
        self.scope: str = ''

    def set_most_specific_scope(self):
        if len(self.possible_scopes) > 0:
            self.scope = max(self.possible_scopes, key=lambda s: len(s.split('/')))


class ResultLayer:
    def __init__(self, scope, data, name='Result Layer'):
        self.scope: str = scope
        self.data = data
        self.name = name
        self.node_id = 'new_node_' + str(uuid.uuid4().int)
