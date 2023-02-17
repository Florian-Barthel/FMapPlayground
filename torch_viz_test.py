import torch
import torchviz
from PIL import Image
from timm.models import hrnet_w32
from torchvision.transforms import transforms

if __name__ == '__main__':
    img_pil = Image.open('images/elefant.jpg').convert('RGB')
    img = transforms.ToTensor()(img_pil)[None, ...]
    net = hrnet_w32()
    net.eval()
    cross_entropy_function = torch.nn.CrossEntropyLoss()
    out = net(img)
    target_label = torch.tensor([386])
    loss = cross_entropy_function(input=out, target=target_label)

    result = torchviz.make_dot(loss, params=dict(net.named_parameters()))
    result.render(directory='doctest-output', view=True)

