var BinarySearchTree = function(value, level) {
  this.left = undefined;
  this.right = undefined;
  this.value = value;
  this.level = level;
  this.rightDepth = 0;
  this.leftDepth = 0;
};

//O(2n)
BinarySearchTree.prototype.insert = function(value) {
  //give depth value to this
//debugger
  if (this.value < value) {
    if (this.right !== undefined) { 
      this.rightDepth++;
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

BinarySearchTree.prototype.rebalance = function() {
  if (this.left !== undefined && this.left.left !== undefined) {
    //left-left case
    let pivot = this.left;
    this.left = pivot.right; 
    pivot.right = this;
  } else if (this.right !== undefined && this.right.right !== undefined) { 
    //right-right case
    let pivot = this.right;
    this.right = pivot.left;
    pivot.left = this; 
  } else if (this.left !== undefined && this.left.right !== undefined) { 
    //left-right case
    let _root = this.left;
    let pivot = _root.right;
    _root.right = pivot.left;
    pivot.left = _root;
    //now currently in left-left
    pivot = this.left;
    this.left = pivot.right;
    pivot.right = this;
    
  } else if (this.right !== undefined && this.right.left !== undefined) {
    //right-left case
    let _root = this.right;
    let pivot = _root.left;
    _root.left = pivot.right;
    pivot.right = _root;
    //now currently in right-right
    pivot = this.right;
    this.right = pivot.left;
    pivot.left = this;
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
