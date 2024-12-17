/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
function _Node(val, neighbors) {
   this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
};
/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) {
        return null
    }
    const visited = new Map()
    const dfs = (node) => {
        if (visited.has(node.val)) {
            return visited.get(node.val)
        }
        const cloneNode = new _Node(node.val)
        visited.set(node.val, cloneNode)
        for (let i = 0; i < node.neighbors.length; i++) {
            cloneNode.neighbors.push(dfs(node.neighbors[i]))
        }
        return cloneNode
    }
    return dfs(node)
};
