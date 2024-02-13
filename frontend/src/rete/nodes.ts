import { ClassicPreset as Classic } from 'rete'
import { getChildren } from './more-structures'

const socket = new Classic.Socket('socket')
export class BaseNode extends Classic.Node {
  parent?: string
}

export type Node = InputOutputNode | ContainerNode

export class InputOutputNode extends BaseNode {
  width = 180
  height = 180
  // parent?: string
  node_id: string
  node_info?: any

  constructor(name: string, node_id: string, node_info: any, inputSockets: string[], outputSockets: string[], parent?: string) {
    super(`Module ${name}`)
    this.parent = parent
    this.node_id = node_id
    this.node_info = node_info

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
  // parent?: string
  onCollapse: (collapse: boolean, me: ContainerNode) => Promise<void>
  relativeChildPositions?: { [key: string]: { x: number; y: number } }[]
  // childNodes: Node[] = []
  node_id: string
  node_info?: any
  constructor(name: string, node_id: string, node_info: any, onCollapse: (collapse: boolean, me: ContainerNode) => Promise<void>) {
    super(`Container: ${name}`)
    this.onCollapse = onCollapse
    this.node_id = node_id
    this.node_info = node_info
  }
  public collapse(collapse: boolean) {
    this.onCollapse(collapse, this)
  }

  createSockets(nodes: Node[]) {
    const children = getChildren(nodes, this.id)
    this.getOutputKeys(children).forEach(({ key, label }) => {
      this.addOutput(key, new Classic.Output(socket, label))
    })
    this.getInputKeys(children).forEach(({ key, label }) => {
      this.addInput(key, new Classic.Input(socket, label))
    })
  }

  getOutputKeys(nodes: Node[]): { key: string; label: string }[] {
    // todo: only get a list of outputs that are actually leaving this node
    // there can also be connections inside this node
    const childNodes = getChildren(nodes, this.id)
    return childNodes.flatMap((c) => c.getOutputKeys(childNodes))
  }
  getInputKeys(nodes: Node[]): { key: string; label: string }[] {
    // todo: only get a list of inputs that are actually entering this node
    // there can also be connections inside this node
    const childNodes = getChildren(nodes, this.id)
    return childNodes.flatMap((c) => c.getInputKeys(childNodes))
  }
}
