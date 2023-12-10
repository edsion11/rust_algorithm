// 定义二叉树节点
class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


// 迭代法中序遍历二叉树，将节点值存储在数组中
function inorderTraversal(root) {
  const result = [];
  const stack = [];
  let curr = root;

  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    result.push(curr.val);
    curr = curr.right;
  }

  return result;
}

// Solution-1： 空间复杂度为O(n)的解法
// 修复二叉搜索树
function recoverTree(root) {
  const inorder = inorderTraversal(root);
  const sorted = [...inorder].sort((a, b) => a - b);
  const swapped = [];

  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] !== sorted[i]) {
      swapped.push(inorder[i]);
    }
  }

  let x = null;
  let y = null;

  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === swapped[0]) {
      x = i;
    }
    if (inorder[i] === swapped[swapped.length - 1]) {
      y = i;
    }
  }

  const recover = (node, count) => {
    if (node !== null) {
      if (node.val === swapped[0] || node.val === swapped[swapped.length - 1]) {
        node.val =
          node.val === swapped[0] ? swapped[swapped.length - 1] : swapped[0];
        count--;
        if (count === 0) {
          return;
        }
      }
      recover(node.left, count);
      recover(node.right, count);
    }
  };

  recover(root, 2);

  return root;
}

// Solution-2：空间复杂度为O(1)的解法：(来自Github copilot)
// 为了解决leetcode99题（恢复二叉搜索树）并保持常数的空间复杂度，我们可以使用Morris遍历。
// Morris遍历是一种不使用额外空间的二叉树遍历方法。它的基本思想是利用树的大量空闲指针，实施线索二叉树的方法，使得空间复杂度降为常数级。
// Morris遍历算法整体步骤如下：
// 初始化两个指针，prev和first，用于记录需要交换的两个节点。
// 使用Morris遍历，遍历整个二叉树。
// 在遍历过程中，如果prev节点的值大于当前节点的值，那么这两个节点可能是需要交换的节点。
// 如果first节点为空，那么将first和second都设置为prev和当前节点。
// 如果first节点不为空，那么只需要设置second节点为当前节点。
// 遍历结束后，交换first和second节点的值。
function recoverTree(root) {
  let first = null,
    second = null,
    prev = null;

  function morrisTraversal(root) {
    let current = root;
    while (current !== null) {
      if (current.left === null) {
        process(current);
        current = current.right;
      } else {
        let pre = current.left;
        while (pre.right !== null && pre.right !== current) {
          pre = pre.right;
        }
        if (pre.right === null) {
          pre.right = current;
          current = current.left;
        } else {
          pre.right = null;
          process(current);
          current = current.right;
        }
      }
    }
  }

  function process(node) {
    if (prev !== null && prev.val > node.val) {
      if (first === null) {
        first = prev;
        second = node;
      } else {
        second = node;
      }
    }
    prev = node;
  }

  morrisTraversal(root);
  let temp = first.val;
  first.val = second.val;
  second.val = temp;
}



// 示例
const root = new TreeNode(1);
root.left = new TreeNode(3);
root.left.right = new TreeNode(2);

console.log(recoverTree(root));
