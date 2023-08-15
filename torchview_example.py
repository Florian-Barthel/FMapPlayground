from torchview import draw_graph
from torchvision.models import densenet121
from timm.models import convit_small, hrnet_w32



model = hrnet_w32()
batch_size = 1
# device='meta' -> no memory is consumed for visualization
model_graph = draw_graph(model, input_size=(batch_size, 3, 224, 224), device='meta', expand_nested=True)
model_graph.visual_graph.render(directory="./graphviz_out", view=True)

