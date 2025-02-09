/**
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 * 有效二叉搜索树定义如下：
 *   - 节点的左子树只包含 小于 当前节点的数。
 *   - 节点的右子树只包含 大于 当前节点的数。
 *   - 所有左子树和右子树自身必须也是二叉搜索树。
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const inorder = (root) => {
        if(!root) return []
        return [...inorder(root.left), root.val, ...inorder(root.right)]
    }
    const res = inorder(root)
    for(let i=0;i<res.length-1;i++){
        if(res[i]>=res[i+1]){
            return false
        }
    }
    return true
};

// 递归解法
var isValidBST = function(root) {
    if(!root) return true
    if(!root.left && !root.right) return true
    const isValid = (node, min, max) => {
        if(!node) return true
        if(node.val<=min || node.val>=max) return false
        return isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
    }
    return isValid(root, -Infinity, Infinity)
}