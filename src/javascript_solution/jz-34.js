function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
const head = new TreeNode(10);
head.left = new TreeNode(5);
head.left.left = new TreeNode(4);
head.left.right = new TreeNode(7);
head.right = new TreeNode(12);

const findPath = (root, expectNumber) => {
  const dfs = (root, sum, path, res) => {
    path.push(root.val);
    if (sum===root.val&&!root.left && !root.right) {
      res.push([...path]);
    }
    if (root.left) dfs(root.left, sum - root.val, path, res);
    if (root.right) dfs(root.right, sum - root.val, path, res);
    path.pop();
  };
  let res = [];
  if (!root) return res;
  dfs(root, expectNumber, [], res);
  return res;
};

console.log(findPath(head, 22))