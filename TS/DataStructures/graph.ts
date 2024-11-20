class Graph<T> {
  length: number;
  adjacentList: Map<T, Set<T>>; // {key as string: value as array of T}
  constructor() {
    this.length = 0;
    // An object has better performance finding and deleting
    // Using Map instead of plain object to allow any type as key, but I can't put repeated keys
    this.adjacentList = new Map();
  }

  addVertex(node: T): this {
    if (!this.adjacentList.has(node)) {
      this.adjacentList.set(node, new Set());
      this.length++;
    }
    return this;
  }

  addEdge(node1: T, node2: T): this {
    if (!this.adjacentList.has(node1)) {
      this.addVertex(node1);
    }
    if (!this.adjacentList.has(node2)) {
      this.addVertex(node2);
    }

    // Add edges (for undirected graph)
    this.adjacentList.get(node1)?.add(node2);
    this.adjacentList.get(node2)?.add(node1);
    return this;
  }

  removeVertex(node: T): this | null {
    if (!this.adjacentList.has(node)) {
      return null;
    }

    // remove all times where this node has connections with others
    for (const [_edge, connections] of this.adjacentList) {
      connections.delete(node);
    }

    this.adjacentList.delete(node);
    this.length--;
    return this;
  }

  removeEdge(node1: T, node2: T): this | null {
    const connections1 = this.adjacentList.get(node1);
    const connections2 = this.adjacentList.get(node2);

    if (!connections1 || !connections2) {
      return null;
    }

    connections1.delete(node2);
    connections2.delete(node1);
    return this;
  }

  showConnections(): void {
    for (let [node, connections] of this.adjacentList) {
      console.log(`${String(node)} --> ${[...connections].join(" ")}`);
    }
  }
}

const graph = new Graph();
graph.addVertex("0");
graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addVertex("4");
graph.addVertex("5");
graph.addVertex("6");
graph.addEdge("3", "1");
graph.addEdge("3", "4");
graph.addEdge("4", "2");
graph.addEdge("4", "5");
graph.addEdge("1", "2");
graph.addEdge("1", "0");
graph.addEdge("0", "2");
graph.addEdge("6", "5");
graph.showConnections();
graph.removeEdge("0", "2");
console.log("==== AFTER REMOVAL ===");
graph.showConnections();
