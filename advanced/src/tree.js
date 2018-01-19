var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = {};
  newTree.parent = null;
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};
//time complexity O(1);
treeMethods.addChild = function(value) {
  newTree = Tree(value);
  // this.children.push(newTree);
  this.children[value] = newTree;
  newTree.parent = this; 
};
//time complexity O(n);
treeMethods.contains = function(target) {
  let returnValue = false;
  
  var innerFunction = function(node) {
    if (node.value === target) {
      returnValue = true;
    } 
    for (let child in node.children) {
      innerFunction(node.children[child]);
    }
  };
  innerFunction(this);
  return returnValue;
};

treeMethods.removeFromParent = function() {
  delete this.parent.children[this.value];
  this.parent = null;
};

treeMethods.traverse = function(cb) {
  cb(this.value);
  for (let child in this.children) {
    this.children[child].traverse(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
