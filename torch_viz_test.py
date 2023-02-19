import torch
import torchviz
from PIL import Image
from timm.models import hrnet_w32, vision_transformer
from torchvision.models import alexnet, resnet50, convnext_tiny, DenseNet
from torchvision.transforms import transforms

if __name__ == '__main__':
    img_pil = Image.open('images/elefant.jpg').convert('RGB').resize((224, 224))
    img = transforms.ToTensor()(img_pil)[None, ...]
    net = convnext_tiny() # vision_transformer.vit_small_patch16_36x1_224()
    net.eval()
    cross_entropy_function = torch.nn.CrossEntropyLoss()
    out = net(img)
    target_label = torch.tensor([386])
    loss = torch.sum(out)# cross_entropy_function(input=out, target=target_label)

    result = torchviz.make_dot(loss, params=dict(net.named_parameters()))
    result.render(directory='doctest-output', view=True)

