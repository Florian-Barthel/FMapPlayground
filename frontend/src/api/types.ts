export interface ApiNode {
  id: string
  children?: string[]
  name?: string
}
export type ApiEdge = [string, string, string, string]

export interface ApiGraph {
  nodes: ApiNode[]
  edges: ApiEdge[]
}
