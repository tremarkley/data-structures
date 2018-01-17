var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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


