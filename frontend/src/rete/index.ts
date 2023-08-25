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
  width = 0
  height = 0
  parent?: string
  constructor(name: string) {
    super(`Container: ${name}`)
  }
}

class CustomImgControl extends Classic.Control {
  constructor(public nodeId: string) {
    super()
  }
}

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
        // node(context) {
        //   console.log('payload', context.payload.label)
        //   return CustomNode
        // },
        control(data) {
          if (data.payload instanceof CustomImgControl) {
            return ImageOnNode
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
  const nodeIdx = graphData.nodes.reduce((prev, curr, i) => ({ ...prev, [curr.id]: i }), {})
  const editorNodes = graphData.nodes.map((n) =>
    n.children ? new ContainerNode(n.id) : new InputOutputNode(n.id)
  )
  // assign parents
  graphData.nodes.map((n, i) => {
    n.children?.forEach((c) => {
      editorNodes[nodeIdx[c]].parent = editorNodes[i].id
    })
  })
  // TODO: ordering matters! Parent nodes must exist when children nodes are added
  // TODO: parent nodes that are independent can be added at the same time, that should improve latency
  for (let i = 0; i < editorNodes.length; i += 1) {
    await editor.addNode(editorNodes[i])
  }

  // await Promise.all(editorNodes.map((n) => editor.addNode(n)))
  await Promise.all(
    graphData.edges.map((e) =>
      editor.addConnection(
        new Connection(editorNodes[nodeIdx[e[0]]], 'output', editorNodes[nodeIdx[e[1]]], 'input')
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
