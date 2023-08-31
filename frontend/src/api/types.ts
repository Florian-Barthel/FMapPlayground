export interface ApiNode {
  id: string
  children?: string[]
}
export type ApiEdge = [string, string]

export interface ApiGraph {
  nodes: ApiNode[]
  edges: ApiEdge[]
}
