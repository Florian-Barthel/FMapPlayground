import torch
from PIL import Image
from torchvision.transforms import transforms

from generate_graphviz_graph import create_graph as _create_graph
from backward_graph_clean import BackwardGraph
from verbose_execution import VerboseExecution
from module_list import ModuleList


def create(net) -> BackwardGraph:
    img_pil = Image.open("images/elefant.jpg").convert("RGB").resize((224, 224))
    img = transforms.ToTensor()(img_pil)[None, ...]
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

    print("remove results")
    backGraph.remove_results()

    # print("Draw Graph")
    # _create_graph(
    #     connections=backGraph.connections,
    #     modules=backGraph.split_into_modules(),
    #     param_map=net.param_map,
    #     out_folder="./frontend/frontend_custom/src/assets",
    #     out_format="svg",
    # )
    return backGraph
