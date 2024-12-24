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
// 利用二叉搜索树的性质，左子树的值都小于根节点，右子树的值都大于根节点
var lowestCommonAncestor = function (root, p, q) {
  // 如果当前节点的值大于 p 和 q 的值，说明 p 和 q 都在左子树
  if (root.val > p.val && root.val > q.val) {
      return lowestCommonAncestor(root.left, p, q);
  }
  // 如果当前节点的值小于 p 和 q 的值，说明 p 和 q 都在右子树
  if (root.val < p.val && root.val < q.val) {
      return lowestCommonAncestor(root.right, p, q);
  }
  // 当前节点就是最近公共祖先
  return root;
}
 // DFS
var lowestCommonAncestor = function(root, p, q) {
    // 如果root为空，直接返回null
    if(!root) return null
    // 如果root等于p或者q，直接返回root
    if(root === p || root === q) return root
    // 递归左右子树
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)
    // 如果左右子树都不为空，说明p和q分别在root的左右子树中，返回root
    if(left && right) return root
    // 如果左右子树有一个为空，说明p和q在同一侧，返回不为空的那个
    if(!left) return right
    if(!right) return left
    // 如果左右子树都为空，返回null
    return null
};

// 迭代解法
var lowestCommonAncestor = function (root, p, q) {
  const stack = [root]
  // key: child, value: parent
  const parent = new Map()
  // root节点的parent是null
  parent.set(root, null)
  // 从根节点开始遍历，直到找到p和q，记录他们的parent
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
  // 记录p的所有祖先节点
  const ancestors = new Set()
  while (p) {
    ancestors.add(p)
    p = parent.get(p)
  }
  // 找到q的祖先节点中第一个在p的祖先节点中的节点
  while (!ancestors.has(q)) {
    q = parent.get(q)
  }
  // 返回这个节点
  return q
}
