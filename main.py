import pprint
from typing_extensions import Required
import torch
from PIL import Image
from torchvision.transforms import transforms

# from LTVRR.lib.utils import logging
# from torchvision.models import resnet50, alexnet, convnext_tiny, convnext_large
from torchvision.models import (
    efficientnet_b4,
    mobilenet_v2,
    vgg16,
    inception_v3,
    googlenet,
    squeezenet,
)
from timm.models import vision_transformer, nest_small, crossvit_tiny_240, mobilenetv3


# custom networks
# from scene_graph.model import BoxesOnlyTransformer
# from scene_graph.model.multi import HRNetBackbone
# from scene_graph.model.vit_timm import KatjaAttention
# from LTVRR.lib.modeling.model_builder import Generalized_RCNN, cfg, assert_and_infer_cfg, merge_cfg_from_file

# todo fix those:
from timm.models import convit_small, hrnet_w32
from torchvision.models import densenet121
from test_network import TestNet


from generate_graphviz_graph import create_graph
from backward_graph_clean import BackwardGraph
from verbose_execution import VerboseExecution
from module_list import ModuleList


if __name__ == "__main__":
    img_pil = Image.open("images/elefant.jpg").convert("RGB").resize((224, 224))
    img = transforms.ToTensor()(img_pil)[None, ...]
    net = (
        TestNet()
    )  # TestNet() # hrnet_w32() #squeezenet.squeezenet1_0() # vision_transformer.vit_small_patch16_36x1_224()
    # net = vision_transformer.vit_small_patch16_36x1_224()
    net.eval()

    print("Forward Pass")
    net = VerboseExecution(net)
    out = net(img)

    print("Backward Pass")
    loss = torch.sum(out)
    loss.backward(retain_graph=True)
    backGraph = BackwardGraph(img, loss, net.original_name)

    print("Insert Result Nodes")
    modules = ModuleList(net.input_layer_output_list)
    backGraph.insert_result_nodes(modules)

    print("Reduce Nodes")
    backGraph.reduce_nodes(["AccumulateGrad"])

    print("Update Scopes")
    backGraph.update_scopes()

    print("Skip Duplicates")
    backGraph.skip_duplicate_results()

    print("Draw Graph")
    create_graph(
        connections=backGraph.connections,
        modules=backGraph.split_into_modules(),
        param_map=net.param_map,
        out_folder="./frontend/frontend_custom/src/assets",
        out_format="svg",
    )
