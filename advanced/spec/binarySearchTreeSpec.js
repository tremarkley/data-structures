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
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.constructor).to.equal(binarySearchTree.constructor);
    expect(binarySearchTree.right.left.constructor).to.equal(binarySearchTree.constructor);
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 2, 7, 3]);
  });

  it('tree should remember which level it is currently on', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(4);
    binarySearchTree.insert(1);
    binarySearchTree.insert(9);
    expect(binarySearchTree.right.level).to.equal(2);
    expect(binarySearchTree.left.level).to.equal(2);
    expect(binarySearchTree.right.right.level).to.equal(3);
    expect(binarySearchTree.left.right.level).to.equal(3);
    expect(binarySearchTree.left.left.level).to.equal(3);
    expect(binarySearchTree.left.right.right.level).to.equal(4);
    expect(binarySearchTree.right.right.right.level).to.equal(4);
  });
  
  it('should return a count of the tree when getCount() is called', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(8);
    binarySearchTree.insert(4);
    binarySearchTree.insert(1);
    binarySearchTree.insert(9);
    expect(binarySearchTree.getCount()).to.eql(8);
  });

  
});
