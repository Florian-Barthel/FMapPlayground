import { type ApiGraph } from './types'
import { graph } from './the-big-fat-graph'

export async function fetchGraph(): Promise<ApiGraph> {
  return {
    nodes: [
      {
        children: [],
        id: '<SumBackward0 object at 0x00000164CF2F7BE0>'
      },
      {
        children: ['<SumBackward0 object at 0x00000164CF2F7BE0>'],
        id: 'Output'
      },
      {
        children: [],
        id: '<AddBackward0 object at 0x00000164CF2F7D00>'
      },
      {
        children: [],
        id: '<AddBackward0 object at 0x00000164CF2F7CD0>'
      },
      {
        children: [],
        id: '<ConvolutionBackward0 object at 0x00000164CF2F7EE0>'
      },
      {
        children: ['<ConvolutionBackward0 object at 0x00000164CF2F7EE0>'],
        id: 'conv1(Conv2d)?!module_id:9e2a2bd291ef47b88c05d177cbf5cbac_leaffa2e023635e543d397e7ab0438fe0a5b'
      },
      {
        children: [],
        id: '<ConvolutionBackward0 object at 0x00000164CF2F7EB0>'
      },
      {
        children: ['<ConvolutionBackward0 object at 0x00000164CF2F7EB0>'],
        id: 'conv2(Conv2d)?!module_id:91a00c910f6444288691a69c217e4951_leaf664d1aa2e3f8403abbffdd24922301d6'
      },
      {
        children: [
          '<AddBackward0 object at 0x00000164CF2F7CD0>',
          'conv1(Conv2d)?!module_id:9e2a2bd291ef47b88c05d177cbf5cbac_leaffa2e023635e543d397e7ab0438fe0a5b',
          'conv2(Conv2d)?!module_id:91a00c910f6444288691a69c217e4951_leaf664d1aa2e3f8403abbffdd24922301d6'
        ],
        id: 'multiple(MultipleIn)?!module_id:aa73a133bc8d4c79a3426836b039c9f3'
      },
      {
        children: [],
        id: '<ConvolutionBackward0 object at 0x00000164CF2F79A0>'
      },
      {
        children: ['<ConvolutionBackward0 object at 0x00000164CF2F79A0>'],
        id: 'conv1(Conv2d)?!module_id:cc6beb5992194405acba07d227a9df9c_leaf8dcfb0e38c764c01b6792c55afdae232'
      },
      {
        children: [
          '<AddBackward0 object at 0x00000164CF2F7D00>',
          'multiple(MultipleIn)?!module_id:aa73a133bc8d4c79a3426836b039c9f3',
          'conv1(Conv2d)?!module_id:cc6beb5992194405acba07d227a9df9c_leaf8dcfb0e38c764c01b6792c55afdae232'
        ],
        id: 'triple_in(TripleIn)?!module_id:c9b13d2bb77642fab3486d9cd46c6dd2'
      },
      {
        children: [],
        id: '<ConvolutionBackward0 object at 0x00000164CF2F7DC0>'
      },
      {
        children: ['<ConvolutionBackward0 object at 0x00000164CF2F7DC0>'],
        id: 'conv1(Conv2d)?!module_id:6b7275dc6f82441fa146fede7183d76c_leafc7c481abd1fa4369b2717f066fad096c'
      },
      {
        children: [],
        id: '<ConvolutionBackward0 object at 0x00000164D0331D20>'
      },
      {
        children: ['<ConvolutionBackward0 object at 0x00000164D0331D20>'],
        id: 'conv2(Conv2d)?!module_id:d8105d21b16c49668b9067324c93a324_leafda99221397bd43ae82513a860573d961'
      },
      {
        children: [
          'conv1(Conv2d)?!module_id:6b7275dc6f82441fa146fede7183d76c_leafc7c481abd1fa4369b2717f066fad096c',
          'conv2(Conv2d)?!module_id:d8105d21b16c49668b9067324c93a324_leafda99221397bd43ae82513a860573d961'
        ],
        id: 'multiple_out_2(MultipleOut)?!module_id:2b0091d263c14ab4bc5db6dfd4025400'
      },
      {
        children: [],
        id: '<AddBackward0 object at 0x00000164CF2F7E80>'
      },
      {
        children: [],
        id: '<ConvolutionBackward0 object at 0x00000164D0331090>'
      },
      {
        children: ['<ConvolutionBackward0 object at 0x00000164D0331090>'],
        id: 'conv1(Conv2d)?!module_id:6658d44a2bf94ac689694c85e060648f_leafa192cf054147479783cdefcac029ce2c'
      },
      {
        children: [],
        id: '<ConvolutionBackward0 object at 0x00000164D0331060>'
      },
      {
        children: ['<ConvolutionBackward0 object at 0x00000164D0331060>'],
        id: 'conv2(Conv2d)?!module_id:20f9c734e6ae4f88bdb0419551ca44d7_leaf0b4a2a40ec5b46a6aeb3f9b74ac07ae5'
      },
      {
        children: [
          '<AddBackward0 object at 0x00000164CF2F7E80>',
          'conv1(Conv2d)?!module_id:6658d44a2bf94ac689694c85e060648f_leafa192cf054147479783cdefcac029ce2c',
          'conv2(Conv2d)?!module_id:20f9c734e6ae4f88bdb0419551ca44d7_leaf0b4a2a40ec5b46a6aeb3f9b74ac07ae5'
        ],
        id: 'multiple_in(MultipleIn)?!module_id:c8fad795bc38487aac6f9de37c2b0c2d'
      },
      {
        children: [],
        id: '<ConvolutionBackward0 object at 0x00000164D03306D0>'
      },
      {
        children: ['<ConvolutionBackward0 object at 0x00000164D03306D0>'],
        id: 'conv1(Conv2d)?!module_id:f33c2ba8524f48d4bedf51f3d68640c3_leaf07dba204dabe476a9f56c5e797e8cafc'
      },
      {
        children: [],
        id: '<ConvolutionBackward0 object at 0x00000164D0331F60>'
      },
      {
        children: ['<ConvolutionBackward0 object at 0x00000164D0331F60>'],
        id: 'conv2(Conv2d)?!module_id:1c0cef85e5c1428d857e950cf61c5a2e_leafe88823dc03e54d5f81a2d730e2bc99d5'
      },
      {
        children: [
          'conv1(Conv2d)?!module_id:f33c2ba8524f48d4bedf51f3d68640c3_leaf07dba204dabe476a9f56c5e797e8cafc',
          'conv2(Conv2d)?!module_id:1c0cef85e5c1428d857e950cf61c5a2e_leafe88823dc03e54d5f81a2d730e2bc99d5'
        ],
        id: 'multiple_out_1(MultipleOut)?!module_id:591d5cb92405483880a962e50b59ef20'
      },
      {
        children: [],
        id: '<ConvolutionBackward0 object at 0x00000164D0330430>'
      },
      {
        children: ['<ConvolutionBackward0 object at 0x00000164D0330430>'],
        id: 'conv1(Conv2d)?!module_id:2838206f56e346a19937db907bcb5655_leaf377d35e94b1a46bbb56ec73f8c75bce2'
      },
      {
        children: [
          'conv1(Conv2d)?!module_id:2838206f56e346a19937db907bcb5655_leaf377d35e94b1a46bbb56ec73f8c75bce2'
        ],
        id: 'subsub(SubSub)?!module_id:ac822f07a4ce410ba585653ce5248de7'
      },
      {
        children: [],
        id: '<ConvolutionBackward0 object at 0x00000164D0330070>'
      },
      {
        children: ['<ConvolutionBackward0 object at 0x00000164D0330070>'],
        id: 'conv1(Conv2d)?!module_id:0618ac1765ba4cd3aae9bc1f1115fa59_leafe3cbf8379e3c4b52b07fddfb232fb4aa'
      },
      {
        children: [
          'subsub(SubSub)?!module_id:ac822f07a4ce410ba585653ce5248de7',
          'conv1(Conv2d)?!module_id:0618ac1765ba4cd3aae9bc1f1115fa59_leafe3cbf8379e3c4b52b07fddfb232fb4aa'
        ],
        id: 'sub_net1(Sub)?!module_id:fd91a3e4ce55472fb84f358a308c7464'
      },
      {
        children: [
          'triple_in(TripleIn)?!module_id:c9b13d2bb77642fab3486d9cd46c6dd2',
          'multiple_out_2(MultipleOut)?!module_id:2b0091d263c14ab4bc5db6dfd4025400',
          'multiple_in(MultipleIn)?!module_id:c8fad795bc38487aac6f9de37c2b0c2d',
          'multiple_out_1(MultipleOut)?!module_id:591d5cb92405483880a962e50b59ef20',
          'sub_net1(Sub)?!module_id:fd91a3e4ce55472fb84f358a308c7464'
        ],
        id: 'Net'
      },
      {
        children: [],
        id: '<AccumulateGrad object at 0x00000164D0330040>',
        name: 'AccumulateGrad'
      },
      {
        children: ['<AccumulateGrad object at 0x00000164D0330040>'],
        id: 'Input'
      }
    ],
    edges: [
      [
        '<AddBackward0 object at 0x00000164CF2F7D00>',
        'out',
        '<SumBackward0 object at 0x00000164CF2F7BE0>',
        'in'
      ],
      [
        '<AddBackward0 object at 0x00000164CF2F7CD0>',
        'out',
        '<AddBackward0 object at 0x00000164CF2F7D00>',
        'in'
      ],
      [
        '<ConvolutionBackward0 object at 0x00000164CF2F7EE0>',
        'out',
        '<AddBackward0 object at 0x00000164CF2F7CD0>',
        'in'
      ],
      [
        '<ConvolutionBackward0 object at 0x00000164CF2F7DC0>',
        'out',
        '<ConvolutionBackward0 object at 0x00000164CF2F7EE0>',
        'in'
      ],
      [
        '<AddBackward0 object at 0x00000164CF2F7E80>',
        'out',
        '<ConvolutionBackward0 object at 0x00000164D0331D20>',
        'in'
      ],
      [
        '<AddBackward0 object at 0x00000164CF2F7E80>',
        'out',
        '<ConvolutionBackward0 object at 0x00000164CF2F7DC0>',
        'in'
      ],
      [
        '<ConvolutionBackward0 object at 0x00000164D0331090>',
        'out',
        '<AddBackward0 object at 0x00000164CF2F7E80>',
        'in'
      ],
      [
        '<ConvolutionBackward0 object at 0x00000164D03306D0>',
        'out',
        '<ConvolutionBackward0 object at 0x00000164D0331090>',
        'in'
      ],
      [
        '<ConvolutionBackward0 object at 0x00000164D0330430>',
        'out',
        '<ConvolutionBackward0 object at 0x00000164D0331F60>',
        'in'
      ],
      [
        '<ConvolutionBackward0 object at 0x00000164D0330430>',
        'out',
        '<ConvolutionBackward0 object at 0x00000164CF2F79A0>',
        'in'
      ],
      [
        '<ConvolutionBackward0 object at 0x00000164D0330430>',
        'out',
        '<ConvolutionBackward0 object at 0x00000164D03306D0>',
        'in'
      ],
      [
        '<ConvolutionBackward0 object at 0x00000164D0330070>',
        'out',
        '<ConvolutionBackward0 object at 0x00000164D0330430>',
        'in'
      ],
      [
        '<AccumulateGrad object at 0x00000164D0330040>',
        'out',
        '<ConvolutionBackward0 object at 0x00000164D0330070>',
        'in'
      ],
      [
        '<ConvolutionBackward0 object at 0x00000164D0331060>',
        'out',
        '<AddBackward0 object at 0x00000164CF2F7E80>',
        'in'
      ],
      [
        '<ConvolutionBackward0 object at 0x00000164D0331F60>',
        'out',
        '<ConvolutionBackward0 object at 0x00000164D0331060>',
        'in'
      ],
      [
        '<ConvolutionBackward0 object at 0x00000164CF2F7EB0>',
        'out',
        '<AddBackward0 object at 0x00000164CF2F7CD0>',
        'in'
      ],
      [
        '<ConvolutionBackward0 object at 0x00000164D0331D20>',
        'out',
        '<ConvolutionBackward0 object at 0x00000164CF2F7EB0>',
        'in'
      ],
      [
        '<ConvolutionBackward0 object at 0x00000164CF2F79A0>',
        'out',
        '<AddBackward0 object at 0x00000164CF2F7D00>',
        'in'
      ]
    ]
  }
}

export function getFeatureMapUrl() {
  return '/seehorse.jpg'
}
