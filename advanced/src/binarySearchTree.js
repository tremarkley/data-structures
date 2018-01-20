var BinarySearchTree = function(value, level) {
  this.left = undefined;
  this.right = undefined;
  this.value = value;
  this.level = level;
};

//O(2n)
BinarySearchTree.prototype.insert = function(value) {
  //give depth value to this
//debugger
  if (this.value < value) {
    if (this.right !== undefined) { 
      this.right.insert(value);
    } else {
      this.right = new BinarySearchTree(value, this.level + 1);
    }
  } else {
    if (this.left !== undefined) { 
      this.left.insert(value);
    } else {
      this.left = new BinarySearchTree(value, this.level + 1);
    }
  }
  // breadthFirstLog();
  //check depth of this
};

BinarySearchTree.prototype.getCount = function() {
  let count = 0;

  var incrementCount = function() {
    count++;
  };

  this.breadthFirstLog(incrementCount);
  
  return count;
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
    //depth++
  } 
  if (this.right !== undefined) {
    this.right.depthFirstLog(cb);
  }
  // compare to deepest
  // depth--
};


//O(n)
BinarySearchTree.prototype.breadthFirstLog = function(cb) {
  cb(this.value);
  var queue = new Queue();

  var innerFunction = function(node) {
    if (node.left !== undefined) {
      queue.enqueue(node.left);
      cb(node.left.value);
      //this.left.depthFirstLog(cb);
    } 
    if (node.right !== undefined) {
      queue.enqueue(node.right);
      cb(node.right.value);
      //this.right.depthFirstLog(cb);
    }
    if (queue.size() > 0) {
      innerFunction(queue.dequeue());
    }
  };

  innerFunction(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
