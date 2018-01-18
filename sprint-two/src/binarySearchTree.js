var BinarySearchTree = function(value) {
  this.left = undefined;
  this.right = undefined;
  this.value = value;
};

//O(n)
BinarySearchTree.prototype.insert = function(value) {
  let newTree = new BinarySearchTree(value);
  if (this.value < newTree.value) {
    if (this.right !== undefined) { 
      this.right.insert(newTree.value);
    } else {
      this.right = newTree;
    }
  } else {
    if (this.left !== undefined) { 
      this.left.insert(newTree.value);

    } else {
      this.left = newTree;
    }
  }
};

//O(n)
BinarySearchTree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.value < target && this.right !== undefined) {
    return this.right.contains(target);
  } else if (this.value > target && this.left !== undefined) {
    return this.left.contains(target);
  }
  return false;
};

//O(n)
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(cb);
  } 
  if (this.right !== undefined) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
