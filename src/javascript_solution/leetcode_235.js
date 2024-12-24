/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 // DFS
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null
    if(root === p || root === q) return root
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    if(left && right) return root
    if(!left) return right
    if(!right) return left
    return null
};

// 迭代解法
var lowestCommonAncestor = function (root, p, q) {
  const stack = [root]
  const parent = new Map()
  parent.set(root, null)
  while (!parent.has(p) || !parent.has(q)) {
    const node = stack.pop()
    if (node.left) {
      parent.set(node.left, node)
      stack.push(node.left)
    }
    if (node.right) {
      parent.set(node.right, node)
      stack.push(node.right)
    }
  }
  const ancestors = new Set()
  while (p) {
    ancestors.add(p)
    p = parent.get(p)
  }
  while (!ancestors.has(q)) {
    q = parent.get(q)
  }
  return q
}
