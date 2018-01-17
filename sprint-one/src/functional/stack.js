var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
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
      storage[currentIndex] = undefined;
      return returnVal;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
