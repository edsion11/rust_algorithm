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
 * @return {number}
 */
var rob = function(root) {
    const dfs = (node) => {
        if (!node) {
            return [0, 0];
        }
        const left = dfs(node.left);
        const right = dfs(node.right);
        const rob = node.val + left[1] + right[1];
        const notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        return [rob, notRob];
    };
    const res = dfs(root);
    return Math.max(res[0], res[1]);
};

var rob = function(root) {
    if (!root) return 0;
    const stack = [];
    const nodeMap = new Map();
    stack.push(root);
    while (stack.length > 0) {
        const node = stack.pop();
        if (node) {
            stack.push(node);
            stack.push(null); // 标记已访问但未处理

            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        } else {
            const currentNode = stack.pop();
            const left = nodeMap.get(currentNode.left) || [0, 0];
            const right = nodeMap.get(currentNode.right) || [0, 0];
            const rob = currentNode.val + left[1] + right[1];
            const notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
            nodeMap.set(currentNode, [rob, notRob]);
        }
    }

    const result = nodeMap.get(root);
    return Math.max(result[0], result[1]);
}