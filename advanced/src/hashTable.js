

var HashTable = function() {
  this._limit = 8;
  this._minimumSize = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
  this._maxPercentFull = 75;
  this._maxPercentEmpty = 25;
};

//Worst case: O(n)
var objectIndex = function(storage, k, index) {
  let bucketArray = storage.get(index); 
  if (bucketArray !== undefined) { 
    for (let i = 0; i < bucketArray.length; i++) { 
      let key = bucketArray[i][0];
      if (key === k) {
        return i;
      }
    }
  }
};

HashTable.prototype.checkSize = function() {
  let fullness = Math.floor(this._count / this._limit * 100);
  if (fullness > this._maxPercentFull) {
    this.resize(true);
  } else if (fullness < this._maxPercentEmpty && (this._limit / 2) > this._minimumSize) {
    this.resize(false);
  }
};
//Worst case: O(n)
HashTable.prototype.insert = function(k, v) {
  debugger;
  var index = getIndexBelowMaxForKey(k, this._limit);
  let obj = [k, v]; 
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  if (this.retrieve(k) !== undefined) {
    this._storage.get(index)[objectIndex(this._storage, k, index)][1] = v;
  } else {
    this._count++;
  }
  this._storage.get(index).push(obj);
  this.checkSize();
};
//Worst case: O(n)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let objectArr = this._storage.get(index)[objectIndex(this._storage, k, index)];
  if (objectArr !== undefined) {
    return objectArr[1];
  }
};
//Worst case: O(n)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.get(index).splice(objectIndex(this._storage, k, index), 1);
  this._count--;
  this.checkSize();
};

HashTable.prototype.resize = function(isBigger) {
  let oldHash = this;
  let tempStorage = [];
  // oldHash._storage.storage = this._storage.storage.slice();
  // let newHash = new HashTable();
  this.hashEach(function(tuple) {
    tempStorage.push([tuple]);
  });
  if (isBigger) {
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
  } else {
    this._limit = Math.floor(this._limit / 2);
    this._storage = LimitedArray(this._limit);
  }
  // oldHash.hashEach(function(tuple) {
  //   this.insert(tuple[0], tuple[1]);
  // });

  // oldStorage.each(function(bucket) {
  //   if (bucket !== undefined) {
  //     for (let i = 0; i < bucket.length; i++ ) {
  //       this.insert(bucket[i][0], bucket[i][1]);     
  //     }
  //   }
  // });
};

HashTable.prototype.hashEach = function(cb) {
  this._storage.each(function(bucket) {
    if (bucket !== undefined) {
      for (let i = 0; i < bucket.length; i++ ) {
        cb(bucket[i]);     
      }
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


