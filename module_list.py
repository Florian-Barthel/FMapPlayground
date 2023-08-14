from pytorch_utils import check_equal


class Module:
    def __init__(self, input_tensor, layer, output_tensor):
        self.input_tensor = input_tensor
        self.layer = layer
        self.output_tensor = output_tensor
        self.scope = layer.__name__
        self.scope_readable = "/".join([s.split("?!")[0] for s in layer.__name__.split("/")])
        self.name = layer.__class__.__name__
        self.id = (id(self.input_tensor), id(self.layer), id(self.output_tensor))
        self.equal_io = check_equal(input_tensor, output_tensor) and id(input_tensor) == id(output_tensor)


class ModuleList:
    def __init__(self, input_output_list):
        self.module_list = []
        self.scope_list = []
        for input_output in input_output_list:
            current_module = Module(*input_output)
            self.module_list.append(current_module)
            self.scope_list.append(current_module.scope_readable)
        self.model_name = self.scope_list[0].split("/")[0]

    def get_input_nodes(self) -> list[Module]:
        scope_dict = {}
        for module in self.module_list:
            scope = module.scope.split('/')
            scope_len = len(scope)
            if scope_len not in scope_dict.keys():
                scope_dict[scope_len] = []
            scope_dict[scope_len].append(module)

        scope_list = [[self.model_name]]
        input_output_list = []
        sorted_keys = sorted(scope_dict.keys())
        for key in sorted_keys:
            for input_output in scope_dict[key][::-1]:
                scope = input_output.scope.split('/')
                for i in range(1, len(scope)):
                    if scope[:-i] in scope_list:
                        scope_list.reverse()
                        insert_index = scope_list.index(scope[:-i])
                        insert_index = len(scope_list) - insert_index
                        scope_list.reverse()
                        scope_list.insert(insert_index, scope)
                        input_output_list.insert(insert_index, input_output)
                        break

        return input_output_list

    def get_output_nodes(self) -> list[Module]:
        scope_dict = {}
        for module in self.module_list:
            scope = module.scope.split('/')
            scope_len = len(scope)
            if scope_len not in scope_dict.keys():
                scope_dict[scope_len] = []
            scope_dict[scope_len].append(module)

        scope_list = [[self.model_name]]
        input_output_list = []
        sorted_keys = sorted(scope_dict.keys())
        for key in sorted_keys:
            for input_output in scope_dict[key]:
                scope = input_output.scope.split('/')
                for i in range(1, len(scope)):
                    if scope[:-i] in scope_list:
                        insert_index = scope_list.index(scope[:-i])
                        scope_list.insert(insert_index, scope)
                        input_output_list.insert(insert_index, input_output)
                        break

        return input_output_list
