var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Stack.prototype = {
  push: function() {},
  pop: function() {},
  size: function() {
    return this.count;
  }
}

