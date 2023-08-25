const endpoint = 'http://localhost:5000/api'

export async function fetchGraph() {
  const response = await fetch(`${endpoint}/graph`)
  const responseData = await response.json()
  return responseData
}

export function getFeatureMapUrl(nodeId: string) {
    return `${endpoint}/fmap?node_id=${nodeId}`
}
