import { BaseSchemes, ConnectionBase, NodeBase, NodeEditor } from 'rete'
import { ClassicPreset as Classic } from 'rete'
import { Structures } from 'rete-structures/_types/types'
import { Node } from './nodes'

export async function safeAddNodes<C extends ConnectionBase, S extends BaseSchemes>(
  nodes: Node[],
  editor: NodeEditor<S>,
  graph: Structures<Node, C>
) {
  // ordering matters! Parent nodes must exist when children nodes are added
  // parent nodes that are independent can be added at the same time, that should improve latency
  let addNodes = [...nodes]
  while (addNodes.length > 0) {
    await Promise.all(addNodes.map((n) => editor.addNode(n)))
    addNodes = graph.children((n) => addNodes.some((an) => n.id === an.id)).nodes()
  }
}

export async function removeNodeWithChildren<
  C extends Classic.Connection<Node, Node>,
  S extends BaseSchemes
>(node: Node, editor: NodeEditor<S>, graph: Structures<Node, C>) {
  let removedConns: {
    source?: string
    target?: string
    sourceOutput: string
    targetInput: string
  }[] = []
  const childNodes = graph.children((n) => n.id === node.id)
  for (const child of childNodes.nodes()) {
    const x = await removeNodeWithChildren(child, editor, graph)
    removedConns = [...removedConns, ...x]
  }

  // remove connections
  const conns = editor.getConnections().filter((c) => c.source === node.id || c.target === node.id)
  const tmp = conns.map((c) => {
    const isSource = c.source === node.id
    return {
      source: isSource ? undefined : c.source,
      sourceOutput: isSource ? `${c.source}-${c.sourceOutput}` : c.sourceOutput,
      target: !isSource ? undefined : c.target,
      targetInput: !isSource ? `${c.target}-${c.targetInput}` : c.targetInput
    }
  })
  removedConns = [...removedConns, ...tmp]
  for (const c of conns) {
    await editor.removeConnection(c.id)
  }
  node.parent = undefined
  await editor.removeNode(node.id)
  return removedConns
}
