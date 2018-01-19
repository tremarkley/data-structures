var DoublyLinkedList = function() {
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
      newNode.prev = this.tail;
    }
    this.tail = newNode;
  };

  list.addToHead = function(value) {
    let newNode = Node(value);
    if (this.tail === null) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
    }
    this.head = newNode;
  };
  
  //time complexity: O(1)
  list.removeHead = function() {
    let previousHead = this.head;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = previousHead.next;
      newHead.prev = null;
      this.head = newHead;
    }
    return previousHead.value;
  };

  list.removeTail = function() {
    let previousTail = this.tail;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    } else {
      let newTail = previousTail.prev;
      newTail.next = null;
      this.tail = newTail;
    }
    return previousTail.value;
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
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
