var Stack = function() {
  var someInstance = {};
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    storage[count - 1] = value;
  };

  someInstance.pop = function() {
    if (count > 0){
      let currentIndex = count -1;
      let returnVal = storage[currentIndex];
      count--;
      delete storage[currentIndex];
      return returnVal;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
