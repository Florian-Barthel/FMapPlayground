import torch


class Net(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.sub_net1 = Sub()
        self.multiple_out_1 = MultipleOut()
        self.multiple_out_2 = MultipleOut()

        self.multiple_in = MultipleIn()
        self.triple_in = TripleIn()

    def forward(self, x):
        x_1 = self.sub_net1(x)
        x, y = self.multiple_out_1(x_1)
        x = self.multiple_in(x, y)

        x, y = self.multiple_out_2(x)
        x = self.triple_in(x, y, x_1)
        return x


class Sub(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = torch.nn.Conv2d(3, 3, kernel_size=1)
        self.subsub = SubSub()

    def forward(self, x):
        x = self.conv1(x)
        x = self.subsub(x)
        return x


class SubSub(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = torch.nn.Conv2d(3, 3, kernel_size=1)

    def forward(self, x):
        x = self.conv1(x)
        return x


class MultipleOut(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = torch.nn.Conv2d(3, 3, kernel_size=1)
        self.conv2 = torch.nn.Conv2d(3, 3, kernel_size=1)

    def forward(self, x):
        x1 = self.conv1(x)
        x2 = self.conv2(x)
        return x1, x2


class MultipleIn(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = torch.nn.Conv2d(3, 3, kernel_size=1)
        self.conv2 = torch.nn.Conv2d(3, 3, kernel_size=1)

    def forward(self, x, y):
        x = self.conv1(x)
        y = self.conv2(y)
        return x + y


class TripleIn(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = torch.nn.Conv2d(3, 3, kernel_size=1)
        self.multiple = MultipleIn()

    def forward(self, x, y, z):
        z = self.conv1(z)
        x = self.multiple(x, y)
        return x + z
