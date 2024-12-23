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
 * @return {TreeNode}
 */
 // 递归
var invertTree = function(root) {
    if (!root) {
        return null;
    }
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};
// DFS
var invertTree = function (root) {
    if (!root) {
        return null;
    }
    const stack = [];
    stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        const left = node.left;
        node.left = node.right;
        node.right = left;
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
    }
    return root;
}
