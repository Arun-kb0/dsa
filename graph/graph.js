class Graph {
  constructor() {
    this.hashMap = new Map()
  }

  addToHashMap(vertex, edge) {
    if (!this.hashMap.has(vertex)) {
      this.hashMap.set(vertex, [edge])
    } else {
      const data = this.hashMap.get(vertex)
      if (!data.includes(edge)) {
        data.push(edge)
      }
    }
  }

  insert(vertex, edge, isBiDirectional = false) {
    this.addToHashMap(vertex, edge)
    if (isBiDirectional) {
      this.addToHashMap(edge, vertex)
    }
  }

  // * bfs
  bfs(start) {
    const visited = new Set()
    const queue = []
    const result = []

    const bfsHelper = (start) => {
      queue.push(start)
      visited.add(start)
      while (queue.length) {
        const vertex = queue.shift()
        result.push(vertex)
        const edges = this.hashMap.get(vertex) || []
        for (let edge of edges) {
          if (!visited.has(edge)) {
            visited.add(edge)
            queue.push(edge)
          }
        }
      }
    }

    for (let vertex of this.hashMap.keys()) {
      if (!visited.has(vertex)) {
        bfsHelper(vertex)
      }
    }

    return result
  }



  // * dfs
  dfs(start) {
    const visited = new Set()
    const result = []

    const dfsHelper = (vertex) => {
      if (!vertex || visited.has(vertex)) return
      visited.add(vertex)
      result.push(vertex)
      const edges = this.hashMap.get(vertex) || []
      for (let edge of edges) {
        if (!visited.has(edge)) {
          dfsHelper(edge)
        }
      }
    }

    for (let vertex of this.hashMap.keys()) {
      if (!visited.has(vertex)) {
        dfsHelper(vertex)
      }
    }

    return result
  }


  display() {
    for (let [key, val] of this.hashMap.entries()) {
      console.log(`${key} :  ${val} `)
    }
  }

}


const graph = new Graph()
graph.insert(5, 7)
graph.insert(5, 20, true)
graph.insert(7, 6)
graph.insert(7, 8)
graph.insert(6, 20)
graph.insert(8, 20, true)
graph.insert(7, 10)
graph.insert(10, 12)
graph.insert(22, 24)


graph.display()
// console.log('bfs ')
// console.log(graph.bfs(5))
console.log('dfs ')
console.log(graph.dfs(5))