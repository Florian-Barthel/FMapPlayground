import api
from test_networks import submodules

from torchvision.models import (
    efficientnet_b4,
    mobilenet_v2,
    vgg16,
    inception_v3,
    Inception_V3_Weights,
    googlenet,
    squeezenet,
)

if __name__ == "__main__":
    net = submodules.Net()
    api.start_api(squeezenet.squeezenet1_0())

