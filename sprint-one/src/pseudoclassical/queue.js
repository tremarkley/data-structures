var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.currentIndex = 0;
  this.lastIndex = 0;
};

Queue.prototype = {
  enqueue: function() {
    this.count++;
  },
  dequeue: function() {
    if (this.count > 0) {
      this.count--;
    }
  },
  size: function() {
    return this.count;
  }
}

