import torch
from PIL import Image

from torchvision.models import resnet50, alexnet, convnext_tiny, convnext_large, efficientnet_b4, mobilenet_v2, vgg16, inception_v3
from timm.models import vision_transformer, nest_small, crossvit_tiny_240
from network_baseline import SegmentationNetBaseline

# todo fix those:
from timm.models import convit_small, hrnet_w32

from torchvision.transforms import transforms

from backward_graph import BackwardGraph
from verbose_execution import VerboseExecution


if __name__ == '__main__':
    img_pil = Image.open('images/elefant.jpg').convert('RGB').resize((224, 224))
    img = transforms.ToTensor()(img_pil)[None, ...]
    net = hrnet_w32() # vision_transformer.vit_small_patch16_36x1_224()
    net.eval()
    net = VerboseExecution(net)

    cross_entropy_function = torch.nn.CrossEntropyLoss()

    out = net(img)
    # target_label = torch.tensor([386])
    # loss = cross_entropy_function(input=out, target=target_label)
    loss = torch.sum(out)
    loss.backward(retain_graph=True)
    backGraph = BackwardGraph(img, loss)
    print('Insert Result Nodes')
    backGraph.insert_result_nodes(net.grad_fn_id_dict)
    print('Reduce Nodes')
    backGraph.reduce_nodes(['AccumulateGrad', 'TBackward0'])
    print('Update Scopes')
    backGraph.update_scopes(network_name=net.original_name)
    print('Draw Graph')
    backGraph.create_graph_png(param_map=net.param_map)
    modules = backGraph.split_into_modules()
    print()
