import os

import numpy as np
import torch
from PIL import Image
from torchvision.models import resnet50, alexnet, convnext_tiny
from timm.models import hrnet_w32
import matplotlib.pyplot as plt
from torchvision.transforms import transforms


class VerboseExecution(torch.nn.Module):
    def __init__(self, model: torch.nn.Module):
        super().__init__()
        self.model = model
        self.recursively_register_hooks(model, self.model._get_name())

    def recursively_register_hooks(self, module, parent_name):
        order_counter = 0
        children_layer = list(module.named_children())
        if len(children_layer) > 0 and not os.path.exists(parent_name):
            os.mkdir(parent_name)
        for name, layer in children_layer:
            layer.__name__ = parent_name + '/' + str(order_counter) + '-' + layer._get_name() + '-' + name
            layer.register_forward_hook(self.layer_analysis)
            self.recursively_register_hooks(layer, layer.__name__)
            order_counter += 1

    @staticmethod
    def layer_analysis(layer, input, output):
        output = torch.tensor(output)
        current_shape = output.detach().numpy().shape
        print(layer.__name__)
        print(current_shape)
        if len(current_shape) == 4:
            plt.imsave(f"{layer.__name__}.png", output.permute(0, 2, 3, 1).detach().numpy()[0, :, :, 0])

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.model(x)

verbose_resnet = VerboseExecution(hrnet_w32())
img_pil = Image.open('example.png').convert('RGB')
img = transforms.ToTensor()(img_pil)[None, ...]
_ = verbose_resnet(img)

