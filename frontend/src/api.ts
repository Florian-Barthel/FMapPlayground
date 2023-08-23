const endpoint = 'http://localhost:1234'

export async function fetchGraph() {
//   const response = await fetch(`${endpoint}/graph`)
//   const responseData = await response.json()

  return {
    nodes: [
      {
        id: 'first'
      },
      { id: 'second' },
      { id: 'third' }
    ],
    edges: [
      { from: 0, to: 1 },
      { from: 2, to: 1 }
    ]
  }
}
