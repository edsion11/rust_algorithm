/**
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡二叉搜索树。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // 思路：递归
    const buildTree = (nums, left, right) => {
        if (left > right) {
            return null
        }
        const mid = Math.floor((left + right) / 2)
        const root = new TreeNode(nums[mid])
        root.left = buildTree(nums, left, mid - 1)
        root.right = buildTree(nums, mid + 1, right)
        return root
    }
    const root = buildTree(nums, 0, nums.length - 1)
    return root
};

console.log(sortedArrayToBST([-10,-3,0,5,9])); // [0,-3,9,-10,null,5]