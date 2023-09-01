import uuid
import torch
import inspect


class VerboseExecution(torch.nn.Module):
    """
    Wrapper class for torch.nn.Module that replaces inplace functions and adds hooks
    """

    def __init__(self, model: torch.nn.Module):
        super().__init__()
        self.model = model
        self.input_layer_output_list = []
        self.original_name: str = self.model._get_name()
        self.param_map = {str(id(v)): k for k, v in dict(self.model.named_parameters()).items()}

        self.recursively_remove_inplace(model)
        self.recursively_register_hooks(model)

    def recursively_register_hooks(self, module, current_name=None, parent_name=None):
        if parent_name is not None:
            module.__name__ = f"{parent_name}/{current_name}({module._get_name()})"
            module.__name__ += "?!module_id:" + str(uuid.uuid4().hex)
        else:
            module.__name__ = module._get_name()

        sig = inspect.signature(module)
        file = inspect.getfile(module.__class__)
        doc = module.__doc__
        description = str(module)

        children_layer = list(module.named_children())
        if len(children_layer) == 0:
            module.__name__ += "_leaf"
            return
        for name, layer in children_layer:
            self.recursively_register_hooks(layer, name, module.__name__)
            layer.register_forward_hook(self.forward_hook)

    def forward_hook(self, layer, input_list, output_tensor):
        for input_tensor in input_list:
            # convert to list
            if isinstance(output_tensor, tuple):
                output_tensor = list(output_tensor)
            if isinstance(input_tensor, tuple):
                input_tensor = list(input_tensor)
            if isinstance(input_tensor, dict):
                input_tensor = list(input_tensor.items())
            if isinstance(output_tensor, dict):
                output_tensor = list(output_tensor.items())

            if isinstance(output_tensor, torch.Tensor):
                output_tensor = [output_tensor]
            if isinstance(input_tensor, torch.Tensor):
                input_tensor = [input_tensor]

            for current_input_tensor in input_tensor:
                for current_output_tensor in output_tensor:
                    self.input_layer_output_list.append(
                        (current_input_tensor, layer, current_output_tensor)
                    )

    def forward(self, x: torch.Tensor, *args, **kwargs) -> torch.Tensor:
        x.requires_grad_()
        return self.model(x, *args, **kwargs)

    @staticmethod
    def recursively_remove_inplace(model, verbose=True):
        inplace_classes = set()
        watch_members = []
        watch_members += inspect.getmembers(torch.nn.modules.activation)
        watch_members += inspect.getmembers(torch.nn.modules.dropout)
        for name, obj in watch_members:
            if inspect.isclass(obj):
                inplace_classes.add(obj)

        for child_name, child in model.named_children():
            VerboseExecution.recursively_remove_inplace(child)
            for inplace_class in inplace_classes:
                if isinstance(child, inplace_class):
                    current_module = getattr(model, child_name)
                    if hasattr(current_module, "inplace"):
                        if current_module.inplace and verbose:
                            print(f"setting {child_name}.inplace to false")
                            current_module.inplace = False
