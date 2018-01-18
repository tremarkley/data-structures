

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let obj = [k, v]; 
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  this._storage.get(index).push(obj);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let bucketArray = this._storage.get(index); 
  for (let i = 0; i < bucketArray.length; i++) { 
    let key = bucketArray[i][0];
    let value = bucketArray[i][1];
    if (key === k) {
      return value;
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


