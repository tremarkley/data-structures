var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  //time complexity: O(1)
  list.addToTail = function(value) {
    let newNode = Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  };
  
  //time complexity: O(1)
  list.removeHead = function() {
    let previousHead = this.head;
    this.head = this.head.next;
    return previousHead.value;
  };

  //time complexity: O(n)
  list.contains = function(target) {
    let currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
