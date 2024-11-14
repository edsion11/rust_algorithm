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
 * @return {number}
 */
var sumNumbers = function(root) {
    const dfs = (root, sum) =>{
        if(!root) return 0;
        sum = sum * 10 + root.val;
        if(!root.left && !root.right) return sum;
        return dfs(root.left, sum) + dfs(root.right, sum);
    }
    return dfs(root, 0)
};

var sumNumbers = function(root) {
    const res = []
    const dfs = (root, sum) =>{
        if(!root) return 0;
        sum = sum+root.val;
        if(!root.left && !root.right){
            res.push(sum)
        };
        if(root.left){
            dfs(root.left, sum)
        }
        if(root.right){
            dfs(root.right, sum)
        }
    }
    dfs(root, '')
   return res.reduce((prev, cur) =>{
    return prev + cur
   }, 0)
};