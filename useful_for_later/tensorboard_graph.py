import torch
from PIL import Image
from timm.models import hrnet_w32 # , vision_transformer
from torchvision.models import alexnet, resnet50, convnext_tiny, DenseNet, inception_v3
from torchvision.transforms import transforms
from network_baseline import SegmentationNetBaseline

from torch.utils.tensorboard import SummaryWriter

writer = SummaryWriter('show_graph')


if __name__ == '__main__':
    img_pil = Image.open('../images/elefant.jpg').convert('RGB').resize((224, 224))
    img = transforms.ToTensor()(img_pil)[None, ...]
    net = hrnet_w32() #vision_transformer.vit_small_patch16_36x1_224()
    net.eval()
    writer.add_graph(net, img)
    writer.close()

