var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.currentIndex = 0;
  this.lastIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.count++;
  this.storage[this.lastIndex] = value;
  this.lastIndex++;
}
Queue.prototype.dequeue = function() {
  if (this.count > 0) {
    this.count--;
    let returnVal = this.storage[this.currentIndex];
    delete this.storage[this.currentIndex];;
    this.currentIndex++;
    return returnVal;
  }
}
Queue.prototype.size = function() {
    return this.count;
}

