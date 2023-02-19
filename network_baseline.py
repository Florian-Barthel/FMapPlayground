import torch
from torch.utils.data import DataLoader
from torchvision.models import resnet18


class EncoderResNet18(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.out_channels = 512
        self.backbone = resnet18(weights='DEFAULT')
        self.backbone.layer3[0].conv1.stride = (1, 1)
        self.backbone.layer3[0].downsample[0].stride = (1, 1)
        self.backbone.layer4[0].conv1.stride = (1, 1)
        self.backbone.layer4[0].downsample[0].stride = (1, 1)

    def forward(self, x):
        x = self.backbone.conv1(x)
        x = self.backbone.bn1(x)
        x = self.backbone.relu(x)
        x = self.backbone.maxpool(x)

        x = self.backbone.layer1(x)
        x = self.backbone.layer2(x)
        x = self.backbone.layer3(x)
        x = self.backbone.layer4(x)
        return x


class Decoder(torch.nn.Module):
    def __init__(self, in_channels):
        super().__init__()
        self.atrous_4 = torch.nn.Conv2d(in_channels, 256, kernel_size=3, dilation=4, padding=4)
        self.atrous_8 = torch.nn.Conv2d(in_channels, 256, kernel_size=3, dilation=8, padding=8)
        self.atrous_12 = torch.nn.Conv2d(in_channels, 256, kernel_size=3, dilation=12, padding=12)
        self.atrous_16 = torch.nn.Conv2d(in_channels, 256, kernel_size=3, dilation=16, padding=16)
        self.conv_out = torch.nn.Conv2d(256, 15, kernel_size=1)
        self.upsample = torch.nn.UpsamplingBilinear2d(scale_factor=8)
        self.relu = torch.nn.ReLU()

    def forward(self, x):
        x = sum([self.relu(conv(x)) for conv in [self.atrous_4, self.atrous_8, self.atrous_12, self.atrous_16]])
        x = self.conv_out(x)
        x = self.upsample(x)
        return x


class SegmentationNetBaseline(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.encoder = EncoderResNet18()
        self.decoder = Decoder(in_channels=self.encoder.out_channels)

    def forward(self, x):
        return self.decoder(self.encoder(x))
