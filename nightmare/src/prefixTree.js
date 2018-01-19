var PrefixTree = function(value) {
    this.value = value;
    this.children = [];
};

var numberToLetters = {
    '2' : ['a', 'b', 'c'],
    '3' : ['d', 'e', 'f'],
    '4' : ['g', 'h', 'i'],
    '5' : ['j', 'k', 'l'],
    '6' : ['m', 'n', 'o'],
    '7' : ['p', 'q', 'r', 's'],
    '8' : ['t', 'u', 'v'],
    '9' : ['w', 'x', 'y', 'z']
}

PrefixTree.prototype.insert = function(value) {
    for (let i = 0; i < numberToLetters[value].length; i++) {
        this.addChild(numberToLetters[value][i]);
    }
}

PrefixTree.prototype.addChild = function(value) {
    this.children.push(new PrefixTree(value));
}

Prefix.protoype.contains = function(target) {
    if (this.value === target) {
        return true;
    }
    else {
        if (this.children !== undefined) {
            for (let i = 0; i < this.children.length; i++)
            {
                this.children[i].contains(target);
            }
        }
        else {
            return false;
        }
    }
}

//user presses a number and all letters in that array are inserted in the tree
//starting at the bottom
//when inserted, prefix the letter with it's parent string
//check if any of the newly inserted strings are words and return the first match