/**
 *
 * 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// 思路：递归生成所有可能的二叉搜索树， 从1到n中选取一个节点作为根节点，递归生成左右子树，将左右子树和根节点组合，将根节点添加到结果集中，缓存结果，避免重复计算
// 1. 递归终止条件: start > end 时，返回 null
// 2. 从start到end中选取一个节点作为根节点， 递归生成左右子树
// 3. 生成根节点
// 4. 将根节点添加到结果集中
// 5. 缓存结果
// 6. 返回结果集
var generateTrees = function (n) {
    if (n === 0) return []
    const map = new Map()
    // generate函数用于生成所有可能的二叉搜索树,start和end分别表示从start到end中选取一个节点作为根节点
    const generate = (start, end) => {
        // 生成所有可能的二叉搜索树
        // 1. 递归终止条件: start > end 时，返回 null
        if (start > end) return [null]
        const key = `${start}-${end}`
        if (map.has(key)) return map.get(key)
        const res = []
        // 2. 从start到end中选取一个节点作为根节点， 递归生成左右子树
        for (let i = start; i <= end; i++) {
            // 生成左子树
            const left = generate(start, i - 1)
            // 生成右子树
            const right = generate(i + 1, end)
            // 将左右子树和根节点组合
            for (const l of left) {
                for (const r of right) {
                    // 生成根节点
                    const root = new TreeNode(i)
                    root.left = l
                    root.right = r
                    // 将根节点添加到结果集中
                    res.push(root)
                }
            }
        }
        // 缓存结果
        map.set(key, res)
        return res
    }
    const res = generate(1, n)
    return res
};
console.log(generateTrees(3)) // [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
