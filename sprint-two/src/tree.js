var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};
//time complexity O(1);
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};
//time complexity O(n);
treeMethods.contains = function(target) {
  let returnValue = false;
  
  var innerFunction = function(node) {
    if (node.value === target) {
      returnValue = true;
    } 
    for (let i = 0; i < node.children.length; i++) {
      innerFunction(node.children[i]);
    }
  };
  innerFunction(this);
  return returnValue;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
