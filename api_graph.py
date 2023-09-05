from typing import List


class APIGraph:
    def __init__(self, module_info):
        self.nodes: List[dict] = []
        self.edges = []
        self.module_info = module_info

    def rec_add_nodes(self, module: dict):
        for id_, content in module.items():
            children = []
            name = id_
            if "?!module_id" in name:
                name = name[: name.index("?!module_id")]

            if "layers" in content.keys():
                for layer in content["layers"]:
                    children.append(str(layer.grad_fn))
                    layer_name = str(layer.name)
                    if "Backward0" in layer_name:
                        layer_name = layer_name[: layer_name.index("Backward0")]
                    info = {}
                    if "_saved_self_sym_sizes" in layer.layer_backwards_info.keys():
                        info["shape"] = layer.layer_backwards_info["_saved_self_sym_sizes"]
                    if "_saved_result" in layer.layer_backwards_info.keys():
                        info["result_shape"] = layer.layer_backwards_info["_saved_result"].shape
                    self.nodes.append(dict(id=str(layer.grad_fn), name=layer_name, children=[], info=info))

            if "next_scopes" in content.keys():
                for next_module_name, next_module_content in content["next_scopes"].items():
                    children.append(next_module_name)
                    self.rec_add_nodes({next_module_name: next_module_content})

            info = {}
            if id_ in self.module_info.keys():
                info = self.module_info[id_].info
            self.nodes.append(dict(id=id_, name=name, children=children, info=info))

    def add_connections(self, forward_connections: dict):
        for start, end in forward_connections.items():
            for end_id in end:
                start_node = str(start)
                end_node = str(end_id)
                self.edges.append((start_node, "out", end_node, "in"))
