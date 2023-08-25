import { ApiGraph } from './types'

export async function fetchGraph(): Promise<ApiGraph> {
  return {
    nodes: [
      { id: 'container', children: ['first', 'second'] },
      { id: 'first' },
      { id: 'second' },
      { id: 'third' }
    ],
    edges: [
      ['first', 'second'],
      ['third', 'second']
    ]
  }
}

export function getFeatureMapUrl() {
  return '/seehorse.jpg'
}
