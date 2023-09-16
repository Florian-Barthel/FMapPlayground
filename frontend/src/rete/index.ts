import {ClassicPreset as Classic, type GetSchemes, NodeEditor} from 'rete'
import {type Area2D, AreaExtensions, AreaPlugin} from 'rete-area-plugin'
import {ConnectionPlugin, Presets as ConnectionPresets} from 'rete-connection-plugin'
import {VuePlugin, type VueArea2D, Presets as VuePresets} from 'rete-vue-plugin'
import {AutoArrangePlugin, Presets as ArrangePresets} from 'rete-auto-arrange-plugin'
import {type MinimapExtra, MinimapPlugin} from 'rete-minimap-plugin'
import {ScopesPlugin, Presets as ScopesPresets} from 'rete-scopes-plugin'

import {fetchGraph, getFeatureMapUrl} from '../api'
import {type Node, InputOutputNode, ContainerNode} from './nodes'
import CustomNode from '../components/CustomNode.vue'

import type {SelectorEntity} from 'rete-area-plugin/_types/extensions/selectable'

class MySelector<E extends SelectorEntity> extends AreaExtensions.Selector<E> {
    private editor: NodeEditor<Schemes>
    setCurrentNode: (id: string, featureMap: any) => void

    constructor(editor: NodeEditor<Schemes>, setCurrentNode: (id: string, featureMap: any) => void) {
        super()
        this.editor = editor
        this.setCurrentNode = setCurrentNode
    }

    add(entity: E, accumulate: boolean): void {
        super.add(entity, accumulate)
        console.log('added', this.editor.getNode(entity.id))
        console.log(getFeatureMapUrl(this.editor.getNode(entity.id).node_id))
        this.setCurrentNode(this.editor.getNode(entity.id).label, getFeatureMapUrl(this.editor.getNode(entity.id).node_id))
    }

    remove(entity: E): void {
        super.remove(entity)
        console.log('removed', this.editor.getNode(entity.id))
    }
}

type Node = InputOutputNode | ContainerNode
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

async function safeAddNodes(nodes: Node[], editor: NodeEditor<Schemes>) {
    // ordering matters! Parent nodes must exist when children nodes are added
    // parent nodes that are independent can be added at the same time, that should improve latency
    let addNodes = [...nodes]
    while (addNodes.length > 0) {
        await Promise.all(addNodes.map((n) => editor.addNode(n)))
        addNodes = addNodes.flatMap((n) => ('childNodes' in n ? n.childNodes : null) || [])
    }
}

async function removeNodeWithChildren(node: Node, editor: NodeEditor<Schemes>) {
    let removedConns: {
        source?: string
        target?: string
        sourceOutput: string
        targetInput: string
    }[] = []
    if ('childNodes' in node) {
        for (const child of node.childNodes) {
            const x = await removeNodeWithChildren(child, editor)
            removedConns = [...removedConns, ...x]
        }
    }
    // remove connections
    const conns = editor.getConnections().filter((c) => c.source === node.id || c.target === node.id)
    const tmp = conns.map((c) => {
        const isSource = c.source === node.id
        return {
            source: isSource ? undefined : c.source,
            sourceOutput: isSource ? `${c.source}-${c.sourceOutput}` : c.sourceOutput,
            target: !isSource ? undefined : c.target,
            targetInput: !isSource ? `${c.target}-${c.targetInput}` : c.targetInput
        }
    })
    removedConns = [...removedConns, ...tmp]
    for (const c of conns) {
        await editor.removeConnection(c.id)
    }
    node.parent = undefined
    await editor.removeNode(node.id)
    return removedConns
}

export async function createEditor(container: HTMLElement, setCurrentNode: (id: string, featureMap: any) => void) {
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

    const inputSocketLookup: { [key: string]: any[] } = {}
    const outputSocketLookup: { [key: string]: any[] } = {}
    graphData.edges.forEach(([fromNode, fromSocket, toNode, toSocket]) => {
        outputSocketLookup[fromNode] = [fromSocket, ...(outputSocketLookup[fromNode] || [])]
        inputSocketLookup[toNode] = [toSocket, ...(inputSocketLookup[toNode] || [])]
    })

    const onCollapseNode = async (collapse: boolean, childNodes: Node[], theNode: Node) => {
        if (collapse) {
            for (const child of childNodes) {
                // assign new connections
                const oldConns = await removeNodeWithChildren(child, editor)
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
            await safeAddNodes(childNodes, editor)
            // delete connections
            // add old ones back
        }
    }

    const editorNodes = graphData.nodes.map((n) =>
        n.children
            ? new ContainerNode(n.name || n.id, n.id, onCollapseNode)
            : new InputOutputNode(
                n.name || n.id,
                n.id,
                unique(inputSocketLookup[n.id]) || [],
                unique(outputSocketLookup[n.id]) || []
            )
    )
    // TODO: reference nodes directly instead of index. That should produce cleaner code
    const apiNodeIdx: { [key: string]: number } = graphData.nodes.reduce(
        (prev, curr, i) => ({
            ...prev,
            [curr.id]: i
        }),
        {}
    )
    // assign parents
    graphData.nodes.map((n, i) => {
        const en = editorNodes[i]
        n.children?.forEach((c) => {
            editorNodes[apiNodeIdx[c]].parent = en.id
        })
        if ('childNodes' in en) {
            en.setChildren(n.children?.map((c) => editorNodes[apiNodeIdx[c]]) || [])
        }
    })
    editorNodes.forEach((node) => {
        if (node instanceof ContainerNode) {
            node.createSockets()
        }
    })

    await safeAddNodes(
        editorNodes.filter((n) => !n.parent),
        editor
    )

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

    const selector = new MySelector(editor, setCurrentNode)
    const accumulating = AreaExtensions.accumulateOnCtrl()

    AreaExtensions.selectableNodes(area, selector, {accumulating})

    return {
        destroy: () => area.destroy()
    }
}
