import { ClassicPreset as Classic, GetSchemes, NodeEditor } from 'rete'
import { Area2D, AreaExtensions, AreaPlugin } from 'rete-area-plugin'
import { ConnectionPlugin, Presets as ConnectionPresets } from 'rete-connection-plugin'
import { VuePlugin, VueArea2D, Presets as VuePresets } from 'rete-vue-plugin'
import { AutoArrangePlugin, Presets as ArrangePresets } from 'rete-auto-arrange-plugin'
import { MinimapExtra, MinimapPlugin } from 'rete-minimap-plugin'
import { ScopesPlugin, Presets as ScopesPresets } from 'rete-scopes-plugin'

import { fetchGraph } from '../api'
import ImageOnNode from '../components/ImageOnNode.vue'
// import CustomNode from '../components/CustomNode.vue'
import CollapseControlComp from '../components/CollapseControl.vue'

type Node = InputOutputNode | ContainerNode
type Conn =
  | Connection<InputOutputNode, ContainerNode>
  | Connection<ContainerNode, ContainerNode>
  | Connection<ContainerNode, InputOutputNode>
type Schemes = GetSchemes<Node, Conn>

class Connection<A extends Node, B extends Node> extends Classic.Connection<A, B> {}

class InputOutputNode extends Classic.Node {
  width = 180
  height = 320
  parent?: string

  constructor(initial: any, parent?: string) {
    super(`Module ${initial}`)
    this.parent = parent

    this.addInput('input', new Classic.Input(socket, 'Input'))
    this.addControl('image', new CustomImgControl(initial))
    this.addOutput('output', new Classic.Output(socket, 'Output'))
  }
}

class ContainerNode extends Classic.Node {
  width = 300
  height = 300
  parent?: string
  constructor(name: string) {
    super(`Container: ${name}`)
    this.addControl('collapse', new CollapseControl())
  }
}

class CustomImgControl extends Classic.Control {
  constructor(public nodeId: string) {
    super()
  }
}
class CollapseControl extends Classic.Control {}

type AreaExtra = Area2D<Schemes> | VueArea2D<Schemes> | MinimapExtra

const socket = new Classic.Socket('socket')

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
            // return CustomNode
          }
          return VuePresets.classic.Node
        },
        control(data) {
          if (data.payload instanceof CustomImgControl) {
            return ImageOnNode
          }
          if (data.payload instanceof CollapseControl) {
            return CollapseControlComp
          }
        }
      }
    })
  )
  connection.addPreset(ConnectionPresets.classic.setup())
  vueRender.addPreset(VuePresets.classic.setup())
  vueRender.addPreset(VuePresets.minimap.setup())
  scopes.addPreset(ScopesPresets.classic.setup())

  const graphData = await fetchGraph()

  const editorNodes = graphData.nodes.map((n) =>
    n.children ? new ContainerNode(n.id) : new InputOutputNode(n.id)
  )
  // TODO: reference nodes directly instead of index. That should produce cleaner code
  const apiNodeIdx = graphData.nodes.reduce(
    (prev, curr, i) => ({
      ...prev,
      [curr.id]: i
    }),
    {}
  )
  const editorNodeIdx = editorNodes.reduce(
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
    graphData.edges.map((e) =>
      editor.addConnection(
        new Connection(
          editorNodes[apiNodeIdx[e[0]]],
          'output',
          editorNodes[apiNodeIdx[e[1]]],
          'input'
        )
      )
    )
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
