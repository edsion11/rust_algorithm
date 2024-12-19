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
var postorderTraversal = function(root) {
  const result = [];
  const postorder = (node) => {
    if(node===null) return
    postorder(node.left)
    postorder(node.right)
    result.push(node.val)
  }
  postorder(root)
  return result
};

// 迭代思路： 用一个栈来模拟递归的过程，用一个变量last记录上一个访问的节点，如果当前节点的右子树为空或者已经访问过，就访问当前节点，否则继续访问右子树
var postorderTraversal = function (root) {
  const result = []
  const stack = []
  let node = root
  let last = null
  // 用last记录上一个访问的节点
  while(node || stack.length) {
    // 一直向左走
    while(node) {
      stack.push(node)
      node = node.left
    }
    // 取栈顶元素
    node = stack[stack.length-1]
    // 如果右子树为空或者已经访问过，就访问当前节点
    if(node.right===null || node.right===last) {
      result.push(node.val)
      stack.pop()
      last = node
      node = null
    } else {
      // 否则继续访问右子树
      node = node.right
    }
  }
  return result
}
