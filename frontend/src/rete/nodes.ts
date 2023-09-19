import { ClassicPreset as Classic } from 'rete'
import {node} from "rete-area-3d-plugin/_types/extensions/forms";

const socket = new Classic.Socket('socket')

export type Node = InputOutputNode | ContainerNode

export class InputOutputNode extends Classic.Node {
  width = 180
  height = 180
  parent?: string
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

export class ContainerNode extends Classic.Node {
  width = 300
  height = 300
  parent?: string
  onCollapse: (collapse: boolean, real: Node[], me: Node) => Promise<void>
  childNodes: Node[] = []
  node_id: string
  node_info?: any

  constructor(
    name: string,
    node_id: string,
    node_info: any,
    onCollapse: (collapse: boolean, real: Node[], me: Node) => Promise<void>
  ) {
    super(`Container: ${name}`)
    this.onCollapse = onCollapse
    this.node_id = node_id
    this.node_info = node_info
  }
  public collapse(collapse: boolean) {
    this.onCollapse(collapse, this.childNodes, this)
  }

  setChildren(childNodes: Node[]) {
    this.childNodes = childNodes
  }

  createSockets() {
    this.getOutputKeys().forEach(({ key, label }) => {
      this.addOutput(key, new Classic.Output(socket, label))
    })
    this.getInputKeys().forEach(({ key, label }) => {
      this.addInput(key, new Classic.Input(socket, label))
    })
  }

  getOutputKeys(): { key: string; label: string }[] {
    // todo: only get a list of outputs that are actually leaving this node
    // there can also be connections inside this node
    return this.childNodes.flatMap((c) => c.getOutputKeys())
  }
  getInputKeys(): { key: string; label: string }[] {
    // todo: only get a list of inputs that are actually entering this node
    // there can also be connections inside this node
    return this.childNodes.flatMap((c) => c.getInputKeys())
  }
}
