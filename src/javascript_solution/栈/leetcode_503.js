/**
 * 给定一个循环数组 nums （ nums[nums.length - 1] 的下一个元素是 nums[0] ），
 * 返回 nums 中每个元素的 下一个更大元素 。
 * 数字 x 的 下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，
 * 这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1 。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length
    const stack = []
    const nums2 = [...nums, ...nums]
    const res = new Array(nums.length).fill(-1)
    for(let i=0;i<nums2.length;i++){
        while(stack.length && nums2[stack[stack.length-1]]< nums2[i%n]){
            const idx = stack.pop()
            res[idx%n] = nums2[i%n]
        }
        stack.push(i%n)
    }
    return res
};

console.log(nextGreaterElements([1,2,1]))