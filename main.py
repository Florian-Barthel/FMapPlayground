import torch
from PIL import Image
from torchvision.transforms import transforms


from torchvision.models import resnet50, alexnet, convnext_tiny, convnext_large
from torchvision.models import efficientnet_b4, mobilenet_v2, vgg16, inception_v3, googlenet
from timm.models import vision_transformer, nest_small, crossvit_tiny_240, mobilenetv3


# custom networks
from network_baseline import SegmentationNetBaseline
from network import Net

# todo fix those:
from timm.models import convit_small, hrnet_w32
from torchvision.models import densenet121

from generate_graphviz_graph import create_graph_png
from backward_graph_new import BackwardGraph
from verbose_execution import VerboseExecution


if __name__ == '__main__':
    img_pil = Image.open('images/elefant.jpg').convert('RGB').resize((224, 224))
    img = transforms.ToTensor()(img_pil)[None, ...]
    net = hrnet_w32()# vision_transformer.vit_small_patch16_36x1_224()
    net.eval()
    net = VerboseExecution(net)

    cross_entropy_function = torch.nn.CrossEntropyLoss()

    out = net(img)
    loss = torch.sum(out)
    loss.backward(retain_graph=True)
    backGraph = BackwardGraph(img, loss)

    print('Insert Result Nodes')
    backGraph.insert_result_nodes(net.grad_fns)

    print('Reduce Nodes')
    backGraph.reduce_nodes(['AccumulateGrad'])

    print('Update Scopes')
    backGraph.update_scopes(net.original_name)

    print('Specify Scopes')
    backGraph.specify_scopes()

    print('Remove Duplicates')
    backGraph.remove_duplicate_result_layers()

    print('Draw Graph')
    create_graph_png(connections=backGraph.connections, modules=backGraph.split_into_modules(), param_map=net.param_map)
