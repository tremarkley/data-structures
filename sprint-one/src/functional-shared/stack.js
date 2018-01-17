var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj= {
    storage: {},
    count: 0,
    currentIndex: 0
  };
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push: function() {
    this.count++;
  },
  pop: function() {},
  size: function() {
    return this.count;
  }
};


