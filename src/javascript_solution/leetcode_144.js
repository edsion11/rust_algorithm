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
 // 递归
var preorderTraversal = function(root) {
  const result = [];
  const preorder = (node) => {
    if(node===null) return
    result.push(node.val)
    preorder(node.left)
    preorder(node.right)
  }
  preorder(root)
  return result
};

// 迭代
var preorderTraversal = function (root) {
  const result= []
  const stack = []
  let node = root
  while(node || stack.length) {
    while(node) {
      result.push(node.val)
      stack.push(node)
      node = node.left
    }
    node = stack.pop()
    node = node.right
  }
  return result
}
