import {type ApiGraph} from './types'
import {graph} from './the-big-fat-graph'

export async function fetchGraph(): Promise<ApiGraph> {
    return {
        "edges": [
            [
                "<AddBackward0 object at 0x00000247A1887D30>",
                "out",
                "<SumBackward0 object at 0x00000247A1887D00>",
                "in"
            ],
            [
                "<AddBackward0 object at 0x00000247A1887F70>",
                "out",
                "<AddBackward0 object at 0x00000247A1887D30>",
                "in"
            ],
            [
                "<ConvolutionBackward0 object at 0x00000247A1887EE0>",
                "out",
                "<AddBackward0 object at 0x00000247A1887F70>",
                "in"
            ],
            [
                "<ConvolutionBackward0 object at 0x00000247A1886EC0>",
                "out",
                "<ConvolutionBackward0 object at 0x00000247A1887EE0>",
                "in"
            ],
            [
                "<AddBackward0 object at 0x00000247A1887DF0>",
                "out",
                "<ConvolutionBackward0 object at 0x00000247A1884850>",
                "in"
            ],
            [
                "<AddBackward0 object at 0x00000247A1887DF0>",
                "out",
                "<ConvolutionBackward0 object at 0x00000247A1886EC0>",
                "in"
            ],
            [
                "<ConvolutionBackward0 object at 0x00000247A1886DA0>",
                "out",
                "<AddBackward0 object at 0x00000247A1887DF0>",
                "in"
            ],
            [
                "<ConvolutionBackward0 object at 0x00000247A1886D40>",
                "out",
                "<ConvolutionBackward0 object at 0x00000247A1886DA0>",
                "in"
            ],
            [
                "<ConvolutionBackward0 object at 0x00000247A1887A30>",
                "out",
                "<ConvolutionBackward0 object at 0x00000247A1886D40>",
                "in"
            ],
            [
                "<ConvolutionBackward0 object at 0x00000247A1887A30>",
                "out",
                "<ConvolutionBackward0 object at 0x00000247A1887FA0>",
                "in"
            ],
            [
                "<ConvolutionBackward0 object at 0x00000247A1887A30>",
                "out",
                "<ConvolutionBackward0 object at 0x00000247A1885BD0>",
                "in"
            ],
            [
                "<ConvolutionBackward0 object at 0x00000247A1887AF0>",
                "out",
                "<ConvolutionBackward0 object at 0x00000247A1887A30>",
                "in"
            ],
            [
                "<AccumulateGrad object at 0x00000247A18871F0>",
                "out",
                "<ConvolutionBackward0 object at 0x00000247A1887AF0>",
                "in"
            ],
            [
                "<ConvolutionBackward0 object at 0x00000247A1887340>",
                "out",
                "<AddBackward0 object at 0x00000247A1887DF0>",
                "in"
            ],
            [
                "<ConvolutionBackward0 object at 0x00000247A1885BD0>",
                "out",
                "<ConvolutionBackward0 object at 0x00000247A1887340>",
                "in"
            ],
            [
                "<ConvolutionBackward0 object at 0x00000247A1887FD0>",
                "out",
                "<AddBackward0 object at 0x00000247A1887F70>",
                "in"
            ],
            [
                "<ConvolutionBackward0 object at 0x00000247A1884850>",
                "out",
                "<ConvolutionBackward0 object at 0x00000247A1887FD0>",
                "in"
            ],
            [
                "<ConvolutionBackward0 object at 0x00000247A1887FA0>",
                "out",
                "<AddBackward0 object at 0x00000247A1887D30>",
                "in"
            ]
        ],
        "nodes": [
            {
                "children": [],
                "id": "<SumBackward0 object at 0x00000247A1887D00>",
                "info": {
                    "shape": [
                        1,
                        3,
                        224,
                        224
                    ]
                },
                "name": "Sum"
            },
            {
                "children": [
                    "<SumBackward0 object at 0x00000247A1887D00>"
                ],
                "id": "Output",
                "info": {},
                "name": "Output"
            },
            {
                "children": [],
                "id": "<AddBackward0 object at 0x00000247A1887D30>",
                "info": {},
                "name": "Add"
            },
            {
                "children": [],
                "id": "<AddBackward0 object at 0x00000247A1887F70>",
                "info": {},
                "name": "Add"
            },
            {
                "children": [],
                "id": "<ConvolutionBackward0 object at 0x00000247A1887EE0>",
                "info": {},
                "name": "Convolution"
            },
            {
                "children": [
                    "<ConvolutionBackward0 object at 0x00000247A1887EE0>"
                ],
                "id": "conv1(Conv2d)?!module_id:c9c9dfd05b044de8a33cab3b2ecc1c8c_leafa33592d453b34e6bb84032c2c073ce6f",
                "info": {
                    "description": "Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))",
                    "doc": "Applies a 2D convolution over an input signal composed of several input\n    planes.\n\n    In the simplest case, the output value of the layer with input size\n    :math:`(N, C_{\\text{in}}, H, W)` and output :math:`(N, C_{\\text{out}}, H_{\\text{out}}, W_{\\text{out}})`\n    can be precisely described as:\n\n    .. math::\n        \\text{out}(N_i, C_{\\text{out}_j}) = \\text{bias}(C_{\\text{out}_j}) +\n        \\sum_{k = 0}^{C_{\\text{in}} - 1} \\text{weight}(C_{\\text{out}_j}, k) \\star \\text{input}(N_i, k)\n\n\n    where :math:`\\star` is the valid 2D `cross-correlation`_ operator,\n    :math:`N` is a batch size, :math:`C` denotes a number of channels,\n    :math:`H` is a height of input planes in pixels, and :math:`W` is\n    width in pixels.\n    \n\n    This module supports :ref:`TensorFloat32<tf32_on_ampere>`.\n\n    On certain ROCm devices, when using float16 inputs this module will use :ref:`different precision<fp16_on_mi200>` for backward.\n\n    * :attr:`stride` controls the stride for the cross-correlation, a single\n      number or a tuple.\n\n    * :attr:`padding` controls the amount of padding applied to the input. It\n      can be either a string {'valid', 'same'} or an int / a tuple of ints giving the\n      amount of implicit padding applied on both sides.\n\n    * :attr:`dilation` controls the spacing between the kernel points; also\n      known as the à trous algorithm. It is harder to describe, but this `link`_\n      has a nice visualization of what :attr:`dilation` does.\n\n    * :attr:`groups` controls the connections between inputs and outputs.\n      :attr:`in_channels` and :attr:`out_channels` must both be divisible by\n      :attr:`groups`. For example,\n\n        * At groups=1, all inputs are convolved to all outputs.\n        * At groups=2, the operation becomes equivalent to having two conv\n          layers side by side, each seeing half the input channels\n          and producing half the output channels, and both subsequently\n          concatenated.\n        * At groups= :attr:`in_channels`, each input channel is convolved with\n          its own set of filters (of size\n          :math:`\\frac{\\text{out\\_channels}}{\\text{in\\_channels}}`).\n\n    The parameters :attr:`kernel_size`, :attr:`stride`, :attr:`padding`, :attr:`dilation` can either be:\n\n        - a single ``int`` -- in which case the same value is used for the height and width dimension\n        - a ``tuple`` of two ints -- in which case, the first `int` is used for the height dimension,\n          and the second `int` for the width dimension\n\n    Note:\n        When `groups == in_channels` and `out_channels == K * in_channels`,\n        where `K` is a positive integer, this operation is also known as a \"depthwise convolution\".\n\n        In other words, for an input of size :math:`(N, C_{in}, L_{in})`,\n        a depthwise convolution with a depthwise multiplier `K` can be performed with the arguments\n        :math:`(C_\\text{in}=C_\\text{in}, C_\\text{out}=C_\\text{in} \\times \\text{K}, ..., \\text{groups}=C_\\text{in})`.\n\n    Note:\n        In some circumstances when given tensors on a CUDA device and using CuDNN, this operator may select a nondeterministic algorithm to increase performance. If this is undesirable, you can try to make the operation deterministic (potentially at a performance cost) by setting ``torch.backends.cudnn.deterministic = True``. See :doc:`/notes/randomness` for more information.\n\n    Note:\n        ``padding='valid'`` is the same as no padding. ``padding='same'`` pads\n        the input so the output has the shape as the input. However, this mode\n        doesn't support any stride values other than 1.\n\n    Note:\n        This module supports complex data types i.e. ``complex32, complex64, complex128``.\n\n    Args:\n        in_channels (int): Number of channels in the input image\n        out_channels (int): Number of channels produced by the convolution\n        kernel_size (int or tuple): Size of the convolving kernel\n        stride (int or tuple, optional): Stride of the convolution. Default: 1\n        padding (int, tuple or str, optional): Padding added to all four sides of\n            the input. Default: 0\n        padding_mode (str, optional): ``'zeros'``, ``'reflect'``,\n            ``'replicate'`` or ``'circular'``. Default: ``'zeros'``\n        dilation (int or tuple, optional): Spacing between kernel elements. Default: 1\n        groups (int, optional): Number of blocked connections from input\n            channels to output channels. Default: 1\n        bias (bool, optional): If ``True``, adds a learnable bias to the\n            output. Default: ``True``\n    \n\n    Shape:\n        - Input: :math:`(N, C_{in}, H_{in}, W_{in})` or :math:`(C_{in}, H_{in}, W_{in})`\n        - Output: :math:`(N, C_{out}, H_{out}, W_{out})` or :math:`(C_{out}, H_{out}, W_{out})`, where\n\n          .. math::\n              H_{out} = \\left\\lfloor\\frac{H_{in}  + 2 \\times \\text{padding}[0] - \\text{dilation}[0]\n                        \\times (\\text{kernel\\_size}[0] - 1) - 1}{\\text{stride}[0]} + 1\\right\\rfloor\n\n          .. math::\n              W_{out} = \\left\\lfloor\\frac{W_{in}  + 2 \\times \\text{padding}[1] - \\text{dilation}[1]\n                        \\times (\\text{kernel\\_size}[1] - 1) - 1}{\\text{stride}[1]} + 1\\right\\rfloor\n\n    Attributes:\n        weight (Tensor): the learnable weights of the module of shape\n            :math:`(\\text{out\\_channels}, \\frac{\\text{in\\_channels}}{\\text{groups}},`\n            :math:`\\text{kernel\\_size[0]}, \\text{kernel\\_size[1]})`.\n            The values of these weights are sampled from\n            :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n        bias (Tensor):   the learnable bias of the module of shape\n            (out_channels). If :attr:`bias` is ``True``,\n            then the values of these weights are\n            sampled from :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n\n    Examples:\n\n        >>> # With square kernels and equal stride\n        >>> m = nn.Conv2d(16, 33, 3, stride=2)\n        >>> # non-square kernels and unequal stride and with padding\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2))\n        >>> # non-square kernels and unequal stride and with padding and dilation\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2), dilation=(3, 1))\n        >>> input = torch.randn(20, 16, 50, 100)\n        >>> output = m(input)\n\n    .. _cross-correlation:\n        https://en.wikipedia.org/wiki/Cross-correlation\n\n    .. _link:\n        https://github.com/vdumoulin/conv_arithmetic/blob/master/README.md\n    ",
                    "file": "C:\\Users\\Florian\\AppData\\Local\\pypoetry\\Cache\\virtualenvs\\fmapplayground-iAj09Y6H-py3.10\\lib\\site-packages\\torch\\nn\\modules\\conv.py"
                },
                "name": "conv1(Conv2d)"
            },
            {
                "children": [],
                "id": "<ConvolutionBackward0 object at 0x00000247A1887FD0>",
                "info": {},
                "name": "Convolution"
            },
            {
                "children": [
                    "<ConvolutionBackward0 object at 0x00000247A1887FD0>"
                ],
                "id": "conv2(Conv2d)?!module_id:7555b2ff833641fe8a78a220a6ee18ca_leaf9fbf580b9c3146dd840d906bf8f0cc76",
                "info": {
                    "description": "Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))",
                    "doc": "Applies a 2D convolution over an input signal composed of several input\n    planes.\n\n    In the simplest case, the output value of the layer with input size\n    :math:`(N, C_{\\text{in}}, H, W)` and output :math:`(N, C_{\\text{out}}, H_{\\text{out}}, W_{\\text{out}})`\n    can be precisely described as:\n\n    .. math::\n        \\text{out}(N_i, C_{\\text{out}_j}) = \\text{bias}(C_{\\text{out}_j}) +\n        \\sum_{k = 0}^{C_{\\text{in}} - 1} \\text{weight}(C_{\\text{out}_j}, k) \\star \\text{input}(N_i, k)\n\n\n    where :math:`\\star` is the valid 2D `cross-correlation`_ operator,\n    :math:`N` is a batch size, :math:`C` denotes a number of channels,\n    :math:`H` is a height of input planes in pixels, and :math:`W` is\n    width in pixels.\n    \n\n    This module supports :ref:`TensorFloat32<tf32_on_ampere>`.\n\n    On certain ROCm devices, when using float16 inputs this module will use :ref:`different precision<fp16_on_mi200>` for backward.\n\n    * :attr:`stride` controls the stride for the cross-correlation, a single\n      number or a tuple.\n\n    * :attr:`padding` controls the amount of padding applied to the input. It\n      can be either a string {'valid', 'same'} or an int / a tuple of ints giving the\n      amount of implicit padding applied on both sides.\n\n    * :attr:`dilation` controls the spacing between the kernel points; also\n      known as the à trous algorithm. It is harder to describe, but this `link`_\n      has a nice visualization of what :attr:`dilation` does.\n\n    * :attr:`groups` controls the connections between inputs and outputs.\n      :attr:`in_channels` and :attr:`out_channels` must both be divisible by\n      :attr:`groups`. For example,\n\n        * At groups=1, all inputs are convolved to all outputs.\n        * At groups=2, the operation becomes equivalent to having two conv\n          layers side by side, each seeing half the input channels\n          and producing half the output channels, and both subsequently\n          concatenated.\n        * At groups= :attr:`in_channels`, each input channel is convolved with\n          its own set of filters (of size\n          :math:`\\frac{\\text{out\\_channels}}{\\text{in\\_channels}}`).\n\n    The parameters :attr:`kernel_size`, :attr:`stride`, :attr:`padding`, :attr:`dilation` can either be:\n\n        - a single ``int`` -- in which case the same value is used for the height and width dimension\n        - a ``tuple`` of two ints -- in which case, the first `int` is used for the height dimension,\n          and the second `int` for the width dimension\n\n    Note:\n        When `groups == in_channels` and `out_channels == K * in_channels`,\n        where `K` is a positive integer, this operation is also known as a \"depthwise convolution\".\n\n        In other words, for an input of size :math:`(N, C_{in}, L_{in})`,\n        a depthwise convolution with a depthwise multiplier `K` can be performed with the arguments\n        :math:`(C_\\text{in}=C_\\text{in}, C_\\text{out}=C_\\text{in} \\times \\text{K}, ..., \\text{groups}=C_\\text{in})`.\n\n    Note:\n        In some circumstances when given tensors on a CUDA device and using CuDNN, this operator may select a nondeterministic algorithm to increase performance. If this is undesirable, you can try to make the operation deterministic (potentially at a performance cost) by setting ``torch.backends.cudnn.deterministic = True``. See :doc:`/notes/randomness` for more information.\n\n    Note:\n        ``padding='valid'`` is the same as no padding. ``padding='same'`` pads\n        the input so the output has the shape as the input. However, this mode\n        doesn't support any stride values other than 1.\n\n    Note:\n        This module supports complex data types i.e. ``complex32, complex64, complex128``.\n\n    Args:\n        in_channels (int): Number of channels in the input image\n        out_channels (int): Number of channels produced by the convolution\n        kernel_size (int or tuple): Size of the convolving kernel\n        stride (int or tuple, optional): Stride of the convolution. Default: 1\n        padding (int, tuple or str, optional): Padding added to all four sides of\n            the input. Default: 0\n        padding_mode (str, optional): ``'zeros'``, ``'reflect'``,\n            ``'replicate'`` or ``'circular'``. Default: ``'zeros'``\n        dilation (int or tuple, optional): Spacing between kernel elements. Default: 1\n        groups (int, optional): Number of blocked connections from input\n            channels to output channels. Default: 1\n        bias (bool, optional): If ``True``, adds a learnable bias to the\n            output. Default: ``True``\n    \n\n    Shape:\n        - Input: :math:`(N, C_{in}, H_{in}, W_{in})` or :math:`(C_{in}, H_{in}, W_{in})`\n        - Output: :math:`(N, C_{out}, H_{out}, W_{out})` or :math:`(C_{out}, H_{out}, W_{out})`, where\n\n          .. math::\n              H_{out} = \\left\\lfloor\\frac{H_{in}  + 2 \\times \\text{padding}[0] - \\text{dilation}[0]\n                        \\times (\\text{kernel\\_size}[0] - 1) - 1}{\\text{stride}[0]} + 1\\right\\rfloor\n\n          .. math::\n              W_{out} = \\left\\lfloor\\frac{W_{in}  + 2 \\times \\text{padding}[1] - \\text{dilation}[1]\n                        \\times (\\text{kernel\\_size}[1] - 1) - 1}{\\text{stride}[1]} + 1\\right\\rfloor\n\n    Attributes:\n        weight (Tensor): the learnable weights of the module of shape\n            :math:`(\\text{out\\_channels}, \\frac{\\text{in\\_channels}}{\\text{groups}},`\n            :math:`\\text{kernel\\_size[0]}, \\text{kernel\\_size[1]})`.\n            The values of these weights are sampled from\n            :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n        bias (Tensor):   the learnable bias of the module of shape\n            (out_channels). If :attr:`bias` is ``True``,\n            then the values of these weights are\n            sampled from :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n\n    Examples:\n\n        >>> # With square kernels and equal stride\n        >>> m = nn.Conv2d(16, 33, 3, stride=2)\n        >>> # non-square kernels and unequal stride and with padding\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2))\n        >>> # non-square kernels and unequal stride and with padding and dilation\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2), dilation=(3, 1))\n        >>> input = torch.randn(20, 16, 50, 100)\n        >>> output = m(input)\n\n    .. _cross-correlation:\n        https://en.wikipedia.org/wiki/Cross-correlation\n\n    .. _link:\n        https://github.com/vdumoulin/conv_arithmetic/blob/master/README.md\n    ",
                    "file": "C:\\Users\\Florian\\AppData\\Local\\pypoetry\\Cache\\virtualenvs\\fmapplayground-iAj09Y6H-py3.10\\lib\\site-packages\\torch\\nn\\modules\\conv.py"
                },
                "name": "conv2(Conv2d)"
            },
            {
                "children": [
                    "<AddBackward0 object at 0x00000247A1887F70>",
                    "conv1(Conv2d)?!module_id:c9c9dfd05b044de8a33cab3b2ecc1c8c_leafa33592d453b34e6bb84032c2c073ce6f",
                    "conv2(Conv2d)?!module_id:7555b2ff833641fe8a78a220a6ee18ca_leaf9fbf580b9c3146dd840d906bf8f0cc76"
                ],
                "id": "multiple(MultipleIn)?!module_id:3af6ab5101c548e9a44e685f7f9430dd",
                "info": {
                    "description": "MultipleIn(\n  (conv1): Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))\n  (conv2): Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))\n)",
                    "doc": null,
                    "file": "G:\\FMapPlayground\\test_networks\\submodules.py"
                },
                "name": "multiple(MultipleIn)"
            },
            {
                "children": [],
                "id": "<ConvolutionBackward0 object at 0x00000247A1887FA0>",
                "info": {},
                "name": "Convolution"
            },
            {
                "children": [
                    "<ConvolutionBackward0 object at 0x00000247A1887FA0>"
                ],
                "id": "conv1(Conv2d)?!module_id:07f6dac66289484fb475f76b492af33c_leafe4e2da743edd4c05a66f1c94237e57ec",
                "info": {
                    "description": "Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))",
                    "doc": "Applies a 2D convolution over an input signal composed of several input\n    planes.\n\n    In the simplest case, the output value of the layer with input size\n    :math:`(N, C_{\\text{in}}, H, W)` and output :math:`(N, C_{\\text{out}}, H_{\\text{out}}, W_{\\text{out}})`\n    can be precisely described as:\n\n    .. math::\n        \\text{out}(N_i, C_{\\text{out}_j}) = \\text{bias}(C_{\\text{out}_j}) +\n        \\sum_{k = 0}^{C_{\\text{in}} - 1} \\text{weight}(C_{\\text{out}_j}, k) \\star \\text{input}(N_i, k)\n\n\n    where :math:`\\star` is the valid 2D `cross-correlation`_ operator,\n    :math:`N` is a batch size, :math:`C` denotes a number of channels,\n    :math:`H` is a height of input planes in pixels, and :math:`W` is\n    width in pixels.\n    \n\n    This module supports :ref:`TensorFloat32<tf32_on_ampere>`.\n\n    On certain ROCm devices, when using float16 inputs this module will use :ref:`different precision<fp16_on_mi200>` for backward.\n\n    * :attr:`stride` controls the stride for the cross-correlation, a single\n      number or a tuple.\n\n    * :attr:`padding` controls the amount of padding applied to the input. It\n      can be either a string {'valid', 'same'} or an int / a tuple of ints giving the\n      amount of implicit padding applied on both sides.\n\n    * :attr:`dilation` controls the spacing between the kernel points; also\n      known as the à trous algorithm. It is harder to describe, but this `link`_\n      has a nice visualization of what :attr:`dilation` does.\n\n    * :attr:`groups` controls the connections between inputs and outputs.\n      :attr:`in_channels` and :attr:`out_channels` must both be divisible by\n      :attr:`groups`. For example,\n\n        * At groups=1, all inputs are convolved to all outputs.\n        * At groups=2, the operation becomes equivalent to having two conv\n          layers side by side, each seeing half the input channels\n          and producing half the output channels, and both subsequently\n          concatenated.\n        * At groups= :attr:`in_channels`, each input channel is convolved with\n          its own set of filters (of size\n          :math:`\\frac{\\text{out\\_channels}}{\\text{in\\_channels}}`).\n\n    The parameters :attr:`kernel_size`, :attr:`stride`, :attr:`padding`, :attr:`dilation` can either be:\n\n        - a single ``int`` -- in which case the same value is used for the height and width dimension\n        - a ``tuple`` of two ints -- in which case, the first `int` is used for the height dimension,\n          and the second `int` for the width dimension\n\n    Note:\n        When `groups == in_channels` and `out_channels == K * in_channels`,\n        where `K` is a positive integer, this operation is also known as a \"depthwise convolution\".\n\n        In other words, for an input of size :math:`(N, C_{in}, L_{in})`,\n        a depthwise convolution with a depthwise multiplier `K` can be performed with the arguments\n        :math:`(C_\\text{in}=C_\\text{in}, C_\\text{out}=C_\\text{in} \\times \\text{K}, ..., \\text{groups}=C_\\text{in})`.\n\n    Note:\n        In some circumstances when given tensors on a CUDA device and using CuDNN, this operator may select a nondeterministic algorithm to increase performance. If this is undesirable, you can try to make the operation deterministic (potentially at a performance cost) by setting ``torch.backends.cudnn.deterministic = True``. See :doc:`/notes/randomness` for more information.\n\n    Note:\n        ``padding='valid'`` is the same as no padding. ``padding='same'`` pads\n        the input so the output has the shape as the input. However, this mode\n        doesn't support any stride values other than 1.\n\n    Note:\n        This module supports complex data types i.e. ``complex32, complex64, complex128``.\n\n    Args:\n        in_channels (int): Number of channels in the input image\n        out_channels (int): Number of channels produced by the convolution\n        kernel_size (int or tuple): Size of the convolving kernel\n        stride (int or tuple, optional): Stride of the convolution. Default: 1\n        padding (int, tuple or str, optional): Padding added to all four sides of\n            the input. Default: 0\n        padding_mode (str, optional): ``'zeros'``, ``'reflect'``,\n            ``'replicate'`` or ``'circular'``. Default: ``'zeros'``\n        dilation (int or tuple, optional): Spacing between kernel elements. Default: 1\n        groups (int, optional): Number of blocked connections from input\n            channels to output channels. Default: 1\n        bias (bool, optional): If ``True``, adds a learnable bias to the\n            output. Default: ``True``\n    \n\n    Shape:\n        - Input: :math:`(N, C_{in}, H_{in}, W_{in})` or :math:`(C_{in}, H_{in}, W_{in})`\n        - Output: :math:`(N, C_{out}, H_{out}, W_{out})` or :math:`(C_{out}, H_{out}, W_{out})`, where\n\n          .. math::\n              H_{out} = \\left\\lfloor\\frac{H_{in}  + 2 \\times \\text{padding}[0] - \\text{dilation}[0]\n                        \\times (\\text{kernel\\_size}[0] - 1) - 1}{\\text{stride}[0]} + 1\\right\\rfloor\n\n          .. math::\n              W_{out} = \\left\\lfloor\\frac{W_{in}  + 2 \\times \\text{padding}[1] - \\text{dilation}[1]\n                        \\times (\\text{kernel\\_size}[1] - 1) - 1}{\\text{stride}[1]} + 1\\right\\rfloor\n\n    Attributes:\n        weight (Tensor): the learnable weights of the module of shape\n            :math:`(\\text{out\\_channels}, \\frac{\\text{in\\_channels}}{\\text{groups}},`\n            :math:`\\text{kernel\\_size[0]}, \\text{kernel\\_size[1]})`.\n            The values of these weights are sampled from\n            :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n        bias (Tensor):   the learnable bias of the module of shape\n            (out_channels). If :attr:`bias` is ``True``,\n            then the values of these weights are\n            sampled from :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n\n    Examples:\n\n        >>> # With square kernels and equal stride\n        >>> m = nn.Conv2d(16, 33, 3, stride=2)\n        >>> # non-square kernels and unequal stride and with padding\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2))\n        >>> # non-square kernels and unequal stride and with padding and dilation\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2), dilation=(3, 1))\n        >>> input = torch.randn(20, 16, 50, 100)\n        >>> output = m(input)\n\n    .. _cross-correlation:\n        https://en.wikipedia.org/wiki/Cross-correlation\n\n    .. _link:\n        https://github.com/vdumoulin/conv_arithmetic/blob/master/README.md\n    ",
                    "file": "C:\\Users\\Florian\\AppData\\Local\\pypoetry\\Cache\\virtualenvs\\fmapplayground-iAj09Y6H-py3.10\\lib\\site-packages\\torch\\nn\\modules\\conv.py"
                },
                "name": "conv1(Conv2d)"
            },
            {
                "children": [
                    "<AddBackward0 object at 0x00000247A1887D30>",
                    "multiple(MultipleIn)?!module_id:3af6ab5101c548e9a44e685f7f9430dd",
                    "conv1(Conv2d)?!module_id:07f6dac66289484fb475f76b492af33c_leafe4e2da743edd4c05a66f1c94237e57ec"
                ],
                "id": "triple_in(TripleIn)?!module_id:bde89febc44747f7ac2ffe36b1db296c",
                "info": {
                    "description": "TripleIn(\n  (conv1): Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))\n  (multiple): MultipleIn(\n    (conv1): Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))\n    (conv2): Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))\n  )\n)",
                    "doc": null,
                    "file": "G:\\FMapPlayground\\test_networks\\submodules.py"
                },
                "name": "triple_in(TripleIn)"
            },
            {
                "children": [],
                "id": "<ConvolutionBackward0 object at 0x00000247A1886EC0>",
                "info": {},
                "name": "Convolution"
            },
            {
                "children": [
                    "<ConvolutionBackward0 object at 0x00000247A1886EC0>"
                ],
                "id": "conv1(Conv2d)?!module_id:ee358fd587e845e5b69773f26b5c68e1_leafb8c15cfd91a24ae3aedaa16c7c6a8d71",
                "info": {
                    "description": "Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))",
                    "doc": "Applies a 2D convolution over an input signal composed of several input\n    planes.\n\n    In the simplest case, the output value of the layer with input size\n    :math:`(N, C_{\\text{in}}, H, W)` and output :math:`(N, C_{\\text{out}}, H_{\\text{out}}, W_{\\text{out}})`\n    can be precisely described as:\n\n    .. math::\n        \\text{out}(N_i, C_{\\text{out}_j}) = \\text{bias}(C_{\\text{out}_j}) +\n        \\sum_{k = 0}^{C_{\\text{in}} - 1} \\text{weight}(C_{\\text{out}_j}, k) \\star \\text{input}(N_i, k)\n\n\n    where :math:`\\star` is the valid 2D `cross-correlation`_ operator,\n    :math:`N` is a batch size, :math:`C` denotes a number of channels,\n    :math:`H` is a height of input planes in pixels, and :math:`W` is\n    width in pixels.\n    \n\n    This module supports :ref:`TensorFloat32<tf32_on_ampere>`.\n\n    On certain ROCm devices, when using float16 inputs this module will use :ref:`different precision<fp16_on_mi200>` for backward.\n\n    * :attr:`stride` controls the stride for the cross-correlation, a single\n      number or a tuple.\n\n    * :attr:`padding` controls the amount of padding applied to the input. It\n      can be either a string {'valid', 'same'} or an int / a tuple of ints giving the\n      amount of implicit padding applied on both sides.\n\n    * :attr:`dilation` controls the spacing between the kernel points; also\n      known as the à trous algorithm. It is harder to describe, but this `link`_\n      has a nice visualization of what :attr:`dilation` does.\n\n    * :attr:`groups` controls the connections between inputs and outputs.\n      :attr:`in_channels` and :attr:`out_channels` must both be divisible by\n      :attr:`groups`. For example,\n\n        * At groups=1, all inputs are convolved to all outputs.\n        * At groups=2, the operation becomes equivalent to having two conv\n          layers side by side, each seeing half the input channels\n          and producing half the output channels, and both subsequently\n          concatenated.\n        * At groups= :attr:`in_channels`, each input channel is convolved with\n          its own set of filters (of size\n          :math:`\\frac{\\text{out\\_channels}}{\\text{in\\_channels}}`).\n\n    The parameters :attr:`kernel_size`, :attr:`stride`, :attr:`padding`, :attr:`dilation` can either be:\n\n        - a single ``int`` -- in which case the same value is used for the height and width dimension\n        - a ``tuple`` of two ints -- in which case, the first `int` is used for the height dimension,\n          and the second `int` for the width dimension\n\n    Note:\n        When `groups == in_channels` and `out_channels == K * in_channels`,\n        where `K` is a positive integer, this operation is also known as a \"depthwise convolution\".\n\n        In other words, for an input of size :math:`(N, C_{in}, L_{in})`,\n        a depthwise convolution with a depthwise multiplier `K` can be performed with the arguments\n        :math:`(C_\\text{in}=C_\\text{in}, C_\\text{out}=C_\\text{in} \\times \\text{K}, ..., \\text{groups}=C_\\text{in})`.\n\n    Note:\n        In some circumstances when given tensors on a CUDA device and using CuDNN, this operator may select a nondeterministic algorithm to increase performance. If this is undesirable, you can try to make the operation deterministic (potentially at a performance cost) by setting ``torch.backends.cudnn.deterministic = True``. See :doc:`/notes/randomness` for more information.\n\n    Note:\n        ``padding='valid'`` is the same as no padding. ``padding='same'`` pads\n        the input so the output has the shape as the input. However, this mode\n        doesn't support any stride values other than 1.\n\n    Note:\n        This module supports complex data types i.e. ``complex32, complex64, complex128``.\n\n    Args:\n        in_channels (int): Number of channels in the input image\n        out_channels (int): Number of channels produced by the convolution\n        kernel_size (int or tuple): Size of the convolving kernel\n        stride (int or tuple, optional): Stride of the convolution. Default: 1\n        padding (int, tuple or str, optional): Padding added to all four sides of\n            the input. Default: 0\n        padding_mode (str, optional): ``'zeros'``, ``'reflect'``,\n            ``'replicate'`` or ``'circular'``. Default: ``'zeros'``\n        dilation (int or tuple, optional): Spacing between kernel elements. Default: 1\n        groups (int, optional): Number of blocked connections from input\n            channels to output channels. Default: 1\n        bias (bool, optional): If ``True``, adds a learnable bias to the\n            output. Default: ``True``\n    \n\n    Shape:\n        - Input: :math:`(N, C_{in}, H_{in}, W_{in})` or :math:`(C_{in}, H_{in}, W_{in})`\n        - Output: :math:`(N, C_{out}, H_{out}, W_{out})` or :math:`(C_{out}, H_{out}, W_{out})`, where\n\n          .. math::\n              H_{out} = \\left\\lfloor\\frac{H_{in}  + 2 \\times \\text{padding}[0] - \\text{dilation}[0]\n                        \\times (\\text{kernel\\_size}[0] - 1) - 1}{\\text{stride}[0]} + 1\\right\\rfloor\n\n          .. math::\n              W_{out} = \\left\\lfloor\\frac{W_{in}  + 2 \\times \\text{padding}[1] - \\text{dilation}[1]\n                        \\times (\\text{kernel\\_size}[1] - 1) - 1}{\\text{stride}[1]} + 1\\right\\rfloor\n\n    Attributes:\n        weight (Tensor): the learnable weights of the module of shape\n            :math:`(\\text{out\\_channels}, \\frac{\\text{in\\_channels}}{\\text{groups}},`\n            :math:`\\text{kernel\\_size[0]}, \\text{kernel\\_size[1]})`.\n            The values of these weights are sampled from\n            :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n        bias (Tensor):   the learnable bias of the module of shape\n            (out_channels). If :attr:`bias` is ``True``,\n            then the values of these weights are\n            sampled from :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n\n    Examples:\n\n        >>> # With square kernels and equal stride\n        >>> m = nn.Conv2d(16, 33, 3, stride=2)\n        >>> # non-square kernels and unequal stride and with padding\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2))\n        >>> # non-square kernels and unequal stride and with padding and dilation\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2), dilation=(3, 1))\n        >>> input = torch.randn(20, 16, 50, 100)\n        >>> output = m(input)\n\n    .. _cross-correlation:\n        https://en.wikipedia.org/wiki/Cross-correlation\n\n    .. _link:\n        https://github.com/vdumoulin/conv_arithmetic/blob/master/README.md\n    ",
                    "file": "C:\\Users\\Florian\\AppData\\Local\\pypoetry\\Cache\\virtualenvs\\fmapplayground-iAj09Y6H-py3.10\\lib\\site-packages\\torch\\nn\\modules\\conv.py"
                },
                "name": "conv1(Conv2d)"
            },
            {
                "children": [],
                "id": "<ConvolutionBackward0 object at 0x00000247A1884850>",
                "info": {},
                "name": "Convolution"
            },
            {
                "children": [
                    "<ConvolutionBackward0 object at 0x00000247A1884850>"
                ],
                "id": "conv2(Conv2d)?!module_id:47f29bd3438f48959232798f26d7dece_leaf55e34d8fe0564daba10301f96c6f6b77",
                "info": {
                    "description": "Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))",
                    "doc": "Applies a 2D convolution over an input signal composed of several input\n    planes.\n\n    In the simplest case, the output value of the layer with input size\n    :math:`(N, C_{\\text{in}}, H, W)` and output :math:`(N, C_{\\text{out}}, H_{\\text{out}}, W_{\\text{out}})`\n    can be precisely described as:\n\n    .. math::\n        \\text{out}(N_i, C_{\\text{out}_j}) = \\text{bias}(C_{\\text{out}_j}) +\n        \\sum_{k = 0}^{C_{\\text{in}} - 1} \\text{weight}(C_{\\text{out}_j}, k) \\star \\text{input}(N_i, k)\n\n\n    where :math:`\\star` is the valid 2D `cross-correlation`_ operator,\n    :math:`N` is a batch size, :math:`C` denotes a number of channels,\n    :math:`H` is a height of input planes in pixels, and :math:`W` is\n    width in pixels.\n    \n\n    This module supports :ref:`TensorFloat32<tf32_on_ampere>`.\n\n    On certain ROCm devices, when using float16 inputs this module will use :ref:`different precision<fp16_on_mi200>` for backward.\n\n    * :attr:`stride` controls the stride for the cross-correlation, a single\n      number or a tuple.\n\n    * :attr:`padding` controls the amount of padding applied to the input. It\n      can be either a string {'valid', 'same'} or an int / a tuple of ints giving the\n      amount of implicit padding applied on both sides.\n\n    * :attr:`dilation` controls the spacing between the kernel points; also\n      known as the à trous algorithm. It is harder to describe, but this `link`_\n      has a nice visualization of what :attr:`dilation` does.\n\n    * :attr:`groups` controls the connections between inputs and outputs.\n      :attr:`in_channels` and :attr:`out_channels` must both be divisible by\n      :attr:`groups`. For example,\n\n        * At groups=1, all inputs are convolved to all outputs.\n        * At groups=2, the operation becomes equivalent to having two conv\n          layers side by side, each seeing half the input channels\n          and producing half the output channels, and both subsequently\n          concatenated.\n        * At groups= :attr:`in_channels`, each input channel is convolved with\n          its own set of filters (of size\n          :math:`\\frac{\\text{out\\_channels}}{\\text{in\\_channels}}`).\n\n    The parameters :attr:`kernel_size`, :attr:`stride`, :attr:`padding`, :attr:`dilation` can either be:\n\n        - a single ``int`` -- in which case the same value is used for the height and width dimension\n        - a ``tuple`` of two ints -- in which case, the first `int` is used for the height dimension,\n          and the second `int` for the width dimension\n\n    Note:\n        When `groups == in_channels` and `out_channels == K * in_channels`,\n        where `K` is a positive integer, this operation is also known as a \"depthwise convolution\".\n\n        In other words, for an input of size :math:`(N, C_{in}, L_{in})`,\n        a depthwise convolution with a depthwise multiplier `K` can be performed with the arguments\n        :math:`(C_\\text{in}=C_\\text{in}, C_\\text{out}=C_\\text{in} \\times \\text{K}, ..., \\text{groups}=C_\\text{in})`.\n\n    Note:\n        In some circumstances when given tensors on a CUDA device and using CuDNN, this operator may select a nondeterministic algorithm to increase performance. If this is undesirable, you can try to make the operation deterministic (potentially at a performance cost) by setting ``torch.backends.cudnn.deterministic = True``. See :doc:`/notes/randomness` for more information.\n\n    Note:\n        ``padding='valid'`` is the same as no padding. ``padding='same'`` pads\n        the input so the output has the shape as the input. However, this mode\n        doesn't support any stride values other than 1.\n\n    Note:\n        This module supports complex data types i.e. ``complex32, complex64, complex128``.\n\n    Args:\n        in_channels (int): Number of channels in the input image\n        out_channels (int): Number of channels produced by the convolution\n        kernel_size (int or tuple): Size of the convolving kernel\n        stride (int or tuple, optional): Stride of the convolution. Default: 1\n        padding (int, tuple or str, optional): Padding added to all four sides of\n            the input. Default: 0\n        padding_mode (str, optional): ``'zeros'``, ``'reflect'``,\n            ``'replicate'`` or ``'circular'``. Default: ``'zeros'``\n        dilation (int or tuple, optional): Spacing between kernel elements. Default: 1\n        groups (int, optional): Number of blocked connections from input\n            channels to output channels. Default: 1\n        bias (bool, optional): If ``True``, adds a learnable bias to the\n            output. Default: ``True``\n    \n\n    Shape:\n        - Input: :math:`(N, C_{in}, H_{in}, W_{in})` or :math:`(C_{in}, H_{in}, W_{in})`\n        - Output: :math:`(N, C_{out}, H_{out}, W_{out})` or :math:`(C_{out}, H_{out}, W_{out})`, where\n\n          .. math::\n              H_{out} = \\left\\lfloor\\frac{H_{in}  + 2 \\times \\text{padding}[0] - \\text{dilation}[0]\n                        \\times (\\text{kernel\\_size}[0] - 1) - 1}{\\text{stride}[0]} + 1\\right\\rfloor\n\n          .. math::\n              W_{out} = \\left\\lfloor\\frac{W_{in}  + 2 \\times \\text{padding}[1] - \\text{dilation}[1]\n                        \\times (\\text{kernel\\_size}[1] - 1) - 1}{\\text{stride}[1]} + 1\\right\\rfloor\n\n    Attributes:\n        weight (Tensor): the learnable weights of the module of shape\n            :math:`(\\text{out\\_channels}, \\frac{\\text{in\\_channels}}{\\text{groups}},`\n            :math:`\\text{kernel\\_size[0]}, \\text{kernel\\_size[1]})`.\n            The values of these weights are sampled from\n            :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n        bias (Tensor):   the learnable bias of the module of shape\n            (out_channels). If :attr:`bias` is ``True``,\n            then the values of these weights are\n            sampled from :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n\n    Examples:\n\n        >>> # With square kernels and equal stride\n        >>> m = nn.Conv2d(16, 33, 3, stride=2)\n        >>> # non-square kernels and unequal stride and with padding\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2))\n        >>> # non-square kernels and unequal stride and with padding and dilation\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2), dilation=(3, 1))\n        >>> input = torch.randn(20, 16, 50, 100)\n        >>> output = m(input)\n\n    .. _cross-correlation:\n        https://en.wikipedia.org/wiki/Cross-correlation\n\n    .. _link:\n        https://github.com/vdumoulin/conv_arithmetic/blob/master/README.md\n    ",
                    "file": "C:\\Users\\Florian\\AppData\\Local\\pypoetry\\Cache\\virtualenvs\\fmapplayground-iAj09Y6H-py3.10\\lib\\site-packages\\torch\\nn\\modules\\conv.py"
                },
                "name": "conv2(Conv2d)"
            },
            {
                "children": [
                    "conv1(Conv2d)?!module_id:ee358fd587e845e5b69773f26b5c68e1_leafb8c15cfd91a24ae3aedaa16c7c6a8d71",
                    "conv2(Conv2d)?!module_id:47f29bd3438f48959232798f26d7dece_leaf55e34d8fe0564daba10301f96c6f6b77"
                ],
                "id": "multiple_out_2(MultipleOut)?!module_id:1c6e3c19d55c46588fc3f6b4961b40eb",
                "info": {
                    "description": "MultipleOut(\n  (conv1): Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))\n  (conv2): Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))\n)",
                    "doc": null,
                    "file": "G:\\FMapPlayground\\test_networks\\submodules.py"
                },
                "name": "multiple_out_2(MultipleOut)"
            },
            {
                "children": [],
                "id": "<AddBackward0 object at 0x00000247A1887DF0>",
                "info": {},
                "name": "Add"
            },
            {
                "children": [],
                "id": "<ConvolutionBackward0 object at 0x00000247A1886DA0>",
                "info": {},
                "name": "Convolution"
            },
            {
                "children": [
                    "<ConvolutionBackward0 object at 0x00000247A1886DA0>"
                ],
                "id": "conv1(Conv2d)?!module_id:aeb48a94e49f4097a6145c62fdc19eed_leaf4fec988abc42455894df41adbbeee377",
                "info": {
                    "description": "Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))",
                    "doc": "Applies a 2D convolution over an input signal composed of several input\n    planes.\n\n    In the simplest case, the output value of the layer with input size\n    :math:`(N, C_{\\text{in}}, H, W)` and output :math:`(N, C_{\\text{out}}, H_{\\text{out}}, W_{\\text{out}})`\n    can be precisely described as:\n\n    .. math::\n        \\text{out}(N_i, C_{\\text{out}_j}) = \\text{bias}(C_{\\text{out}_j}) +\n        \\sum_{k = 0}^{C_{\\text{in}} - 1} \\text{weight}(C_{\\text{out}_j}, k) \\star \\text{input}(N_i, k)\n\n\n    where :math:`\\star` is the valid 2D `cross-correlation`_ operator,\n    :math:`N` is a batch size, :math:`C` denotes a number of channels,\n    :math:`H` is a height of input planes in pixels, and :math:`W` is\n    width in pixels.\n    \n\n    This module supports :ref:`TensorFloat32<tf32_on_ampere>`.\n\n    On certain ROCm devices, when using float16 inputs this module will use :ref:`different precision<fp16_on_mi200>` for backward.\n\n    * :attr:`stride` controls the stride for the cross-correlation, a single\n      number or a tuple.\n\n    * :attr:`padding` controls the amount of padding applied to the input. It\n      can be either a string {'valid', 'same'} or an int / a tuple of ints giving the\n      amount of implicit padding applied on both sides.\n\n    * :attr:`dilation` controls the spacing between the kernel points; also\n      known as the à trous algorithm. It is harder to describe, but this `link`_\n      has a nice visualization of what :attr:`dilation` does.\n\n    * :attr:`groups` controls the connections between inputs and outputs.\n      :attr:`in_channels` and :attr:`out_channels` must both be divisible by\n      :attr:`groups`. For example,\n\n        * At groups=1, all inputs are convolved to all outputs.\n        * At groups=2, the operation becomes equivalent to having two conv\n          layers side by side, each seeing half the input channels\n          and producing half the output channels, and both subsequently\n          concatenated.\n        * At groups= :attr:`in_channels`, each input channel is convolved with\n          its own set of filters (of size\n          :math:`\\frac{\\text{out\\_channels}}{\\text{in\\_channels}}`).\n\n    The parameters :attr:`kernel_size`, :attr:`stride`, :attr:`padding`, :attr:`dilation` can either be:\n\n        - a single ``int`` -- in which case the same value is used for the height and width dimension\n        - a ``tuple`` of two ints -- in which case, the first `int` is used for the height dimension,\n          and the second `int` for the width dimension\n\n    Note:\n        When `groups == in_channels` and `out_channels == K * in_channels`,\n        where `K` is a positive integer, this operation is also known as a \"depthwise convolution\".\n\n        In other words, for an input of size :math:`(N, C_{in}, L_{in})`,\n        a depthwise convolution with a depthwise multiplier `K` can be performed with the arguments\n        :math:`(C_\\text{in}=C_\\text{in}, C_\\text{out}=C_\\text{in} \\times \\text{K}, ..., \\text{groups}=C_\\text{in})`.\n\n    Note:\n        In some circumstances when given tensors on a CUDA device and using CuDNN, this operator may select a nondeterministic algorithm to increase performance. If this is undesirable, you can try to make the operation deterministic (potentially at a performance cost) by setting ``torch.backends.cudnn.deterministic = True``. See :doc:`/notes/randomness` for more information.\n\n    Note:\n        ``padding='valid'`` is the same as no padding. ``padding='same'`` pads\n        the input so the output has the shape as the input. However, this mode\n        doesn't support any stride values other than 1.\n\n    Note:\n        This module supports complex data types i.e. ``complex32, complex64, complex128``.\n\n    Args:\n        in_channels (int): Number of channels in the input image\n        out_channels (int): Number of channels produced by the convolution\n        kernel_size (int or tuple): Size of the convolving kernel\n        stride (int or tuple, optional): Stride of the convolution. Default: 1\n        padding (int, tuple or str, optional): Padding added to all four sides of\n            the input. Default: 0\n        padding_mode (str, optional): ``'zeros'``, ``'reflect'``,\n            ``'replicate'`` or ``'circular'``. Default: ``'zeros'``\n        dilation (int or tuple, optional): Spacing between kernel elements. Default: 1\n        groups (int, optional): Number of blocked connections from input\n            channels to output channels. Default: 1\n        bias (bool, optional): If ``True``, adds a learnable bias to the\n            output. Default: ``True``\n    \n\n    Shape:\n        - Input: :math:`(N, C_{in}, H_{in}, W_{in})` or :math:`(C_{in}, H_{in}, W_{in})`\n        - Output: :math:`(N, C_{out}, H_{out}, W_{out})` or :math:`(C_{out}, H_{out}, W_{out})`, where\n\n          .. math::\n              H_{out} = \\left\\lfloor\\frac{H_{in}  + 2 \\times \\text{padding}[0] - \\text{dilation}[0]\n                        \\times (\\text{kernel\\_size}[0] - 1) - 1}{\\text{stride}[0]} + 1\\right\\rfloor\n\n          .. math::\n              W_{out} = \\left\\lfloor\\frac{W_{in}  + 2 \\times \\text{padding}[1] - \\text{dilation}[1]\n                        \\times (\\text{kernel\\_size}[1] - 1) - 1}{\\text{stride}[1]} + 1\\right\\rfloor\n\n    Attributes:\n        weight (Tensor): the learnable weights of the module of shape\n            :math:`(\\text{out\\_channels}, \\frac{\\text{in\\_channels}}{\\text{groups}},`\n            :math:`\\text{kernel\\_size[0]}, \\text{kernel\\_size[1]})`.\n            The values of these weights are sampled from\n            :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n        bias (Tensor):   the learnable bias of the module of shape\n            (out_channels). If :attr:`bias` is ``True``,\n            then the values of these weights are\n            sampled from :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n\n    Examples:\n\n        >>> # With square kernels and equal stride\n        >>> m = nn.Conv2d(16, 33, 3, stride=2)\n        >>> # non-square kernels and unequal stride and with padding\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2))\n        >>> # non-square kernels and unequal stride and with padding and dilation\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2), dilation=(3, 1))\n        >>> input = torch.randn(20, 16, 50, 100)\n        >>> output = m(input)\n\n    .. _cross-correlation:\n        https://en.wikipedia.org/wiki/Cross-correlation\n\n    .. _link:\n        https://github.com/vdumoulin/conv_arithmetic/blob/master/README.md\n    ",
                    "file": "C:\\Users\\Florian\\AppData\\Local\\pypoetry\\Cache\\virtualenvs\\fmapplayground-iAj09Y6H-py3.10\\lib\\site-packages\\torch\\nn\\modules\\conv.py"
                },
                "name": "conv1(Conv2d)"
            },
            {
                "children": [],
                "id": "<ConvolutionBackward0 object at 0x00000247A1887340>",
                "info": {},
                "name": "Convolution"
            },
            {
                "children": [
                    "<ConvolutionBackward0 object at 0x00000247A1887340>"
                ],
                "id": "conv2(Conv2d)?!module_id:1ac86e73275343bd992bbc980caa1a5f_leaf4eea7ab1f01f456c80d18d865e31e67a",
                "info": {
                    "description": "Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))",
                    "doc": "Applies a 2D convolution over an input signal composed of several input\n    planes.\n\n    In the simplest case, the output value of the layer with input size\n    :math:`(N, C_{\\text{in}}, H, W)` and output :math:`(N, C_{\\text{out}}, H_{\\text{out}}, W_{\\text{out}})`\n    can be precisely described as:\n\n    .. math::\n        \\text{out}(N_i, C_{\\text{out}_j}) = \\text{bias}(C_{\\text{out}_j}) +\n        \\sum_{k = 0}^{C_{\\text{in}} - 1} \\text{weight}(C_{\\text{out}_j}, k) \\star \\text{input}(N_i, k)\n\n\n    where :math:`\\star` is the valid 2D `cross-correlation`_ operator,\n    :math:`N` is a batch size, :math:`C` denotes a number of channels,\n    :math:`H` is a height of input planes in pixels, and :math:`W` is\n    width in pixels.\n    \n\n    This module supports :ref:`TensorFloat32<tf32_on_ampere>`.\n\n    On certain ROCm devices, when using float16 inputs this module will use :ref:`different precision<fp16_on_mi200>` for backward.\n\n    * :attr:`stride` controls the stride for the cross-correlation, a single\n      number or a tuple.\n\n    * :attr:`padding` controls the amount of padding applied to the input. It\n      can be either a string {'valid', 'same'} or an int / a tuple of ints giving the\n      amount of implicit padding applied on both sides.\n\n    * :attr:`dilation` controls the spacing between the kernel points; also\n      known as the à trous algorithm. It is harder to describe, but this `link`_\n      has a nice visualization of what :attr:`dilation` does.\n\n    * :attr:`groups` controls the connections between inputs and outputs.\n      :attr:`in_channels` and :attr:`out_channels` must both be divisible by\n      :attr:`groups`. For example,\n\n        * At groups=1, all inputs are convolved to all outputs.\n        * At groups=2, the operation becomes equivalent to having two conv\n          layers side by side, each seeing half the input channels\n          and producing half the output channels, and both subsequently\n          concatenated.\n        * At groups= :attr:`in_channels`, each input channel is convolved with\n          its own set of filters (of size\n          :math:`\\frac{\\text{out\\_channels}}{\\text{in\\_channels}}`).\n\n    The parameters :attr:`kernel_size`, :attr:`stride`, :attr:`padding`, :attr:`dilation` can either be:\n\n        - a single ``int`` -- in which case the same value is used for the height and width dimension\n        - a ``tuple`` of two ints -- in which case, the first `int` is used for the height dimension,\n          and the second `int` for the width dimension\n\n    Note:\n        When `groups == in_channels` and `out_channels == K * in_channels`,\n        where `K` is a positive integer, this operation is also known as a \"depthwise convolution\".\n\n        In other words, for an input of size :math:`(N, C_{in}, L_{in})`,\n        a depthwise convolution with a depthwise multiplier `K` can be performed with the arguments\n        :math:`(C_\\text{in}=C_\\text{in}, C_\\text{out}=C_\\text{in} \\times \\text{K}, ..., \\text{groups}=C_\\text{in})`.\n\n    Note:\n        In some circumstances when given tensors on a CUDA device and using CuDNN, this operator may select a nondeterministic algorithm to increase performance. If this is undesirable, you can try to make the operation deterministic (potentially at a performance cost) by setting ``torch.backends.cudnn.deterministic = True``. See :doc:`/notes/randomness` for more information.\n\n    Note:\n        ``padding='valid'`` is the same as no padding. ``padding='same'`` pads\n        the input so the output has the shape as the input. However, this mode\n        doesn't support any stride values other than 1.\n\n    Note:\n        This module supports complex data types i.e. ``complex32, complex64, complex128``.\n\n    Args:\n        in_channels (int): Number of channels in the input image\n        out_channels (int): Number of channels produced by the convolution\n        kernel_size (int or tuple): Size of the convolving kernel\n        stride (int or tuple, optional): Stride of the convolution. Default: 1\n        padding (int, tuple or str, optional): Padding added to all four sides of\n            the input. Default: 0\n        padding_mode (str, optional): ``'zeros'``, ``'reflect'``,\n            ``'replicate'`` or ``'circular'``. Default: ``'zeros'``\n        dilation (int or tuple, optional): Spacing between kernel elements. Default: 1\n        groups (int, optional): Number of blocked connections from input\n            channels to output channels. Default: 1\n        bias (bool, optional): If ``True``, adds a learnable bias to the\n            output. Default: ``True``\n    \n\n    Shape:\n        - Input: :math:`(N, C_{in}, H_{in}, W_{in})` or :math:`(C_{in}, H_{in}, W_{in})`\n        - Output: :math:`(N, C_{out}, H_{out}, W_{out})` or :math:`(C_{out}, H_{out}, W_{out})`, where\n\n          .. math::\n              H_{out} = \\left\\lfloor\\frac{H_{in}  + 2 \\times \\text{padding}[0] - \\text{dilation}[0]\n                        \\times (\\text{kernel\\_size}[0] - 1) - 1}{\\text{stride}[0]} + 1\\right\\rfloor\n\n          .. math::\n              W_{out} = \\left\\lfloor\\frac{W_{in}  + 2 \\times \\text{padding}[1] - \\text{dilation}[1]\n                        \\times (\\text{kernel\\_size}[1] - 1) - 1}{\\text{stride}[1]} + 1\\right\\rfloor\n\n    Attributes:\n        weight (Tensor): the learnable weights of the module of shape\n            :math:`(\\text{out\\_channels}, \\frac{\\text{in\\_channels}}{\\text{groups}},`\n            :math:`\\text{kernel\\_size[0]}, \\text{kernel\\_size[1]})`.\n            The values of these weights are sampled from\n            :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n        bias (Tensor):   the learnable bias of the module of shape\n            (out_channels). If :attr:`bias` is ``True``,\n            then the values of these weights are\n            sampled from :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n\n    Examples:\n\n        >>> # With square kernels and equal stride\n        >>> m = nn.Conv2d(16, 33, 3, stride=2)\n        >>> # non-square kernels and unequal stride and with padding\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2))\n        >>> # non-square kernels and unequal stride and with padding and dilation\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2), dilation=(3, 1))\n        >>> input = torch.randn(20, 16, 50, 100)\n        >>> output = m(input)\n\n    .. _cross-correlation:\n        https://en.wikipedia.org/wiki/Cross-correlation\n\n    .. _link:\n        https://github.com/vdumoulin/conv_arithmetic/blob/master/README.md\n    ",
                    "file": "C:\\Users\\Florian\\AppData\\Local\\pypoetry\\Cache\\virtualenvs\\fmapplayground-iAj09Y6H-py3.10\\lib\\site-packages\\torch\\nn\\modules\\conv.py"
                },
                "name": "conv2(Conv2d)"
            },
            {
                "children": [
                    "<AddBackward0 object at 0x00000247A1887DF0>",
                    "conv1(Conv2d)?!module_id:aeb48a94e49f4097a6145c62fdc19eed_leaf4fec988abc42455894df41adbbeee377",
                    "conv2(Conv2d)?!module_id:1ac86e73275343bd992bbc980caa1a5f_leaf4eea7ab1f01f456c80d18d865e31e67a"
                ],
                "id": "multiple_in(MultipleIn)?!module_id:5d717ddd1e764ded92ee4b4f1a406260",
                "info": {
                    "description": "MultipleIn(\n  (conv1): Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))\n  (conv2): Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))\n)",
                    "doc": null,
                    "file": "G:\\FMapPlayground\\test_networks\\submodules.py"
                },
                "name": "multiple_in(MultipleIn)"
            },
            {
                "children": [],
                "id": "<ConvolutionBackward0 object at 0x00000247A1886D40>",
                "info": {},
                "name": "Convolution"
            },
            {
                "children": [
                    "<ConvolutionBackward0 object at 0x00000247A1886D40>"
                ],
                "id": "conv1(Conv2d)?!module_id:59e057f34daf4b0d8d83bb50d2cc67a6_leaf7701cb1ba29b4518a5d644c871a1dec2",
                "info": {
                    "description": "Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))",
                    "doc": "Applies a 2D convolution over an input signal composed of several input\n    planes.\n\n    In the simplest case, the output value of the layer with input size\n    :math:`(N, C_{\\text{in}}, H, W)` and output :math:`(N, C_{\\text{out}}, H_{\\text{out}}, W_{\\text{out}})`\n    can be precisely described as:\n\n    .. math::\n        \\text{out}(N_i, C_{\\text{out}_j}) = \\text{bias}(C_{\\text{out}_j}) +\n        \\sum_{k = 0}^{C_{\\text{in}} - 1} \\text{weight}(C_{\\text{out}_j}, k) \\star \\text{input}(N_i, k)\n\n\n    where :math:`\\star` is the valid 2D `cross-correlation`_ operator,\n    :math:`N` is a batch size, :math:`C` denotes a number of channels,\n    :math:`H` is a height of input planes in pixels, and :math:`W` is\n    width in pixels.\n    \n\n    This module supports :ref:`TensorFloat32<tf32_on_ampere>`.\n\n    On certain ROCm devices, when using float16 inputs this module will use :ref:`different precision<fp16_on_mi200>` for backward.\n\n    * :attr:`stride` controls the stride for the cross-correlation, a single\n      number or a tuple.\n\n    * :attr:`padding` controls the amount of padding applied to the input. It\n      can be either a string {'valid', 'same'} or an int / a tuple of ints giving the\n      amount of implicit padding applied on both sides.\n\n    * :attr:`dilation` controls the spacing between the kernel points; also\n      known as the à trous algorithm. It is harder to describe, but this `link`_\n      has a nice visualization of what :attr:`dilation` does.\n\n    * :attr:`groups` controls the connections between inputs and outputs.\n      :attr:`in_channels` and :attr:`out_channels` must both be divisible by\n      :attr:`groups`. For example,\n\n        * At groups=1, all inputs are convolved to all outputs.\n        * At groups=2, the operation becomes equivalent to having two conv\n          layers side by side, each seeing half the input channels\n          and producing half the output channels, and both subsequently\n          concatenated.\n        * At groups= :attr:`in_channels`, each input channel is convolved with\n          its own set of filters (of size\n          :math:`\\frac{\\text{out\\_channels}}{\\text{in\\_channels}}`).\n\n    The parameters :attr:`kernel_size`, :attr:`stride`, :attr:`padding`, :attr:`dilation` can either be:\n\n        - a single ``int`` -- in which case the same value is used for the height and width dimension\n        - a ``tuple`` of two ints -- in which case, the first `int` is used for the height dimension,\n          and the second `int` for the width dimension\n\n    Note:\n        When `groups == in_channels` and `out_channels == K * in_channels`,\n        where `K` is a positive integer, this operation is also known as a \"depthwise convolution\".\n\n        In other words, for an input of size :math:`(N, C_{in}, L_{in})`,\n        a depthwise convolution with a depthwise multiplier `K` can be performed with the arguments\n        :math:`(C_\\text{in}=C_\\text{in}, C_\\text{out}=C_\\text{in} \\times \\text{K}, ..., \\text{groups}=C_\\text{in})`.\n\n    Note:\n        In some circumstances when given tensors on a CUDA device and using CuDNN, this operator may select a nondeterministic algorithm to increase performance. If this is undesirable, you can try to make the operation deterministic (potentially at a performance cost) by setting ``torch.backends.cudnn.deterministic = True``. See :doc:`/notes/randomness` for more information.\n\n    Note:\n        ``padding='valid'`` is the same as no padding. ``padding='same'`` pads\n        the input so the output has the shape as the input. However, this mode\n        doesn't support any stride values other than 1.\n\n    Note:\n        This module supports complex data types i.e. ``complex32, complex64, complex128``.\n\n    Args:\n        in_channels (int): Number of channels in the input image\n        out_channels (int): Number of channels produced by the convolution\n        kernel_size (int or tuple): Size of the convolving kernel\n        stride (int or tuple, optional): Stride of the convolution. Default: 1\n        padding (int, tuple or str, optional): Padding added to all four sides of\n            the input. Default: 0\n        padding_mode (str, optional): ``'zeros'``, ``'reflect'``,\n            ``'replicate'`` or ``'circular'``. Default: ``'zeros'``\n        dilation (int or tuple, optional): Spacing between kernel elements. Default: 1\n        groups (int, optional): Number of blocked connections from input\n            channels to output channels. Default: 1\n        bias (bool, optional): If ``True``, adds a learnable bias to the\n            output. Default: ``True``\n    \n\n    Shape:\n        - Input: :math:`(N, C_{in}, H_{in}, W_{in})` or :math:`(C_{in}, H_{in}, W_{in})`\n        - Output: :math:`(N, C_{out}, H_{out}, W_{out})` or :math:`(C_{out}, H_{out}, W_{out})`, where\n\n          .. math::\n              H_{out} = \\left\\lfloor\\frac{H_{in}  + 2 \\times \\text{padding}[0] - \\text{dilation}[0]\n                        \\times (\\text{kernel\\_size}[0] - 1) - 1}{\\text{stride}[0]} + 1\\right\\rfloor\n\n          .. math::\n              W_{out} = \\left\\lfloor\\frac{W_{in}  + 2 \\times \\text{padding}[1] - \\text{dilation}[1]\n                        \\times (\\text{kernel\\_size}[1] - 1) - 1}{\\text{stride}[1]} + 1\\right\\rfloor\n\n    Attributes:\n        weight (Tensor): the learnable weights of the module of shape\n            :math:`(\\text{out\\_channels}, \\frac{\\text{in\\_channels}}{\\text{groups}},`\n            :math:`\\text{kernel\\_size[0]}, \\text{kernel\\_size[1]})`.\n            The values of these weights are sampled from\n            :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n        bias (Tensor):   the learnable bias of the module of shape\n            (out_channels). If :attr:`bias` is ``True``,\n            then the values of these weights are\n            sampled from :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n\n    Examples:\n\n        >>> # With square kernels and equal stride\n        >>> m = nn.Conv2d(16, 33, 3, stride=2)\n        >>> # non-square kernels and unequal stride and with padding\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2))\n        >>> # non-square kernels and unequal stride and with padding and dilation\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2), dilation=(3, 1))\n        >>> input = torch.randn(20, 16, 50, 100)\n        >>> output = m(input)\n\n    .. _cross-correlation:\n        https://en.wikipedia.org/wiki/Cross-correlation\n\n    .. _link:\n        https://github.com/vdumoulin/conv_arithmetic/blob/master/README.md\n    ",
                    "file": "C:\\Users\\Florian\\AppData\\Local\\pypoetry\\Cache\\virtualenvs\\fmapplayground-iAj09Y6H-py3.10\\lib\\site-packages\\torch\\nn\\modules\\conv.py"
                },
                "name": "conv1(Conv2d)"
            },
            {
                "children": [],
                "id": "<ConvolutionBackward0 object at 0x00000247A1885BD0>",
                "info": {},
                "name": "Convolution"
            },
            {
                "children": [
                    "<ConvolutionBackward0 object at 0x00000247A1885BD0>"
                ],
                "id": "conv2(Conv2d)?!module_id:85266988b59b4afd8067890e3a1771d6_leaf18dfd802252f4f31b9b1b9a4a6cb40bb",
                "info": {},
                "name": "conv2(Conv2d)"
            },
            {
                "children": [
                    "conv1(Conv2d)?!module_id:59e057f34daf4b0d8d83bb50d2cc67a6_leaf7701cb1ba29b4518a5d644c871a1dec2",
                    "conv2(Conv2d)?!module_id:85266988b59b4afd8067890e3a1771d6_leaf18dfd802252f4f31b9b1b9a4a6cb40bb"
                ],
                "id": "multiple_out_1(MultipleOut)?!module_id:0ede645e68dc4294acb844989ee287db",
                "info": {
                    "description": "MultipleOut(\n  (conv1): Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))\n  (conv2): Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))\n)",
                    "doc": null,
                    "file": "G:\\FMapPlayground\\test_networks\\submodules.py"
                },
                "name": "multiple_out_1(MultipleOut)"
            },
            {
                "children": [],
                "id": "<ConvolutionBackward0 object at 0x00000247A1887A30>",
                "info": {},
                "name": "Convolution"
            },
            {
                "children": [
                    "<ConvolutionBackward0 object at 0x00000247A1887A30>"
                ],
                "id": "conv1(Conv2d)?!module_id:5584a919b9794d8e9234b3f70a0dc6ff_leafd0a2116c7ea7411790798c93917e75df",
                "info": {
                    "description": "Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))",
                    "doc": "Applies a 2D convolution over an input signal composed of several input\n    planes.\n\n    In the simplest case, the output value of the layer with input size\n    :math:`(N, C_{\\text{in}}, H, W)` and output :math:`(N, C_{\\text{out}}, H_{\\text{out}}, W_{\\text{out}})`\n    can be precisely described as:\n\n    .. math::\n        \\text{out}(N_i, C_{\\text{out}_j}) = \\text{bias}(C_{\\text{out}_j}) +\n        \\sum_{k = 0}^{C_{\\text{in}} - 1} \\text{weight}(C_{\\text{out}_j}, k) \\star \\text{input}(N_i, k)\n\n\n    where :math:`\\star` is the valid 2D `cross-correlation`_ operator,\n    :math:`N` is a batch size, :math:`C` denotes a number of channels,\n    :math:`H` is a height of input planes in pixels, and :math:`W` is\n    width in pixels.\n    \n\n    This module supports :ref:`TensorFloat32<tf32_on_ampere>`.\n\n    On certain ROCm devices, when using float16 inputs this module will use :ref:`different precision<fp16_on_mi200>` for backward.\n\n    * :attr:`stride` controls the stride for the cross-correlation, a single\n      number or a tuple.\n\n    * :attr:`padding` controls the amount of padding applied to the input. It\n      can be either a string {'valid', 'same'} or an int / a tuple of ints giving the\n      amount of implicit padding applied on both sides.\n\n    * :attr:`dilation` controls the spacing between the kernel points; also\n      known as the à trous algorithm. It is harder to describe, but this `link`_\n      has a nice visualization of what :attr:`dilation` does.\n\n    * :attr:`groups` controls the connections between inputs and outputs.\n      :attr:`in_channels` and :attr:`out_channels` must both be divisible by\n      :attr:`groups`. For example,\n\n        * At groups=1, all inputs are convolved to all outputs.\n        * At groups=2, the operation becomes equivalent to having two conv\n          layers side by side, each seeing half the input channels\n          and producing half the output channels, and both subsequently\n          concatenated.\n        * At groups= :attr:`in_channels`, each input channel is convolved with\n          its own set of filters (of size\n          :math:`\\frac{\\text{out\\_channels}}{\\text{in\\_channels}}`).\n\n    The parameters :attr:`kernel_size`, :attr:`stride`, :attr:`padding`, :attr:`dilation` can either be:\n\n        - a single ``int`` -- in which case the same value is used for the height and width dimension\n        - a ``tuple`` of two ints -- in which case, the first `int` is used for the height dimension,\n          and the second `int` for the width dimension\n\n    Note:\n        When `groups == in_channels` and `out_channels == K * in_channels`,\n        where `K` is a positive integer, this operation is also known as a \"depthwise convolution\".\n\n        In other words, for an input of size :math:`(N, C_{in}, L_{in})`,\n        a depthwise convolution with a depthwise multiplier `K` can be performed with the arguments\n        :math:`(C_\\text{in}=C_\\text{in}, C_\\text{out}=C_\\text{in} \\times \\text{K}, ..., \\text{groups}=C_\\text{in})`.\n\n    Note:\n        In some circumstances when given tensors on a CUDA device and using CuDNN, this operator may select a nondeterministic algorithm to increase performance. If this is undesirable, you can try to make the operation deterministic (potentially at a performance cost) by setting ``torch.backends.cudnn.deterministic = True``. See :doc:`/notes/randomness` for more information.\n\n    Note:\n        ``padding='valid'`` is the same as no padding. ``padding='same'`` pads\n        the input so the output has the shape as the input. However, this mode\n        doesn't support any stride values other than 1.\n\n    Note:\n        This module supports complex data types i.e. ``complex32, complex64, complex128``.\n\n    Args:\n        in_channels (int): Number of channels in the input image\n        out_channels (int): Number of channels produced by the convolution\n        kernel_size (int or tuple): Size of the convolving kernel\n        stride (int or tuple, optional): Stride of the convolution. Default: 1\n        padding (int, tuple or str, optional): Padding added to all four sides of\n            the input. Default: 0\n        padding_mode (str, optional): ``'zeros'``, ``'reflect'``,\n            ``'replicate'`` or ``'circular'``. Default: ``'zeros'``\n        dilation (int or tuple, optional): Spacing between kernel elements. Default: 1\n        groups (int, optional): Number of blocked connections from input\n            channels to output channels. Default: 1\n        bias (bool, optional): If ``True``, adds a learnable bias to the\n            output. Default: ``True``\n    \n\n    Shape:\n        - Input: :math:`(N, C_{in}, H_{in}, W_{in})` or :math:`(C_{in}, H_{in}, W_{in})`\n        - Output: :math:`(N, C_{out}, H_{out}, W_{out})` or :math:`(C_{out}, H_{out}, W_{out})`, where\n\n          .. math::\n              H_{out} = \\left\\lfloor\\frac{H_{in}  + 2 \\times \\text{padding}[0] - \\text{dilation}[0]\n                        \\times (\\text{kernel\\_size}[0] - 1) - 1}{\\text{stride}[0]} + 1\\right\\rfloor\n\n          .. math::\n              W_{out} = \\left\\lfloor\\frac{W_{in}  + 2 \\times \\text{padding}[1] - \\text{dilation}[1]\n                        \\times (\\text{kernel\\_size}[1] - 1) - 1}{\\text{stride}[1]} + 1\\right\\rfloor\n\n    Attributes:\n        weight (Tensor): the learnable weights of the module of shape\n            :math:`(\\text{out\\_channels}, \\frac{\\text{in\\_channels}}{\\text{groups}},`\n            :math:`\\text{kernel\\_size[0]}, \\text{kernel\\_size[1]})`.\n            The values of these weights are sampled from\n            :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n        bias (Tensor):   the learnable bias of the module of shape\n            (out_channels). If :attr:`bias` is ``True``,\n            then the values of these weights are\n            sampled from :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n\n    Examples:\n\n        >>> # With square kernels and equal stride\n        >>> m = nn.Conv2d(16, 33, 3, stride=2)\n        >>> # non-square kernels and unequal stride and with padding\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2))\n        >>> # non-square kernels and unequal stride and with padding and dilation\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2), dilation=(3, 1))\n        >>> input = torch.randn(20, 16, 50, 100)\n        >>> output = m(input)\n\n    .. _cross-correlation:\n        https://en.wikipedia.org/wiki/Cross-correlation\n\n    .. _link:\n        https://github.com/vdumoulin/conv_arithmetic/blob/master/README.md\n    ",
                    "file": "C:\\Users\\Florian\\AppData\\Local\\pypoetry\\Cache\\virtualenvs\\fmapplayground-iAj09Y6H-py3.10\\lib\\site-packages\\torch\\nn\\modules\\conv.py"
                },
                "name": "conv1(Conv2d)"
            },
            {
                "children": [
                    "conv1(Conv2d)?!module_id:5584a919b9794d8e9234b3f70a0dc6ff_leafd0a2116c7ea7411790798c93917e75df"
                ],
                "id": "subsub(SubSub)?!module_id:cf56303669424a308b32722dcdc43e34",
                "info": {
                    "description": "SubSub(\n  (conv1): Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))\n)",
                    "doc": null,
                    "file": "G:\\FMapPlayground\\test_networks\\submodules.py"
                },
                "name": "subsub(SubSub)"
            },
            {
                "children": [],
                "id": "<ConvolutionBackward0 object at 0x00000247A1887AF0>",
                "info": {},
                "name": "Convolution"
            },
            {
                "children": [
                    "<ConvolutionBackward0 object at 0x00000247A1887AF0>"
                ],
                "id": "conv1(Conv2d)?!module_id:198c9deaf84940f59d1ecb5e6b51d3ee_leaff4a0665eb1b242c8a30a236fbac67f2d",
                "info": {
                    "description": "Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))",
                    "doc": "Applies a 2D convolution over an input signal composed of several input\n    planes.\n\n    In the simplest case, the output value of the layer with input size\n    :math:`(N, C_{\\text{in}}, H, W)` and output :math:`(N, C_{\\text{out}}, H_{\\text{out}}, W_{\\text{out}})`\n    can be precisely described as:\n\n    .. math::\n        \\text{out}(N_i, C_{\\text{out}_j}) = \\text{bias}(C_{\\text{out}_j}) +\n        \\sum_{k = 0}^{C_{\\text{in}} - 1} \\text{weight}(C_{\\text{out}_j}, k) \\star \\text{input}(N_i, k)\n\n\n    where :math:`\\star` is the valid 2D `cross-correlation`_ operator,\n    :math:`N` is a batch size, :math:`C` denotes a number of channels,\n    :math:`H` is a height of input planes in pixels, and :math:`W` is\n    width in pixels.\n    \n\n    This module supports :ref:`TensorFloat32<tf32_on_ampere>`.\n\n    On certain ROCm devices, when using float16 inputs this module will use :ref:`different precision<fp16_on_mi200>` for backward.\n\n    * :attr:`stride` controls the stride for the cross-correlation, a single\n      number or a tuple.\n\n    * :attr:`padding` controls the amount of padding applied to the input. It\n      can be either a string {'valid', 'same'} or an int / a tuple of ints giving the\n      amount of implicit padding applied on both sides.\n\n    * :attr:`dilation` controls the spacing between the kernel points; also\n      known as the à trous algorithm. It is harder to describe, but this `link`_\n      has a nice visualization of what :attr:`dilation` does.\n\n    * :attr:`groups` controls the connections between inputs and outputs.\n      :attr:`in_channels` and :attr:`out_channels` must both be divisible by\n      :attr:`groups`. For example,\n\n        * At groups=1, all inputs are convolved to all outputs.\n        * At groups=2, the operation becomes equivalent to having two conv\n          layers side by side, each seeing half the input channels\n          and producing half the output channels, and both subsequently\n          concatenated.\n        * At groups= :attr:`in_channels`, each input channel is convolved with\n          its own set of filters (of size\n          :math:`\\frac{\\text{out\\_channels}}{\\text{in\\_channels}}`).\n\n    The parameters :attr:`kernel_size`, :attr:`stride`, :attr:`padding`, :attr:`dilation` can either be:\n\n        - a single ``int`` -- in which case the same value is used for the height and width dimension\n        - a ``tuple`` of two ints -- in which case, the first `int` is used for the height dimension,\n          and the second `int` for the width dimension\n\n    Note:\n        When `groups == in_channels` and `out_channels == K * in_channels`,\n        where `K` is a positive integer, this operation is also known as a \"depthwise convolution\".\n\n        In other words, for an input of size :math:`(N, C_{in}, L_{in})`,\n        a depthwise convolution with a depthwise multiplier `K` can be performed with the arguments\n        :math:`(C_\\text{in}=C_\\text{in}, C_\\text{out}=C_\\text{in} \\times \\text{K}, ..., \\text{groups}=C_\\text{in})`.\n\n    Note:\n        In some circumstances when given tensors on a CUDA device and using CuDNN, this operator may select a nondeterministic algorithm to increase performance. If this is undesirable, you can try to make the operation deterministic (potentially at a performance cost) by setting ``torch.backends.cudnn.deterministic = True``. See :doc:`/notes/randomness` for more information.\n\n    Note:\n        ``padding='valid'`` is the same as no padding. ``padding='same'`` pads\n        the input so the output has the shape as the input. However, this mode\n        doesn't support any stride values other than 1.\n\n    Note:\n        This module supports complex data types i.e. ``complex32, complex64, complex128``.\n\n    Args:\n        in_channels (int): Number of channels in the input image\n        out_channels (int): Number of channels produced by the convolution\n        kernel_size (int or tuple): Size of the convolving kernel\n        stride (int or tuple, optional): Stride of the convolution. Default: 1\n        padding (int, tuple or str, optional): Padding added to all four sides of\n            the input. Default: 0\n        padding_mode (str, optional): ``'zeros'``, ``'reflect'``,\n            ``'replicate'`` or ``'circular'``. Default: ``'zeros'``\n        dilation (int or tuple, optional): Spacing between kernel elements. Default: 1\n        groups (int, optional): Number of blocked connections from input\n            channels to output channels. Default: 1\n        bias (bool, optional): If ``True``, adds a learnable bias to the\n            output. Default: ``True``\n    \n\n    Shape:\n        - Input: :math:`(N, C_{in}, H_{in}, W_{in})` or :math:`(C_{in}, H_{in}, W_{in})`\n        - Output: :math:`(N, C_{out}, H_{out}, W_{out})` or :math:`(C_{out}, H_{out}, W_{out})`, where\n\n          .. math::\n              H_{out} = \\left\\lfloor\\frac{H_{in}  + 2 \\times \\text{padding}[0] - \\text{dilation}[0]\n                        \\times (\\text{kernel\\_size}[0] - 1) - 1}{\\text{stride}[0]} + 1\\right\\rfloor\n\n          .. math::\n              W_{out} = \\left\\lfloor\\frac{W_{in}  + 2 \\times \\text{padding}[1] - \\text{dilation}[1]\n                        \\times (\\text{kernel\\_size}[1] - 1) - 1}{\\text{stride}[1]} + 1\\right\\rfloor\n\n    Attributes:\n        weight (Tensor): the learnable weights of the module of shape\n            :math:`(\\text{out\\_channels}, \\frac{\\text{in\\_channels}}{\\text{groups}},`\n            :math:`\\text{kernel\\_size[0]}, \\text{kernel\\_size[1]})`.\n            The values of these weights are sampled from\n            :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n        bias (Tensor):   the learnable bias of the module of shape\n            (out_channels). If :attr:`bias` is ``True``,\n            then the values of these weights are\n            sampled from :math:`\\mathcal{U}(-\\sqrt{k}, \\sqrt{k})` where\n            :math:`k = \\frac{groups}{C_\\text{in} * \\prod_{i=0}^{1}\\text{kernel\\_size}[i]}`\n\n    Examples:\n\n        >>> # With square kernels and equal stride\n        >>> m = nn.Conv2d(16, 33, 3, stride=2)\n        >>> # non-square kernels and unequal stride and with padding\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2))\n        >>> # non-square kernels and unequal stride and with padding and dilation\n        >>> m = nn.Conv2d(16, 33, (3, 5), stride=(2, 1), padding=(4, 2), dilation=(3, 1))\n        >>> input = torch.randn(20, 16, 50, 100)\n        >>> output = m(input)\n\n    .. _cross-correlation:\n        https://en.wikipedia.org/wiki/Cross-correlation\n\n    .. _link:\n        https://github.com/vdumoulin/conv_arithmetic/blob/master/README.md\n    ",
                    "file": "C:\\Users\\Florian\\AppData\\Local\\pypoetry\\Cache\\virtualenvs\\fmapplayground-iAj09Y6H-py3.10\\lib\\site-packages\\torch\\nn\\modules\\conv.py"
                },
                "name": "conv1(Conv2d)"
            },
            {
                "children": [
                    "subsub(SubSub)?!module_id:cf56303669424a308b32722dcdc43e34",
                    "conv1(Conv2d)?!module_id:198c9deaf84940f59d1ecb5e6b51d3ee_leaff4a0665eb1b242c8a30a236fbac67f2d"
                ],
                "id": "sub_net1(Sub)?!module_id:f3a282ee4acd46bf8fb2cfa6b19043af",
                "info": {
                    "description": "Sub(\n  (conv1): Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))\n  (subsub): SubSub(\n    (conv1): Conv2d(3, 3, kernel_size=(1, 1), stride=(1, 1))\n  )\n)",
                    "doc": null,
                    "file": "G:\\FMapPlayground\\test_networks\\submodules.py"
                },
                "name": "sub_net1(Sub)"
            },
            {
                "children": [
                    "triple_in(TripleIn)?!module_id:bde89febc44747f7ac2ffe36b1db296c",
                    "multiple_out_2(MultipleOut)?!module_id:1c6e3c19d55c46588fc3f6b4961b40eb",
                    "multiple_in(MultipleIn)?!module_id:5d717ddd1e764ded92ee4b4f1a406260",
                    "multiple_out_1(MultipleOut)?!module_id:0ede645e68dc4294acb844989ee287db",
                    "sub_net1(Sub)?!module_id:f3a282ee4acd46bf8fb2cfa6b19043af"
                ],
                "id": "Net",
                "info": {},
                "name": "Net"
            },
            {
                "children": [],
                "id": "<AccumulateGrad object at 0x00000247A18871F0>",
                "info": {},
                "name": "AccumulateGrad"
            },
            {
                "children": [
                    "<AccumulateGrad object at 0x00000247A18871F0>"
                ],
                "id": "Input",
                "info": {},
                "name": "Input"
            }
        ],
        "status": "success"
    }

}

export function getFeatureMapUrl() {
    return '/seehorse.jpg'
}
