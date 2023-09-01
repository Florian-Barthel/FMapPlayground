from typing import List


class APIGraph:
    def __init__(self, module_info):
        self.nodes: List[dict] = []
        self.edges = []
        self.module_info = module_info

    def rec_add_nodes(self, module: dict):
        children = []
        id_ = list(module.keys())[0]

        name = id_
        if "?!module_id" in name:
            name = name[: name.index("?!module_id")]

        content = list(module.values())[0]
        if "layers" in content.keys():
            for layer in content["layers"]:
                children.append(str(layer.grad_fn))
                self.nodes.append(
                    dict(id=str(layer.grad_fn), name=str(layer.name), children=[], info=None)
                )

        if "next_scopes" in content.keys():
            for next_module_name, next_module_content in content["next_scopes"].items():
                children.append(next_module_name)
                self.rec_add_nodes({next_module_name: next_module_content})

        info = None
        if id_ in self.module_info.keys():
            info = self.module_info[id_].info
        self.nodes.append(dict(id=id_, name=name, children=children, info=info))

    def add_connections(self, forward_connections: dict):
        for start, end in forward_connections.items():
            for end_id in end:
                start_node = str(start)
                end_node = str(end_id)
                self.edges.append((start_node, "out", end_node, "in"))
