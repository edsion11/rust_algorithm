/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const result = []
    const dfs = (root, arr)=>{
        arr.push(root.val)
        if(!root.left&&!root.right){
            result.push(arr.join('->'))
            return
        }
        if(root.left) {
            dfs(root.left, [...arr])
        }
        if(root.right){
            dfs(root.right, [...arr])
        }
        return
    }
    dfs(root, [])
    return result
};
