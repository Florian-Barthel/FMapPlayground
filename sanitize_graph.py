import torch


def remove_inplace_relu(model):
    for child_name, child in model.named_children():
        if isinstance(child, torch.nn.ReLU):
            setattr(model, child_name, torch.nn.ReLU(inplace=False))
        else:
            remove_inplace_relu(child)
    return model