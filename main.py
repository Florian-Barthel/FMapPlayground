from PIL import Image
from torchvision.models import resnet50, alexnet, convnext_tiny
from timm.models import hrnet_w32

from torchvision.transforms import transforms

from forward_hooks import VerboseExecution

if __name__ == '__main__':
    img_pil = Image.open('elefant.jpg').convert('RGB')
    img = transforms.ToTensor()(img_pil)[None, ...]

    verbose_resnet = VerboseExecution(resnet50())
    out = verbose_resnet(img)
    print()
