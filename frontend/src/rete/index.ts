import { ClassicPreset as Classic, type GetSchemes, NodeEditor } from 'rete'
import { type Area2D, AreaExtensions, AreaPlugin } from 'rete-area-plugin'
import { ConnectionPlugin, Presets as ConnectionPresets } from 'rete-connection-plugin'
import { VuePlugin, type VueArea2D, Presets as VuePresets } from 'rete-vue-plugin'
import { AutoArrangePlugin, Presets as ArrangePresets } from 'rete-auto-arrange-plugin'
import { type MinimapExtra, MinimapPlugin } from 'rete-minimap-plugin'
import { ScopesPlugin, Presets as ScopesPresets } from 'rete-scopes-plugin'
import { structures } from 'rete-structures'

import { fetchGraph } from '../api'
import { safeAddNodes, removeNodeWithChildren } from './child-utils'
import { type Node, InputOutputNode, ContainerNode } from './nodes'
import CustomNode from '../components/CustomNode.vue'

import type { SelectorEntity } from 'rete-area-plugin/_types/extensions/selectable'
import { prepareData } from './prepare-data'

class MySelector<E extends SelectorEntity> extends AreaExtensions.Selector<E> {
  private editor: NodeEditor<Schemes>
  setCurrentNode: (id: string) => void

  constructor(editor: NodeEditor<Schemes>, setCurrentNode: (id: string) => void) {
    super()
    this.editor = editor
    this.setCurrentNode = setCurrentNode
  }
  add(entity: E, accumulate: boolean): void {
    super.add(entity, accumulate)
    console.log('added', this.editor.getNode(entity.id))
    this.setCurrentNode(this.editor.getNode(entity.id).label)
  }
  remove(entity: E): void {
    super.remove(entity)
    console.log('removed', this.editor.getNode(entity.id))
  }
}

type Conn =
  | Connection<InputOutputNode, ContainerNode>
  | Connection<ContainerNode, ContainerNode>
  | Connection<ContainerNode, InputOutputNode>
type Schemes = GetSchemes<Node, Conn>

class Connection<A extends Node, B extends Node> extends Classic.Connection<A, B> {}

type AreaExtra = Area2D<Schemes> | VueArea2D<Schemes> | MinimapExtra

function unique<T>(array: T[]): T[] {
  return [...new Set(array)]
}

export async function createEditor(container: HTMLElement, setCurrentNode: (id: string) => void) {
  const editor = new NodeEditor<Schemes>()
  const area = new AreaPlugin<Schemes, AreaExtra>(container)
  const connection = new ConnectionPlugin<Schemes, AreaExtra>()
  const vueRender = new VuePlugin<Schemes, AreaExtra>()
  const minimap = new MinimapPlugin<Schemes>()
  const scopes = new ScopesPlugin<Schemes>()

  editor.use(area)
  area.use(scopes)
  area.use(vueRender)
  area.use(connection)
  area.use(minimap)

  vueRender.addPreset(
    VuePresets.classic.setup({
      customize: {
        node(context) {
          if (context.payload.label.startsWith('Container')) {
            return CustomNode
          }
          return VuePresets.classic.Node
        }
      }
    })
  )
  connection.addPreset(ConnectionPresets.classic.setup())
  vueRender.addPreset(VuePresets.classic.setup())
  vueRender.addPreset(VuePresets.minimap.setup())
  scopes.addPreset(ScopesPresets.classic.setup())

  await populateEditor(editor)

  const arrange = new AutoArrangePlugin<Schemes>()
  arrange.addPreset(ArrangePresets.classic.setup())
  area.use(arrange)
  await arrange.layout()

  const selector = new MySelector(editor, setCurrentNode)
  const accumulating = AreaExtensions.accumulateOnCtrl()

  AreaExtensions.selectableNodes(area, selector, { accumulating })

  return {
    destroy: () => area.destroy()
  }
}

async function populateEditor(editor: NodeEditor<Schemes>) {
  const graph = structures(editor)

  const graphData2 = prepareData(await fetchGraph())

  const onCollapseNode = async (collapse: boolean, theNode: ContainerNode) => {
    return
    // TODO: needs refactoring
    const childNodes = graph.children((n) => n.id === theNode.id)
    if (collapse) {
      theNode.relativeChildPositions = childNodes.reduce(
        (pos, child) => ({
          ...pos,
          [child.id]: { x: 0, y: 0 }
        }),
        {}
      )
      // save relative positions of all child nodes here
      const targetNodes = childNodes.nodes().flatMap((child) => graph.outgoers(child.id))
      const sourceNodes = childNodes.flatMap((child) => graph.incomers(child.id))
      const foreignTargetNodes = graph.difference(targetNodes, childNodes) // TODO: usage
      const foreignSourceNodes = graph.difference(sourceNodes, childNodes) // TODO: usage
      // can we do difference on connections even?
      // find all connections that connect a child node with a foreign node
      // repeat the same for incoming nodes
      for (const child of childNodes.nodes()) {
        // assign new connections
        const oldConns = await removeNodeWithChildren(child, editor, graph)
        // assign new connections for connections that leave the parent node (one of source or target is not in chidren)
        for (const conn of oldConns) {
          console.assert(!!conn.source || !!conn.target, 'At least source or target must be st')
          const src = conn.source ? editor.getNode(conn.source) : theNode
          const tgt = conn.target ? editor.getNode(conn.target) : theNode
          if (src && tgt && src.id !== tgt.id) {
            await editor.addConnection(
              new Connection(src, conn.sourceOutput, tgt, conn.targetInput)
            )
          }
        }
      }
    } else {
      // add nodes back
      // TODO: use previously cached relative positions
      await safeAddNodes(childNodes, editor, graph)
      // delete connections
      // add old ones back
    }
  }

  const editorNodes = graphData2.nodes.map((n) =>
    n.hasChildren
      ? new ContainerNode(n.name, onCollapseNode)
      : new InputOutputNode(n.name, n.inputSockets, n.outputSockets)
  )
  // assign parents
  graphData2.nodes.forEach((n, i) => {
    if (n.parent !== null) editorNodes[i].parent = editorNodes[n.parent].id
  })

  editorNodes.forEach((node) => {
    if (node instanceof ContainerNode) {
      node.createSockets(graph)
    }
  })

  const tmpGraph = structures({ nodes: editorNodes, connections: [] })
  await safeAddNodes(
    editorNodes.filter((n) => !n.parent),
    editor,
    tmpGraph
  )

  // add connections
  await Promise.all(
    graphData2.connections.map((conn) => {
      const srcNode = editorNodes[conn.sourceNode]
      const tgtNode = editorNodes[conn.targetNode]
      return editor.addConnection(
        new Connection(srcNode, conn.sourceSocket, tgtNode, conn.targetSocket)
      )
    })
  )
}
