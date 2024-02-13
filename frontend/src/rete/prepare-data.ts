// prepare data from API for rete format
// this file should be minimal and most of this should be handled in the backend
import { type ApiGraph } from '../api/types'
interface OutNode {
  id: string
  name: string
  info: any
  parent: number | null
  hasChildren: boolean
  inputSockets: string[]
  outputSockets: string[]
}
function unique<T>(array: T[]): T[] {
  return [...new Set(array)]
}
function shortName(longName: string) {
  if (longName.length > 10) {
    const first = longName.substring(0, 4);
    const last = longName.substring(longName.length - 4)
    return `${first}..${last}`
  }
  return longName;
}
export function prepareData(graphData: ApiGraph) {
  const inputSocketLookup: { [key: string]: any[] } = {}
  const outputSocketLookup: { [key: string]: any[] } = {}
  graphData.edges.forEach(([fromNode, fromSocket, toNode, toSocket]) => {
    outputSocketLookup[fromNode] = [fromSocket, ...(outputSocketLookup[fromNode] || [])]
    inputSocketLookup[toNode] = [toSocket, ...(inputSocketLookup[toNode] || [])]
  })

  const name2Idx: { [key: string]: number } = {}
  graphData.nodes.forEach((n, i) => {
    name2Idx[n.id] = i
  })

  const connections = graphData.edges.map(
    ([sourceNode, sourceSocket, targetNode, targetSocket]) => ({
      sourceNode: name2Idx[sourceNode],
      sourceSocket: sourceSocket,
      targetNode: name2Idx[targetNode],
      targetSocket: targetSocket
    })
  )

  console.log(graphData.nodes.map(n => n.info))
  const nodes: OutNode[] = graphData.nodes.map((n) => ({
    id: n.id,
    name: n.name || shortName(n.id),
    info: {text:n.info},
    parent: null,
    hasChildren: !!n.children,
    inputSockets: unique(inputSocketLookup[n.id]) || [],
    outputSockets: unique(outputSocketLookup[n.id]) || []
  }))
  // assign parent
  // TODO: can we do this in the backend?
  graphData.nodes.map((n, i) => {
    n.children?.forEach((c) => {
      nodes[name2Idx[c]].parent = i
    })
  })

  return { nodes, connections }
}
