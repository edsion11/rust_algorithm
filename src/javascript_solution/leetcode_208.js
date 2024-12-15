
var Trie = function() {
    this.tree = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.tree;
    for(let key of word){
        if(!node[key]){
            node[key] = {};
        }
        node = node[key];
        node.isEnd = false;
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.tree;
    for(let key of word){
        if(!node[key]){
            return false;
        }
        node = node[key];
    }
    return node.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.tree;
    for(let key of prefix){
        if(!node[key]){
            return false;
        }
        node = node[key];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
var obj = new Trie()
console.log(obj.insert('apple'))
console.log(obj.search('apple'))
console.log(obj.tree)
console.log(obj.search('app'))
