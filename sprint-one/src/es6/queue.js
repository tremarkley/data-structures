class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
    this.currentIndex = 0;
    this.lastIndex = 0;
  }

  dequeue() {
    if (this.count > 0) {
      this.count--;
      let returnVal = this.storage[this.currentIndex];
      delete this.storage[this.currentIndex];
      this.currentIndex++;
      return returnVal;
    }
  }

  enqueue(value) {
    this.count++;
    this.storage[this.lastIndex] = value;
    this.lastIndex++;
  }

  size() {
    return this.count;
  }
}
