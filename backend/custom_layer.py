import uuid
from enum import Enum


class Layer:
    def __init__(self, scope):
        self.scope: str = scope

    def get_all_scopes(self):
        scope_segments = self.scope.split("/")
        possible_scopes = []
        current_scope = ""
        for i, scope_segment in enumerate(scope_segments):
            if i > 0:
                current_scope += "/"
            current_scope += scope_segment
            possible_scopes.append(current_scope)
        return possible_scopes


class BackwardLayer(Layer):
    def __init__(self, grad_fn, layer_backwards_info):
        super().__init__("")
        if isinstance(grad_fn, str):
            # constant input
            self.name = layer_backwards_info["name"]
            self.next_functions = None
        else:
            #
            self.name = str(type(grad_fn).__name__)
            self.next_functions = grad_fn.next_functions

        # grad_fn is handled as an id for BackwardsLayers
        self.grad_fn = grad_fn
        self.weight_nodes = []
        self.layer_backwards_info = layer_backwards_info
        self.possible_scopes: set = set()

    def set_most_specific_scope(self):
        if len(self.possible_scopes) > 0:
            self.scope = max(self.possible_scopes, key=lambda s: len(s.split("/")))


class ResultLayerType(Enum):
    INPUT = "In"
    OUTPUT = "Out"
    INTERMEDIATE = "Intermediate"


class ResultLayer(Layer):
    def __init__(self, scope, data, info, layer_type: ResultLayerType):
        super().__init__(scope)
        self.data = data
        self.layer_type = layer_type
        self.weight_nodes = []
        self.node_id = "new_node_" + str(uuid.uuid4().int)
        self.name = layer_type.value
        self.info = info
