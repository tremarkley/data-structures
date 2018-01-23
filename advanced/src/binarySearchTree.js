var BinarySearchTree = function(value, level) {
  this.parent = undefined;
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
  var maxDepth = 0;
  let insertedLevel = 0;
  var innerFunction = function(node) {
    if (node.value < value) {
      node.rightDepth += 1;
      if (node.right !== undefined) { 
        innerFunction(node.right);
      } else {
        node.right = new BinarySearchTree(value, node.level + 1);
        insertedLevel = node.level + 1;
        maxDepth = node.level + 1;
        node.right.parent = node;
      }
    } else {
      node.leftDepth += 1;
      if (node.left !== undefined) { 
        innerFunction(node.left);
      } else {
        node.left = new BinarySearchTree(value, node.level + 1);
        insertedLevel = node.level + 1;
        maxDepth = node.level + 1;
        node.left.parent = node;
      }
      //node.level
    }
    let difference = node.leftDepth - node.rightDepth;
    if (insertedLevel === node.level + 2) {
      if (difference > 1) {
        if (node.left.leftDepth - node.left.rightDepth > 0) {
          //left-left
          node.rebalance('left-left');
        } else {
          //left-right
          node.rebalance('left-right');
        }
      } else if (difference < -1) {
        if (node.right.rightDepth - node.right.leftDepth > 0) {
          //right-right
          node.rebalance('right-right');
        } else {
          //right-left
          node.rebalance('right-left');
        }
      }
    }
  };

  innerFunction(this);
  if (this.parent !== undefined) {
    return this.parent;  
  } else {
    return this;
  }

};

BinarySearchTree.prototype.rebalance = function(direction) {
  debugger
  if (direction === 'left-left') {
    //left-left case
    let pivot = this.left;
    this.left = pivot.right; 
    pivot.right = this;
    //changing parents
    pivot.parent = this.parent;
    if (pivot.parent != undefined) {
      if (pivot.value > pivot.parent.value) {
        pivot.parent.right = pivot;
      }
      else {
        pivot.parent.left = pivot;
      }
    }
    //reassigning depth values
    pivot.level -= 1;
    pivot.left.level -= 1;
    this.level += 1;
    pivot.rightDepth += 1;
    this.leftDepth -= 2; 
  } else if (direction === 'right-right') { 
    //right-right case
    let pivot = this.right;
    this.right = pivot.left;
    pivot.left = this;
    //changing parents
    pivot.parent = this.parent;
    if (pivot.parent != undefined) {
      if (pivot.value > pivot.parent.value) {
        pivot.parent.right = pivot;
      }
      else {
        pivot.parent.left = pivot;
      }
    }
    //reassigning depth values
    pivot.level -= 1;
    pivot.right.level -= 1;
    this.level += 1;
    pivot.leftDepth += 1;
    this.rightDepth -= 2; 
  } else if (direction === 'left-right') { 
    //left-right case
    let _root = this.left;
    let pivot = _root.right; 
    _root.right = pivot.left;
    pivot.left = _root;
    this.left = pivot;
    //re-assign parents
    pivot.level -= 1;
    _root.level += 1;
    pivot.parent = this;
    _root.parent = pivot;
    //now currently in left-left
    pivot = this.left;
    this.left = pivot.right;
    pivot.right = this;
    //re-assign parents
    pivot.parent = this.parent;
    if (this.parent != undefined) {
      if (pivot.value > this.parent.value) {
        this.parent.right = pivot;
      }
      else {
        this.parent.left = pivot;
      }
    }
    this.parent = pivot;
    //reassigning depth
    this.level += 1;
    pivot.level -= 1;
    this.leftDepth -= 2;
    pivot.leftDepth += 1;
    pivot.rightDepth += 1;
    _root.rightDepth -= 1;
    
  } else if (direction === 'right-left') {
    //right-left case
    let _root = this.right;
    let pivot = _root.left;
    _root.left = pivot.right;
    pivot.right = _root;
    this.right = pivot;
    //re-assign parents
    pivot.level -= 1;
    _root.level += 1;
    pivot.parent = this;
    _root.parent = pivot;
    //now currently in right-right
    pivot = this.right;
    this.right = pivot.left;
    pivot.left = this;
    //re-assign parents
    pivot.parent = this.parent;
    if (this.parent != undefined) {
      if (pivot.value > this.parent.value) {
        this.parent.right = pivot;
      }
      else {
        this.parent.left = pivot;
      }
    }
    this.parent = pivot;
    //pivot.parent.right = pivot;
    //reassigning depth
    this.level += 1;
    pivot.level -= 1;
    this.rightDepth -= 2;
    pivot.rightDepth += 1;
    pivot.leftDepth += 1;
    _root.leftDepth -= 1;
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
