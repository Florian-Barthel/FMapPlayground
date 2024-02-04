import torchvision
import torch
import torch.nn as nn

import config


class Net(torch.nn.Module):
    def __init__(self, ):
        super().__init__()
        backbone = torchvision.models.mobilenet_v2(pretrained=True)

        self.features = nn.Sequential(*(list(backbone.features)))

        self.conv = nn.Conv2d(
            in_channels=1280,
            out_channels=len(config.scales) * len(config.aspect_ratios) * 2,
            kernel_size=1,
            stride=(1, 1)
        )
        self.train_mode()

    def forward(self, x):
        features = self.features(x)
        conv = self.conv(features)
        reshape = torch.reshape(conv, [
            x.shape[0],
            2,
            len(config.scales),
            len(config.aspect_ratios),
            config.f_map_rows,
            config.f_map_cols
        ])
        transpose = reshape.permute(0, 1, 4, 5, 2, 3)
        return transpose

    def train_mode(self):
        self.features.train()
        for m in self.features.modules():
            if isinstance(m, torch.nn.BatchNorm2d):
                m.eval()


if __name__ == '__main__':
    net = Net().to(config.device)
    x = torch.randn((1, 3, 320, 320)).to(config.device)
    y = net.forward(x)
    print(y)
