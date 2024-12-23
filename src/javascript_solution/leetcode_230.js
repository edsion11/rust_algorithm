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
 * @param {number} k
 * @return {number}
 */
// 二叉搜索树的中序遍历是一个递增的序列，所以只需要中序遍历二叉树，然后取第k个元素即可
var kthSmallest = function(root, k) {
    const res = []
    const inorder = (node) => {
        if(!node) return ;
        inorder(node.left);
        res.push(node.val);
        inorder(node.right);
    }
    inorder(root);
    return res[k-1];
};
// 时间复杂度：O(n)，n为二叉树的节点数
// 空间复杂度：O(n)，n为二叉树的节点数

// DFS
var kthSmallest = function(root, k) {
    const stack = [];
    while(true) {
        while(root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if(--k === 0) return root.val;
        root = root.right;
    }
};