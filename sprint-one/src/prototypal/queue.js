var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.currentIndex = 0;
  obj.count = 0;
  obj.lastIndex = 0;
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


