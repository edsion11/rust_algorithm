/**
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const inorderFunc = (node, res) => {
        if (!node) return;
        inorderFunc(node.left, res);
        res.push(node.val);
        inorderFunc(node.right, res);
    }
    const res = [];
    inorderFunc(root, res);
};

// 迭代法
var inorderTraversal = function (root) {
    const res = [];
    const stack = [];
    let current = root;
    while(current){
        stack.push(current);
        current = current.left;
    }
    while(stack.length){
        const node = stack.pop();
        res.push(node.val);
        let right = node.right;
        while(right){
            stack.push(right);
            right = right.left;
        }
    }
    return res;
}