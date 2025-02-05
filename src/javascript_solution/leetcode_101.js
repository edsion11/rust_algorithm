/**
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
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
var isSymmetric = function(root) {
    const check = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;
        return left.val === right.val && check(left.left, right.right) && check(left.right, right.left);
    }
    return check(root, root);
};