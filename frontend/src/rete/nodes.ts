import { ClassicPreset as Classic } from 'rete'

const socket = new Classic.Socket('socket')
export class BaseNode extends Classic.Node {
  parent?: string
}

export type Node = InputOutputNode | ContainerNode

export class InputOutputNode extends BaseNode {
  width = 180
  height = 180

  constructor(name: string, inputSockets: string[], outputSockets: string[], parent?: string) {
    super(`Module ${name}`)
    this.parent = parent

    inputSockets.forEach((s) => this.addInput(s, new Classic.Input(socket, s)))
    outputSockets.forEach((s) => this.addOutput(s, new Classic.Output(socket, s)))
  }

  getInputKeys() {
    return Object.entries(this.inputs).map(([key, skt]) => ({
      key: `${this.id}-${key}`,
      label: `${skt?.label}@${this.label}`
    }))
  }
  getOutputKeys() {
    return Object.entries(this.outputs).map(([key, skt]) => ({
      key: `${this.id}-${key}`,
      label: `${skt?.label}@${this.label}`
    }))
  }
}

export class ContainerNode extends BaseNode {
  width = 300
  height = 300
  onCollapse: (collapse: boolean, me: ContainerNode) => Promise<void>
  relativeChildPositions?: { [key: string]: { x: number; y: number } }[]
  constructor(name: string, onCollapse: (collapse: boolean, me: ContainerNode) => Promise<void>) {
    super(`Container: ${name}`)
    this.onCollapse = onCollapse
  }
  public collapse(collapse: boolean) {
    this.onCollapse(collapse, this)
  }

  createSockets(graph) {
    this.getOutputKeys(graph).forEach(({ key, label }) => {
      this.addOutput(key, new Classic.Output(socket, label))
    })
    this.getInputKeys(graph).forEach(({ key, label }) => {
      this.addInput(key, new Classic.Input(socket, label))
    })
  }

  getOutputKeys(graph): { key: string; label: string }[] {
    // todo: only get a list of outputs that are actually leaving this node
    // there can also be connections inside this node
    const childNodes = graph.children((n) => n.id === this.id).nodes()
    return childNodes.flatMap((c) => c.getOutputKeys())
  }
  getInputKeys(graph): { key: string; label: string }[] {
    // todo: only get a list of inputs that are actually entering this node
    // there can also be connections inside this node
    const childNodes = graph.children((n) => n.id === this.id).nodes()
    return childNodes.flatMap((c) => c.getInputKeys())
  }
}
