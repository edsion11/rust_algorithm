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
 // 层序遍历，每层最后一个节点
var rightSideView = function(root) {
  // 从栈实现层序遍历
  const stack = [];
  if(!root) return []
  const res = [];
  stack.push(root);
  while (stack.length) {
    const size = stack.length;
    for (let i = 0; i < size; i++) {
      const node = stack.shift();
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
      if (i === size - 1) {
        res.push(node.val);
      }
    }
  }
  return res;
};
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);
console.log(rightSideView(root))
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.left.left = new TreeNode(5);
console.log(rightSideView(root1))
