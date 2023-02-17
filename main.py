import torch
from PIL import Image
from torchvision.models import resnet50, alexnet, convnext_tiny
from timm.models import hrnet_w32

from torchvision.transforms import transforms

from backward_graph import BackwardGraph
from combined_hooks import VerboseExecution


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
    # backGraph.reduce_accumulate_nodes()
    backGraph.create_graph_png()
    print()
