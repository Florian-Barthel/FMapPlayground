import { type ApiGraph } from './types'
import { graph } from "./the-big-fat-graph"

export async function fetchGraph(): Promise<ApiGraph> {
  return {
    network_name: "mock net",
    nodes: [
      { id: 'input' },
      // Sub
      { id: 'sub_net1', children: ['sub_net1/conv1', 'sub_net1/subsub'] },
      { id: 'sub_net1/conv1' },
      { id: 'sub_net1/subsub', children: ['sub_net1/subsub/conv1'] },
      { id: 'sub_net1/subsub/conv1' },
      // MultipleOut
      { id: 'multiple_out_1', children: ['multiple_out_1/conv1', 'multiple_out_1/conv2'] },
      { id: 'multiple_out_1/conv1' },
      { id: 'multiple_out_1/conv2' },
      { id: 'multiple_out_2', children: ['multiple_out_2/conv1', 'multiple_out_2/conv2'] },
      { id: 'multiple_out_2/conv1' },
      { id: 'multiple_out_2/conv2' },

      {
        id: 'multiple_in',
        children: ['multiple_in/conv1', 'multiple_in/conv2', 'multiple_in/add']
      },
      { id: 'multiple_in/conv1' },
      { id: 'multiple_in/conv2' },
      { id: 'multiple_in/add' },

      { id: 'triple_in', children: ['triple_in/conv1', 'triple_in/multiple', 'triple_in/add'] },
      { id: 'triple_in/conv1' },
      {
        id: 'triple_in/multiple',
        children: ['triple_in/multiple/conv1', 'triple_in/multiple/conv2', 'triple_in/multiple/add']
      },
      { id: 'triple_in/multiple/conv1' },
      { id: 'triple_in/multiple/conv2' },
      { id: 'triple_in/multiple/add' },
      { id: 'triple_in/add' },

      { id: 'output' }
    ],
    edges: [
      // sub_net1
      ['input', 'out', 'sub_net1/conv1', 'in'],
      ['sub_net1/conv1', 'out', 'sub_net1/subsub/conv1', 'in'],
      
      // multiple_out_1
      ['sub_net1/subsub/conv1', 'out', 'multiple_out_1/conv1', 'in'],
      ['sub_net1/subsub/conv1', 'out', 'multiple_out_1/conv2', 'in'],

      // multiple_out_2
      ['multiple_in/add', 'out', 'multiple_out_2/conv1', 'in'],
      ['multiple_in/add', 'out', 'multiple_out_2/conv2', 'in'],

      // multiple_in
      ['multiple_out_1/conv1', 'out1', 'multiple_in/conv1', 'in'],
      ['multiple_out_1/conv2', 'out2', 'multiple_in/conv2', 'in'],
      ['multiple_in/conv1', 'out', 'multiple_in/add', 'left'],
      ['multiple_in/conv2', 'out', 'multiple_in/add', 'right'],

      // triple_in/multiple_in
      ['multiple_out_2/conv1', 'out', 'triple_in/multiple/conv1', 'in'],
      ['multiple_out_2/conv2', 'out', 'triple_in/multiple/conv2', 'in'],
      ['triple_in/multiple/conv1', 'out', 'triple_in/multiple/add', 'left'],
      ['triple_in/multiple/conv2', 'out', 'triple_in/multiple/add', 'right'],
      // triple_in
      ['sub_net1/subsub/conv1', 'out', 'triple_in/conv1', 'in'],
      ['triple_in/conv1', 'out', 'triple_in/add', 'left'],
      ['triple_in/multiple/add', 'out', 'triple_in/add', 'right'],
      ['triple_in/add', 'out', 'output', 'in']
    ]
  }
}

export function getFeatureMapUrl() {
  return '/seehorse.jpg'
}
