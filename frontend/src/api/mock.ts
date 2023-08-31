import { ApiGraph } from './types'
import { graph } from "./the-big-fat-graph"

export async function fetchGraph(): Promise<ApiGraph> {
  return graph
  // return {
  //   nodes: [
  //     { id: 'input' },
  //     // Sub
  //     { id: 'sub_net1', children: ['sub_net1/conv1', 'sub_net1/subsub'] },
  //     { id: 'sub_net1/conv1' },
  //     { id: 'sub_net1/subsub', children: ['sub_net1/subsub/conv1'] },
  //     { id: 'sub_net1/subsub/conv1' },
  //     { id: 'output' }
  //   ],
  //   edges: [
  //     // block 1
  //     ['input', 'z', 'sub_net1', 'a'],
  //     ['sub_net1', 'a', 'sub_net1/conv1', 'z'],
  //     ['sub_net1', 'z', 'output', 'a']
  //   ]
  // }
  // // return graph
  // return {
  //   nodes: [
  //     { id: 'input' },
  //     // Sub
  //     { id: 'sub_net1', children: ['sub_net1/conv1', 'sub_net1/subsub'] },
  //     { id: 'sub_net1/conv1' },
  //     { id: 'sub_net1/subsub', children: ['sub_net1/subsub/conv1'] },
  //     { id: 'sub_net1/subsub/conv1' },
  //     // MultipleOut
  //     { id: 'multiple_out_1', children: ['multiple_out_1/conv1', 'multiple_out_1/conv2'] },
  //     { id: 'multiple_out_1/conv1' },
  //     { id: 'multiple_out_1/conv2' },
  //     { id: 'multiple_out_2', children: ['multiple_out_2/conv1', 'multiple_out_2/conv2'] },
  //     { id: 'multiple_out_2/conv1' },
  //     { id: 'multiple_out_2/conv2' },

  //     {
  //       id: 'multiple_in',
  //       children: ['multiple_in/conv1', 'multiple_in/conv2', 'multiple_in/add']
  //     },
  //     { id: 'multiple_in/conv1' },
  //     { id: 'multiple_in/conv2' },
  //     { id: 'multiple_in/add' },

  //     { id: 'triple_in', children: ['triple_in/conv1', 'triple_in/multiple', 'triple_in/add'] },
  //     { id: 'triple_in/conv1' },
  //     {
  //       id: 'triple_in/multiple',
  //       children: ['triple_in/multiple/conv1', 'triple_in/multiple/conv2', 'triple_in/multiple/add']
  //     },
  //     { id: 'triple_in/multiple/conv1' },
  //     { id: 'triple_in/multiple/conv2' },
  //     { id: 'triple_in/multiple/add' },
  //     { id: 'triple_in/add' },

  //     { id: 'output' }
  //   ],
  //   edges: [
  //     // block 1
  //     ['input', 'sub_net1'],
  //     ['sub_net1', 'multiple_out_1'],
  //     ['multiple_out_1', 'multiple_in'],
  //     ['multiple_in', 'multiple_out_2'],
  //     ['sub_net1', 'triple_in'],
  //     ['multiple_out_2', 'triple_in'],
  //     ['triple_in', 'output'],

  //     // sub_net1
  //     ['sub_net1', 'sub_net1/conv1'],
  //     ['sub_net1/conv1', 'sub_net1/subsub'],
  //     ['sub_net1/subsub', 'sub_net1/subsub/conv1'],
  //     ['sub_net1/subsub/conv1', 'sub_net1/subsub'],
  //     ['sub_net1/subsub', 'sub_net1'],

  //     // multiple_out_1
  //     ['multiple_out_1', 'multiple_out_1/conv1'],
  //     ['multiple_out_1', 'multiple_out_1/conv2'],
  //     ['multiple_out_1/conv1', 'multiple_out_1'],
  //     ['multiple_out_1/conv2', 'multiple_out_1'],

  //     // multiple_out_2
  //     ['multiple_out_2', 'multiple_out_2/conv1'],
  //     ['multiple_out_2', 'multiple_out_2/conv2'],
  //     ['multiple_out_2/conv1', 'multiple_out_2'],
  //     ['multiple_out_2/conv2', 'multiple_out_2'],

  //     // multiple_in
  //     ['multiple_in', 'multiple_in/conv1'],
  //     ['multiple_in', 'multiple_in/conv2'],
  //     ['multiple_in/conv1', 'multiple_in/add'],
  //     ['multiple_in/conv2', 'multiple_in/add'],
  //     ['multiple_in/add', 'multiple_in'],

  //     // triple_in/multiple_in
  //     ['triple_in/multiple', 'triple_in/multiple/conv1'],
  //     ['triple_in/multiple', 'triple_in/multiple/conv2'],
  //     ['triple_in/multiple/conv1', 'triple_in/multiple/add'],
  //     ['triple_in/multiple/conv2', 'triple_in/multiple/add'],
  //     ['triple_in/multiple/add', 'triple_in/multiple'],
  //     // triple_in
  //     ['triple_in', 'triple_in/conv1'],
  //     ['triple_in', 'triple_in/multiple'],
  //     ['triple_in/conv1', 'triple_in/add'],
  //     ['triple_in/multiple', 'triple_in/add'],
  //     ['triple_in/add', 'triple_in']
  //   ]
  // }
}

export function getFeatureMapUrl() {
  return '/seehorse.jpg'
}
