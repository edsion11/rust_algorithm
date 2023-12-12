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
// Solution-1 递归遍历二叉树，记录每个叶子节点的深度，最后取最小值
var minDepth = function(root) {
    const res = []
    if(root===null) return 0
    const searchDepth = (root, depth, res)=>{
        if(root === null) return 
        if(root.left === null&&root.right===null) {
            res.push(depth+1)
        }
        searchDepth(root.left, 1+depth, res)
        searchDepth(root.right,1+depth, res)
    }
    searchDepth(root, 0, res)
    return Math.min(...res)
};

// Solution-2
var minDepth = function(root) {
    if(root===null) return 0
    if(root.left===null&&root.right===null) return 1
    let min = Number.MAX_SAFE_INTEGER
    if(root.left!==null) {
        min = Math.min(minDepth(root.left), min)
    }
    if(root.right!==null) {
        min = Math.min(minDepth(root.right), min)
    }
    return min+1
};