export interface ApiNode {
  id: string
  children?: string[]
  name?: string
  info?: any
}
export type ApiEdge = [string, string, string, string]

export interface ApiGraph {
  nodes: ApiNode[]
  edges: ApiEdge[]
  network_name: string
}
