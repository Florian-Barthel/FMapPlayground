// extensions to rete-structures
import { type BaseSchemes, type NodeId } from 'rete'

type BaseN = BaseSchemes['Node'] & {
  parent?: NodeId;
};
type BaseC = BaseSchemes['Connection'];

export function unionAll(
  parts: any[]
) {
  return parts.reduce((prev, part) => prev.union(toContext(part)))
}

export function toContext(
  structures: any
) {
  return { nodes: structures.nodes(), connections: structures.connections() }
}

export function allOutgoers<Node extends BaseN>(
  graph: any,
  subset: Node[]
) {
  return unionAll(subset.flatMap((child) => graph.outgoers(child.id)))
}

export function allIncomers<Node extends BaseN>(
  graph: any,
  subset: Node[]
) {
  return unionAll(subset.flatMap((child) => graph.incomers(child.id)))
}

// copied from https://github.com/retejs/structures/blob/da89e237454caba1d424d62c4eda3ec6493b99d0/src/utils.ts#L33
export function getConnectionsFor<N extends BaseN, C extends BaseC>(
  nodes: N[],
  allConnections: C[]
) {
  const ids = Array.from(nodes).map((n) => n.id)
  return getConnectionsForIds(ids, allConnections)
}
function getConnectionsForIds<C extends BaseC>(nodeIds: string[], allConnections: C[]) {
  return allConnections.filter((c) => nodeIds.includes(c.source) && nodeIds.includes(c.target))
}

export function getConnectedChildren() {}

export function getOutgoingConnections(
  graph: any,
  nodeIds: string[]
) {
  const allOutgoers = nodeIds
    .flatMap((id) => graph.outgoers(id).nodes())
    .filter((node) => nodeIds.every((id) => id !== node.id))

  return getConnectionsForIds([...nodeIds, ...allOutgoers.map((n) => n.id)], graph.connections())
}

export function getIncomingConnections(
  graph: any,
  nodeIds: string[]
) {
  const allIncomers = nodeIds
    .flatMap((id) => graph.incomers(id).nodes())
    .filter((node) => nodeIds.every((id) => id !== node.id))

  return getConnectionsForIds([...nodeIds, ...allIncomers.map((n) => n.id)], graph.connections())
}

export function getChildren<N extends BaseN>(allNodes: N[], parentId: string) {
  return allNodes.filter((n) => 'parent' in n && n.parent === parentId)
}
