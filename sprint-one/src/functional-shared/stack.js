var Stack = function() {
  var obj= {
    storage: {},
    count: 0,
    currentIndex: 0
  };
  _.extend(obj, stackMethods);
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


