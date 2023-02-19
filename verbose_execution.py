import os
import torch


class VerboseExecution(torch.nn.Module):
    def __init__(self, model: torch.nn.Module):
        super().__init__()
        self.model = model
        self.model = self.remove_inplace_relu(model)
        self.grad_fn_id_dict = []
        self.param_map = {str(id(v)): k for k, v in dict(self.model.named_parameters()).items()}
        self.recursively_register_hooks(model)
        self.original_name: str = self.model._get_name()

    def recursively_register_hooks(self, module, current_name=None, parent_name=None):
        children_layer = list(module.named_children())

        if parent_name is not None:
            if len(children_layer) > 0 and not os.path.exists(parent_name):
                os.mkdir(parent_name)
            module.__name__ = parent_name + '/' + current_name + '(' + module._get_name() + ')'
        else:
            module.__name__ = module._get_name()
        for name, layer in children_layer:
            layer.register_forward_hook(self.forward_hook)
            self.recursively_register_hooks(layer, name, module.__name__)

    def forward_hook(self, layer, input_list, output_tensor):
        if isinstance(output_tensor, list):
            for i in range(len(output_tensor)):
                self.grad_fn_id_dict.append((input_list, layer, output_tensor[i]))
            return
        else:
            self.grad_fn_id_dict.append((input_list, layer, output_tensor))

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        x.requires_grad_()
        return self.model(x)

    @staticmethod
    def remove_inplace_relu(model):
        for child_name, child in model.named_children():
            if isinstance(child, torch.nn.ReLU):
                setattr(model, child_name, torch.nn.ReLU(inplace=False))
            else:
                VerboseExecution.remove_inplace_relu(child)
        return model
