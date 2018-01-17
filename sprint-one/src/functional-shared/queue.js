var Queue = function() {
  var obj = {
   storage: {},
   count: 0,
   currentIndex: 0,
   lastIndex: 0
  };
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.count++;
    this.storage[this.lastIndex] = value;
    this.lastIndex++;
  },
  dequeue: function() {
    if (this.count > 0) {
      this.count--;
      let returnVal = this.storage[this.currentIndex];
      delete this.storage[this.currentIndex];
      this.currentIndex++;
      return returnVal;
    }
  },
  size: function() {
    return this.count;
  }
};


