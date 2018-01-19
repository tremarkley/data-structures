describe('prefixTree', function() {
    var prefixTree;

    beforeEach(function() {
        prefixTree = new PrefixTree('');
    });

    it('should have methods returning insert, addChild', function() {
        expect(prefixTree.insert).to.be.a('function');
    })

    it('should allow you to insert an initial set of values', function() {
        prefixTree.insert(2);
        expect(prefixTree.children[0].value).to.equal('a');
        expect(prefixTree.children[1].value).to.equal('b');
        expect(prefixTree.children[2].value).to.equal('c');
    })
});