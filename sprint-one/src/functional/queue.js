var Queue = function() {
  var someInstance = {};
  var storage = {};
  var count = 0;
  var currentIndex = 0;
  var lastIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[lastIndex] = value;
    lastIndex++;
  };

  someInstance.dequeue = function() {
    if (count > 0) { 
      count--;
      let returnValue = storage[currentIndex];
      delete storage[currentIndex];
      currentIndex++;
      return returnValue;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
