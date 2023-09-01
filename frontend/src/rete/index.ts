import { ClassicPreset as Classic, GetSchemes, NodeEditor } from 'rete'
import { Area2D, AreaExtensions, AreaPlugin } from 'rete-area-plugin'
import { ConnectionPlugin, Presets as ConnectionPresets } from 'rete-connection-plugin'
import { VuePlugin, VueArea2D, Presets as VuePresets } from 'rete-vue-plugin'
import { AutoArrangePlugin, Presets as ArrangePresets } from 'rete-auto-arrange-plugin'
import { MinimapExtra, MinimapPlugin } from 'rete-minimap-plugin'
import { ScopesPlugin, Presets as ScopesPresets } from 'rete-scopes-plugin'

import { fetchGraph } from '../api'
import CustomNode from '../components/CustomNode.vue'

type Node = InputOutputNode | ContainerNode
type Conn =
  | Connection<InputOutputNode, ContainerNode>
  | Connection<ContainerNode, ContainerNode>
  | Connection<ContainerNode, InputOutputNode>
type Schemes = GetSchemes<Node, Conn>

class Connection<A extends Node, B extends Node> extends Classic.Connection<A, B> {}

class InputOutputNode extends Classic.Node {
  width = 180
  height = 180
  parent?: string

  constructor(name: string, inputSockets: string[], outputSockets: string[], parent?: string) {
    super(`Module ${name.substring(0, 16)}`)
    this.parent = parent

    inputSockets.forEach((s) => this.addInput(s, new Classic.Input(socket, s)))
    outputSockets.forEach((s) => this.addOutput(s, new Classic.Output(socket, s)))
  }
}

class ContainerNode extends Classic.Node {
  width = 300
  height = 300
  parent?: string
  constructor(name: string, inputSockets: string[], outputSockets: string[]) {
    super(`Container: ${name.substring(0, 16)}`)

    inputSockets.forEach((s) => this.addInput(s, new Classic.Input(socket, s.substring(0, 16))))
    outputSockets.forEach((s) => this.addOutput(s, new Classic.Output(socket, s.substring(0, 16))))

    this.addInput('test-input', new Classic.Input(socket, 'Test Input'))
    this.addOutput('test-Output', new Classic.Output(socket, 'Test Output'))
  }
}

type AreaExtra = Area2D<Schemes> | VueArea2D<Schemes> | MinimapExtra

const socket = new Classic.Socket('socket')

function unique<T>(array: T[]): T[] {
  return [...new Set(array)]
}

export async function createEditor(container: HTMLElement) {
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

  const graphData = await fetchGraph()

  const inputSocketLookup: {[key:string]:any[]} = {}
  const outputSocketLookup: {[key:string]:any[]} = {}
  graphData.edges.forEach(([fromNode, fromSocket, toNode, toSocket]) => {
    outputSocketLookup[fromNode] = [fromSocket, ...(outputSocketLookup[fromNode] || [])]
    inputSocketLookup[toNode] = [toSocket, ...(inputSocketLookup[toNode] || [])]
  })

  const editorNodes = graphData.nodes.map((n) =>
    n.children
      ? new ContainerNode(n.name || n.id, unique(inputSocketLookup[n.id]) || [], unique(outputSocketLookup[n.id]) || [])
      : new InputOutputNode(n.name || n.id, unique(inputSocketLookup[n.id]) || [], unique(outputSocketLookup[n.id]) || [])
  )
  // TODO: reference nodes directly instead of index. That should produce cleaner code
  const apiNodeIdx: {[key:string]: number} = graphData.nodes.reduce(
    (prev, curr, i) => ({
      ...prev,
      [curr.id]: i
    }),
    {}
  )
  const editorNodeIdx: {[key: string]: number} = editorNodes.reduce(
    (prev, curr, i) => ({
      ...prev,
      [curr.id]: i
    }),
    {}
  )
  // assign parents
  graphData.nodes.map((n, i) => {
    n.children?.forEach((c) => {
      editorNodes[apiNodeIdx[c]].parent = editorNodes[i].id
    })
  })

  // ordering matters! Parent nodes must exist when children nodes are added
  // parent nodes that are independent can be added at the same time, that should improve latency
  let addNodes = editorNodes.filter((n) => !n.parent)
  while (addNodes.length > 0) {
    await Promise.all(addNodes.map((n) => editor.addNode(n)))
    addNodes = addNodes.flatMap(
      (n) =>
        graphData.nodes[editorNodeIdx[n.id]].children?.map((c) => editorNodes[apiNodeIdx[c]]) || []
    )
  }

  // add connections
  await Promise.all(
    graphData.edges.map(([fromNode, fromSocket, toNode, toSocket]) => {
      const srcNode = editorNodes[apiNodeIdx[fromNode]]
      const tgtNode = editorNodes[apiNodeIdx[toNode]]
      return editor.addConnection(new Connection(srcNode, fromSocket, tgtNode, toSocket))
    })
  )

  const arrange = new AutoArrangePlugin<Schemes>()
  arrange.addPreset(ArrangePresets.classic.setup())
  area.use(arrange)
  await arrange.layout()

  const selector = AreaExtensions.selector()
  const accumulating = AreaExtensions.accumulateOnCtrl()

  AreaExtensions.selectableNodes(area, selector, { accumulating })

  return {
    destroy: () => area.destroy()
  }
}
