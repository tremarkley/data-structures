

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
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
//Worst case: O(n)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let obj = [k, v]; 
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  if (this.retrieve(k) !== undefined) {
    this._storage.get(index)[objectIndex(this._storage, k, index)][1] = v;
  }
  this._storage.get(index).push(obj);
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
};





/*
 * Complexity: What is the time complexity of the above functions?
 */


