import torch


class CombineNet(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.sub_net1 = SubNet()
        self.sub_net2 = SubNet()

    def forward(self, x):
        x = torch.cat(x)
        x1 = self.sub_net1(x)
        x2 = self.sub_net2(x)
        return x1 + x2


class SubNet(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = torch.nn.Conv2d(3, 3, kernel_size=1)
        self.subsubnet = SubSubNet()

    def forward(self, x):
        x = self.conv1(x)
        x = self.subsubnet(x)
        return x


class SubSubNet(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = torch.nn.Conv2d(3, 3, kernel_size=1)

    def forward(self, x):
        x = self.conv1(x)
        return x


class CatNet(torch.nn.ModuleDict):
    def __init__(self):
        super().__init__()
        for i in range(2):
            self.add_module("combine%d" % (i + 1), CombineNet())

    def forward(self, x):
        results = [x]
        for name, layer in self.items():
            results.append(layer(results))
        return torch.cat(results, dim=0)
