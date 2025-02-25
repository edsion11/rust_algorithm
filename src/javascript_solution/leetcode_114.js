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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const queue = [root];
  let prev = null;
  if (!root) return root;
  while (queue.length > 0) {
    const curr = queue.pop();
    if (!prev) {
      prev = curr;
    } else {
      prev.right = curr;
      prev.left = null; // 将左子树置空,负责会出现循环引用
    }
    prev = curr;
    if (curr.right) {
      queue.push(curr.right);
    }
    if (curr.left) {
      queue.push(curr.left);
    }
  }
  return root;
};
