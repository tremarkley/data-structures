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
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.count > 0) {
      this.count--;
      let returnVal = this.storage[this.count];
      delete this.storage[this.count];
      return returnVal;
    }
  },
  size: function() {
    return this.count;
  }
};


