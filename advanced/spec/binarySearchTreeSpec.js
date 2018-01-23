describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5, 1);
  });

  it('should have methods named "insert", "contains", "breadthFirstLog", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
    expect(binarySearchTree.breadthFirstLog).to.be.a('function');
  });

  it('inserted values should be a binarySearchTree', function() {
    binarySearchTree = binarySearchTree.insert(2);
    binarySearchTree = binarySearchTree.insert(3);
    binarySearchTree = binarySearchTree.insert(7);
    binarySearchTree = binarySearchTree.insert(6);
    expect(binarySearchTree.right.right.constructor).to.equal(binarySearchTree.constructor);
    expect(binarySearchTree.right.left.constructor).to.equal(binarySearchTree.constructor);
  });

  it('should insert values at the correct location in the tree', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree = binarySearchTree.insert(2);
    binarySearchTree = binarySearchTree.insert(3);
    binarySearchTree = binarySearchTree.insert(7);
    binarySearchTree = binarySearchTree.insert(6);
    binarySearchTree.breadthFirstLog(func);
    debugger
    expect(binarySearchTree.left.value).to.equal(2);
    expect(binarySearchTree.right.value).to.equal(6);
    //expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree = binarySearchTree.insert(2);
    binarySearchTree = binarySearchTree.insert(3);
    binarySearchTree = binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree = binarySearchTree.insert(2);
    binarySearchTree = binarySearchTree.insert(3);
    binarySearchTree = binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([3, 2, 5, 7]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree = binarySearchTree.insert(2);
    binarySearchTree = binarySearchTree.insert(3);
    binarySearchTree = binarySearchTree.insert(7);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([3, 2, 5, 7]);
  });
  
  it('tree should rebalance for left-right', function() {
    binarySearchTree = binarySearchTree.insert(15);
    binarySearchTree = binarySearchTree.insert(3);
    binarySearchTree = binarySearchTree.insert(20);
    binarySearchTree = binarySearchTree.insert(1);
    binarySearchTree = binarySearchTree.insert(2);
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 2, 15, 1, 3, 20]);
  });
  
  it('tree should rebalance for left-left', function() {
    binarySearchTree = binarySearchTree.insert(15);
    binarySearchTree = binarySearchTree.insert(4);
    binarySearchTree = binarySearchTree.insert(3);
    binarySearchTree = binarySearchTree.insert(2);
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 3, 15, 2, 4]);
  });

  it('tree should rebalance for right-right', function() {
    binarySearchTree = binarySearchTree.insert(15);
    binarySearchTree = binarySearchTree.insert(4);
    binarySearchTree = binarySearchTree.insert(18);
    binarySearchTree = binarySearchTree.insert(20);
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 4, 18, 15, 20]);
  });

  it('tree should rebalance for right-left', function() {
    binarySearchTree = binarySearchTree.insert(15);
    binarySearchTree = binarySearchTree.insert(3);
    binarySearchTree = binarySearchTree.insert(1);
    binarySearchTree = binarySearchTree.insert(20);
    binarySearchTree = binarySearchTree.insert(22);
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 3, 20, 1, 15, 22]);
  });
});
