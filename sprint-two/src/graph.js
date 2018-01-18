

// Instantiate a new graph
var Graph = function() {
  //this.edges = {};
  this.nodes = {};
  //this.value;
};

var GraphNode = function(value) {
  this.value = value;
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //this.nodes[node] = this.edges; // 1: {3 : null, 2 : null}
  let newNode = new GraphNode(node);
  //this.value = node;
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // let foundNode = false;
  // let visitedNodes = {};
  // var innerFunction = function(currentNode) {
  //   let val = currentNode.value;
  //   if (visitedNodes[val] === undefined) {
  //     visitedNodes[val] = '1';
  //     if (val === node) {
  //       foundNode = true;
  //     } else {
  //       for (var key in currentNode.edges) {
  //         innerFunction(key);
  //       }
  //     }
  //   }
  // };
  // innerFunction(this);
  // return foundNode;
  return this.nodes[node] !== undefined; 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


