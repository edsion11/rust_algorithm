/**
 * 给定一个二叉树 root ，返回其最大深度。
 * 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
 */


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
var maxDepth = function(root) {
    const res = [];
    // 注意边界条件
    if(!root) return 0;
    const dfs = (node, depth) => {
        if(!node) return;
        if(!node.left && !node.right){
            res.push(depth);
        }
        dfs(node.left,depth+1);
        dfs(node.right,depth+1);
    }
    dfs(root,1);
    return Math.max(...res);
};


// 不借助额外空间， 自底向上，递归
var maxDepth = function(root) {
    if(!root) return 0;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left,right)+1;
};