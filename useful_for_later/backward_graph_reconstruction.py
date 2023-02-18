import torch
from PIL import Image
from torchvision.models import resnet50, alexnet, convnext_tiny
from torchvision.transforms import transforms

from sanitize_graph import remove_inplace_relu

net = alexnet()
net.eval()
params = dict(net.named_parameters())
param_map = {id(v): k for k, v in params.items()}



def get_back(var_grad_fn):
    fn_name = str(type(var_grad_fn).__name__)
    print(fn_name)
    for n in var_grad_fn.next_functions:
        if n[0]:
            try:
                tensor = getattr(n[0], 'variable')
                print(tensor.shape)
            except AttributeError as e:
                get_back(n[0])


if __name__ == '__main__':
    img_pil = Image.open('images/elefant.jpg').convert('RGB')
    img = transforms.ToTensor()(img_pil)[None, ...]

    net = remove_inplace_relu(net)
    out = net(img)
    loss = torch.sum(out)
    loss.backward(retain_graph=True, create_graph=True)
    get_back(loss.grad_fn)
    print()

