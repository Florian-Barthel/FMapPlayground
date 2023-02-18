import torch
from PIL import Image
from torchvision.models import resnet50, alexnet, convnext_tiny
from timm.models import hrnet_w32, vision_transformer

from torchvision.transforms import transforms

from backward_graph import BackwardGraph
from verbose_execution import VerboseExecution


if __name__ == '__main__':
    img_pil = Image.open('images/elefant.jpg').convert('RGB').resize((224, 224))
    img = transforms.ToTensor()(img_pil)[None, ...]
    net = alexnet() #  vision_transformer.vit_small_patch16_36x1_224()
    net.eval()
    net = VerboseExecution(net)

    cross_entropy_function = torch.nn.CrossEntropyLoss()

    out = net(img)
    target_label = torch.tensor([386])
    loss = cross_entropy_function(input=out, target=target_label)
    loss.backward(retain_graph=True)
    backGraph = BackwardGraph()
    print('Iterate Graph Backward')
    backGraph.iterate_graph(loss)
    print('Insert Result Nodes')
    backGraph.insert_result_nodes(net.grad_fn_id_dict)
    print('Reduce Nodes')
    backGraph.remove_duplicate_connections()
    backGraph.reduce_nodes(['AccumulateGrad', 'TBackward0'])
    print('Draw Graph')
    backGraph.create_graph_png(net.grad_fn_id_dict, net.param_map)
