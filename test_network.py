import torch


class TestNet(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = torch.nn.Conv2d(3, 3, kernel_size=3)
        self.conv2 = torch.nn.Conv2d(3, 3, kernel_size=3)
        self.conv3 = torch.nn.Conv2d(3, 3, kernel_size=3)
        self.combine = CombineNet()

    def forward(self, x):
        x = self.conv1(x)
        x = self.conv2(x)
        x = self.conv3(x)
        x = self.conv2(x)
        x = self.conv3(x)
        x1, x2 = self.combine(x)
        return x1 + x2


class CombineNet(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.sub_net1 = SubNet()
        self.sub_net2 = SubNet()

    def forward(self, x):
        x1 = self.sub_net1(x)
        x2 = self.sub_net2(x)
        return x1, x2


class SubNet(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = torch.nn.Conv2d(3, 3, kernel_size=3)
        self.conv2 = torch.nn.Conv2d(3, 3, kernel_size=3)
        self.conv3 = torch.nn.Conv2d(3, 3, kernel_size=3)
        self.ident = torch.nn.Identity()

    def forward(self, x):
        x = self.ident(x)
        x = self.conv1(x)
        x = self.conv2(x)
        x = self.conv3(x)
        return x + 3
