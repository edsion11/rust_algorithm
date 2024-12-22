var Trie = function() {
    this.tree = {isEnd: false};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.tree;
    for(let key of word){
        if(!node[key]){
            node[key] = {isEnd: false};
        }
        node = node[key];
    }
    node.isEnd = true;
};



var WordDictionary = function () {
    this.tree = new Trie();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    this.tree.insert(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    const dfs = (node, index) => {
        console.log(node, index, word)
        if (index === word.length) {
            return node.isEnd;
        }
        if (word[index] === ".") {
            for (let key in node) {
                if(key ==='isEnd'){
                    continue;
                }
                if (node[key]&&dfs(node[key], index + 1)) {
                    return true;
                }
            }
        } else {
            if (node[word[index]]) {
                return dfs(node[word[index]], index + 1);
            }
        }
        return false;
    };
    return dfs(this.tree.tree, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
var obj = new WordDictionary();
// obj.addWord("bad");
// obj.addWord("dad");
// obj.addWord("mad");
// var param_1 = obj.search("pad"); // false
// var param_2 = obj.search("bad"); // true
// var param_3 = obj.search(".ad"); // true
// var param_4 = obj.search("b.."); // true
// console.log(param_1, param_2, param_3, param_4);
obj.addWord("a");
obj.addWord("ab");
var param_2 = obj.search("a"); 
console.log(param_2);
