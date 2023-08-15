import torch
from PIL import Image
from torchvision.transforms import transforms

from generate_graphviz_graph import create_graph
from backward_graph_clean import BackwardGraph
from verbose_execution import VerboseExecution
from module_list import ModuleList

# networks
from torchvision.models import resnet50, alexnet, convnext_tiny, convnext_large
from torchvision.models import efficientnet_b4, mobilenet_v2, vgg16, inception_v3, googlenet, squeezenet
from timm.models import vision_transformer, nest_small, crossvit_tiny_240, mobilenetv3
from timm.models import convit_small, hrnet_w32
from torchvision.models import mnasnet0_75, shufflenet_v2_x1_5, swin_t, regnet_x_32gf
from torchvision.models import densenet121
from test_network import TestNet


if __name__ == '__main__':
    img_pil = Image.open('images/elefant.jpg').convert('RGB').resize((224, 224))
    img = transforms.ToTensor()(img_pil)[None, ...] * 0
    net = crossvit_tiny_240()
    net.eval()

    print('Forward Pass')
    net = VerboseExecution(net)

    out = net(img)

    print('Backward Pass')
    loss = torch.sum(out)
    loss.backward(retain_graph=True)
    backGraph = BackwardGraph(img, loss, net.original_name)

    print('Insert Result Nodes')
    modules = ModuleList(net.input_layer_output_list)
    backGraph.insert_result_nodes(modules)

    print('Reduce Nodes')
    backGraph.reduce_nodes(['AccumulateGrad'])

    print('Update Scopes')
    backGraph.update_scopes()

    print('Skip Duplicates')
    backGraph.skip_duplicate_results()

    print('Draw Graph')
    create_graph(
        connections=backGraph.connections,
        modules=backGraph.split_into_modules(),
        param_map=net.param_map,
        out_folder='./frontend/frontend_custom/src/assets',
    )
