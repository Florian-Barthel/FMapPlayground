import { ClassicPreset as Classic } from 'rete'


const socket = new Classic.Socket('socket')

export type Node = InputOutputNode | ContainerNode

export class InputOutputNode extends Classic.Node {
  width = 180
  height = 180
  parent?: string

  constructor(name: string, inputSockets: string[], outputSockets: string[], parent?: string) {
    super(`Module ${name}`)
    this.parent = parent

    inputSockets.forEach((s) => this.addInput(s, new Classic.Input(socket, s)))
    outputSockets.forEach((s) => this.addOutput(s, new Classic.Output(socket, s)))
  }
}

export class ContainerNode extends Classic.Node {
  width = 300
  height = 300
  parent?: string
  onCollapse: (collapse: boolean, real: Node[], me: Node) => Promise<void>
  childNodes: Node[] = []
  constructor(name: string, onCollapse: (collapse: boolean, real: Node[], me: Node) => Promise<void>) {
    super(`Container: ${name}`)
    this.onCollapse = onCollapse
  }
  public collapse(collapse: boolean) {
    this.onCollapse(collapse, this.childNodes, this)
  }

  setChildren(childNodes: Node[]) {
    childNodes.forEach(child => {
      Object.entries(child.outputs)
        .forEach(([key, skt]) => {
          if (this.label === 'Container: multiple_out_1') {
          console.log(`${child.id}-${key}`)
          }
          this.addOutput(`${child.id}-${key}`, new Classic.Output(socket, `${skt?.label}@${child.label}`))
        })
        Object.entries(child.inputs)
          .forEach(([key, skt]) => this.addInput(`${child.id}-${key}`, new Classic.Input(socket, `${skt?.label}@${child.label}`)))
    })
    this.childNodes = childNodes
  }
}
