var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
   storage: {},
   count: 0,
   currentIndex: {},
   lastIndex: {}
  };
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function() {
    this.count++;
  },
  dequeue: function() {},
  size: function() {
    return this.count;
  }
};


