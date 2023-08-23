const endpoint = 'http://localhost:5000/api'

export async function fetchGraph() {
  const response = await fetch(`${endpoint}/graph`)
  const responseData = await response.json()
  return responseData

//   return {
//     nodes: ['first', 'second', 'third'],
//     edges: [
//       ['first', 'second'],
//       ['third', 'second']
//     ]
//   }
}
