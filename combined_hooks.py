import os
import torch
from PIL import Image
from torchvision.models import resnet50, alexnet, convnext_tiny
from timm.models import hrnet_w32
from torchvision.transforms import transforms

from backward_graph import BackwardGraph


def intersection(lst1, lst2):
    lst3 = [value for value in lst1 if value in lst2]
    return lst3


def diff(list1, list2):
    c = set(list1).union(set(list2))
    d = set(list1).intersection(set(list2))
    return list(c - d)


class VerboseExecution(torch.nn.Module):
    def __init__(self, model: torch.nn.Module):
        super().__init__()
        self.model = model
        self.model = self.remove_inplace_relu(model)
        self.named_parameter_list = list(self.model.named_parameters())
        self.input_connections = {}
        self.output_connections = {}
        self.output_f_maps = {}
        self.f_map_gradients = {}

        self.weight_id_layer = {}
        self.recursively_register_hooks(model, self.model._get_name())

    def recursively_register_hooks(self, module, parent_name):
        order_counter = 0
        children_layer = list(module.named_children())
        if len(children_layer) > 0 and not os.path.exists(parent_name):
            os.mkdir(parent_name)
        for name, layer in children_layer:
            layer.__name__ = parent_name + '/' + str(order_counter) + '-' + layer._get_name() + '-' + name
            layer.register_forward_hook(self.forward_hook)
            self.recursively_register_hooks(layer, layer.__name__)
            order_counter += 1

    def forward_hook(self, layer, input_list, output_tensor):
        if hasattr(layer, 'weight'):
            self.weight_id_layer[id(layer.weight)] = {
                'layer': layer,
                'input': input_list,
                'output': output_tensor
            }

        layer_name = layer.__name__
        if isinstance(output_tensor, list):
            for i in range(len(output_tensor)):
                self.save_layer(layer_name, f'_list_{i}_fmap.png', output_tensor[i])
            return

        for input_tensor in input_list:
            self.input_connections[layer_name] = id(input_tensor)
        self.output_connections[layer_name] = id(output_tensor)
        self.save_layer(layer_name, '_fmap.png', output_tensor)

    @staticmethod
    def save_layer(name, file_ending, output):
        pass
        # output_np = output.detach().numpy()
        # current_shape = output_np.shape
        # print(name)
        # print(current_shape)
        # if len(current_shape) == 2:
        #     plt.imsave(name + file_ending, output_np[0, None, :])
        # if len(current_shape) == 3:
        #     plt.imsave(name + file_ending, output_np[0])
        # elif len(current_shape) == 4:
        #     plt.imsave(name + file_ending, np.mean(output_np.transpose(0, 2, 3, 1)[0], axis=-1))

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


if __name__ == '__main__':
    img_pil = Image.open('images/elefant.jpg').convert('RGB')
    img = transforms.ToTensor()(img_pil)[None, ...]
    net = hrnet_w32()
    net.eval()
    net = VerboseExecution(net)

    cross_entropy_function = torch.nn.CrossEntropyLoss()

    out = net(img)
    target_label = torch.tensor([386])
    loss = cross_entropy_function(input=out, target=target_label)
    loss.backward(retain_graph=True) # , create_graph=True)
    backGraph = BackwardGraph()
    backGraph.iterate_graph(loss)
    print()

