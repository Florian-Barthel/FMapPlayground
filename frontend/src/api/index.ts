import { fetchGraph as mockFetchGraph, getFeatureMapUrl as mockGetFeatureMapUrl } from './mock'
import { fetchGraph as realFetchGraph, getFeatureMapUrl as realGetFeatureMapUrl } from './real'
import { type ApiGraph } from './types'
export { type ApiNode } from './types'

const useMock = false

export function fetchGraph(): Promise<ApiGraph> {
  return useMock ? mockFetchGraph() : realFetchGraph()
}

export function getFeatureMapUrl(nodeId: string): string {
  return useMock ? mockGetFeatureMapUrl() : realGetFeatureMapUrl(nodeId)
}
