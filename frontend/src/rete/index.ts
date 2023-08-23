import { ClassicPreset as Classic, GetSchemes, NodeEditor } from 'rete'
import { Area2D, AreaExtensions, AreaPlugin } from 'rete-area-plugin'
import { ConnectionPlugin, Presets as ConnectionPresets } from 'rete-connection-plugin'
import { VuePlugin, VueArea2D, Presets as VuePresets } from 'rete-vue-plugin'
import { AutoArrangePlugin, Presets as ArrangePresets } from 'rete-auto-arrange-plugin'
import { MinimapExtra, MinimapPlugin } from 'rete-minimap-plugin'

import { fetchGraph } from '../api'
import ImageOnNode from '../components/ImageOnNode.vue'

type Node = InputOutputNode | AddNode
type Conn =
  | Connection<InputOutputNode, AddNode>
  | Connection<AddNode, AddNode>
  | Connection<AddNode, InputOutputNode>
type Schemes = GetSchemes<Node, Conn>

class Connection<A extends Node, B extends Node> extends Classic.Connection<A, B> {}

class InputOutputNode extends Classic.Node {
  width = 180
  height = 280

  constructor(initial: any) {
    super(`Module ${initial}`)

    this.addInput('input', new Classic.Input(socket, 'Input'))
    this.addControl("image", new CustomImgControl(initial))
    this.addOutput('output', new Classic.Output(socket, 'Output'))
  }
}

class CustomImgControl extends Classic.Control {
  constructor(public nodeId: string) {
    super()
  }
}

class AddNode extends Classic.Node {
  width = 180
  height = 195

  constructor() {
    super('Add')

    this.addInput('a', new Classic.Input(socket, 'A'))
    this.addInput('b', new Classic.Input(socket, 'B'))
    this.addOutput('value', new Classic.Output(socket, 'Number'))
    this.addControl('result', new Classic.InputControl('number', { initial: 0, readonly: true }))
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

  editor.use(area)
  area.use(vueRender)
  area.use(connection)
  area.use(minimap)

  vueRender.addPreset(
    VuePresets.classic.setup({
      customize: {
        control(data) {
          if (data.payload instanceof CustomImgControl) {
            return ImageOnNode;
          }
        }
      }
    })
  )
  connection.addPreset(ConnectionPresets.classic.setup())
  vueRender.addPreset(VuePresets.classic.setup())
  vueRender.addPreset(VuePresets.minimap.setup())

  const graphData = await fetchGraph()
  const nodeIdx = graphData.nodes.reduce((prev, curr, i) => ({...prev, [curr]: i}), {})
  const editorNodes = graphData.nodes.map(n => new InputOutputNode(n))
  await Promise.all(editorNodes.map((n) => editor.addNode(n)))
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
