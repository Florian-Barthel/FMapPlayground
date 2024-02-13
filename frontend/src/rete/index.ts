import { ClassicPreset as Classic, type GetSchemes, NodeEditor } from 'rete'
import { type Area2D, AreaExtensions, AreaPlugin } from 'rete-area-plugin'
import { ConnectionPlugin, Presets as ConnectionPresets } from 'rete-connection-plugin'
import { VuePlugin, type VueArea2D, Presets as VuePresets } from 'rete-vue-plugin'
import { AutoArrangePlugin, Presets as ArrangePresets } from 'rete-auto-arrange-plugin'
import { type MinimapExtra, MinimapPlugin } from 'rete-minimap-plugin'
import { ScopesPlugin, Presets as ScopesPresets } from 'rete-scopes-plugin'
import { structures } from 'rete-structures'
import {addCustomBackground} from "./custom-background";

import { fetchGraph, getFeatureMapUrl } from '../api'
import { safeAddNodes, removeNodeWithChildren } from './child-utils'
import { type Node, InputOutputNode, ContainerNode } from './nodes'
import CustomContainerNode from '../components/ContainerNode.vue'
import CustomModuleNode from '../components/ModuleNode.vue'

import type { SelectorEntity } from 'rete-area-plugin/_types/extensions/selectable'
import { prepareData } from './prepare-data'
import { getOutgoingConnections, getIncomingConnections } from './more-structures'

class MySelector<E extends SelectorEntity> extends AreaExtensions.Selector<E> {
    private editor: NodeEditor<Schemes>
    setCurrentNode: (id: Node) => void

  constructor(editor: NodeEditor<Schemes>, setCurrentNode: (id: Node) => void) {
    super();
    this.editor = editor
    this.setCurrentNode = setCurrentNode
  }
  add(entity: E, accumulate: boolean): void {
    super.add(entity, accumulate)
    console.log('added', this.editor.getNode(entity.id))
    console.log(getFeatureMapUrl(this.editor.getNode(entity.id).node_id))
    this.setCurrentNode(this.editor.getNode(entity.id))
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

class Connection<A extends Node, B extends Node> extends Classic.Connection<A, B> {
}

type AreaExtra = Area2D<Schemes> | VueArea2D<Schemes> | MinimapExtra

function unique<T>(array: T[]): T[] {
  return [...new Set(array)]
}

// async function safeAddNodes(nodes: Node[], editor: NodeEditor<Schemes>) {
//   // ordering matters! Parent nodes must exist when children nodes are added
//   // parent nodes that are independent can be added at the same time, that should improve latency
//   let addNodes = [...nodes]
//   while (addNodes.length > 0) {
//     await Promise.all(addNodes.map(n => editor.addNode(n)))
//     addNodes = addNodes.flatMap(n => ('childNodes' in n ? n.childNodes : null) || [])
//   }
// }

// async function removeNodeWithChildren(node: Node, editor: NodeEditor<Schemes>) {
//   let removedConns: {source?:string, target?:string, sourceOutput:string, targetInput:string}[] = []
//   if ('childNodes' in node) {
//     for (const child of node.childNodes) {
//       const x = await removeNodeWithChildren(child, editor)
//       removedConns = [...removedConns, ...x]
//     }
//   }
//   // remove connections
//   const conns = editor.getConnections().filter(c => c.source === node.id || c.target === node.id);
//   const tmp = conns.map(c => {
//     const isSource = c.source === node.id
//     return {
//       source: isSource ? undefined : c.source,
//       sourceOutput: isSource ? `${c.source}-${c.sourceOutput}` : c.sourceOutput,
//       target: !isSource ? undefined : c.target,
//       targetInput: !isSource ? `${c.target}-${c.targetInput}` : c.targetInput,
//     }
//   })
//   removedConns = [...removedConns, ...tmp]
//   for (const c of conns) {
//     await editor.removeConnection(c.id)
//   }
//   node.parent = undefined
//   await editor.removeNode(node.id)
//   return removedConns
// }

export async function createEditor(container: HTMLElement, setCurrentNode: (id: Node) => void) {
  const editor = new NodeEditor<Schemes>()
  const area = new AreaPlugin<Schemes, AreaExtra>(container)
  const connection = new ConnectionPlugin<Schemes, AreaExtra>()
  const vueRender = new VuePlugin<Schemes, AreaExtra>()
  const minimap = new MinimapPlugin<Schemes>()
  const scopes = new ScopesPlugin<Schemes>()


  addCustomBackground(area)
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
                        return CustomContainerNode
                    }
                    // else if (context.payload.label.startsWith('Module')) {
                    //     return CustomModuleNode
                    // }
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

    AreaExtensions.selectableNodes(area, selector, {accumulating})

    return {
        destroy: () => area.destroy()
    }
}

async function populateEditor(editor: NodeEditor<Schemes>) {
  const graph = structures(editor)

  const graphData = prepareData(await fetchGraph())

  const onCollapseNode = async (collapse: boolean, theNode: ContainerNode) => {
    const childNodes = graph.children((n) => n.id === theNode.id)
    if (collapse) {
      const oldOutgoingConnections = getOutgoingConnections(
        graph,
        childNodes.nodes().map((n) => n.id)
      )
      for (const conn of oldOutgoingConnections) {
        await editor.addConnection(
          new Connection(
            theNode,
            `${conn.source}-${conn.sourceOutput}`,
            editor.getNode(conn.target),
            conn.targetInput
          )
        )
      }
      const oldIncomingConnections = getIncomingConnections(
        graph,
        childNodes.nodes().map((n) => n.id)
      )
      for (const conn of oldIncomingConnections) {
        await editor.addConnection(
          new Connection(
            editor.getNode(conn.source),
            conn.sourceOutput,
            theNode,
            `${conn.target}-${conn.targetInput}`
          )
        )
      }

      for (const child of childNodes.nodes()) {
        await removeNodeWithChildren(child, editor, graph)
      }
    } else {
      // add nodes back
      // TODO: use previously cached relative positions
      // await safeAddNodes(childNodes, editor, graph)
      // delete connections
      // add old ones back
    }
  }

  
    const editorNodes = graphData.nodes.map((n) =>
        n.hasChildren
            ? new ContainerNode(n.name || n.id, n.id, n.info, onCollapseNode)
            : new InputOutputNode(
                n.name || n.id,
                n.id,
                n.info,
                n.inputSockets,
                n.outputSockets
            )
    )
  

  // const editorNodes = graphData.nodes.map((n) =>
  //   n.hasChildren
  //     ? new ContainerNode(n.name, onCollapseNode)
  //     : new InputOutputNode(n.name, n.inputSockets, n.outputSockets)
  // )
  // assign parents
  graphData.nodes.forEach((n, i) => {
    if (n.parent !== null) editorNodes[i].parent = editorNodes[n.parent].id
  })

  editorNodes.forEach((node) => {
    if (node instanceof ContainerNode) {
      node.createSockets(editorNodes)
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
    graphData.connections.map((conn) => {
      const srcNode = editorNodes[conn.sourceNode]
      const tgtNode = editorNodes[conn.targetNode]
      return editor.addConnection(
        new Connection(srcNode, conn.sourceSocket, tgtNode, conn.targetSocket)
      )
    })
  )
}
