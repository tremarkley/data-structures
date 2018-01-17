var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.count = 0;
  obj.currentIndex = 0;
  return obj;
};

var stackMethods = {
  push: function() {},
  pop: function() {},
  size: function() {
    return this.count;
  }
};


