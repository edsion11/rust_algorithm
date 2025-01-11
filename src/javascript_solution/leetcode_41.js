/**
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 */

// 问题分析
// 要找最小缺失正整数
// 数组长度为n
// 最小缺失正整数一定在[1, n+1]范围内
// 关键发现
// 数组长度为n时，如果1到n都存在，答案就是n+1
// 否则答案一定在1到n中
// 可以用数组本身作为标记数组
// / 1. 最直观的解法（但需要额外空间）
// let set = new Set(nums);
// for(let i = 1; i <= nums.length + 1; i++) {
//     if(!set.has(i)) return i;
// }

// // 2. 想到用原数组标记（节省空间）
// nums[num-1] = -nums[num-1]; // 标记num出现过

// // 3. 考虑负数和零的处理
// if(nums[i] <= 0) nums[i] = n + 1; // 转换为不影响结果的值

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length;
  // 1. 将负数和零转换为n+1（不影响结果）
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0) {
      nums[i] = n + 1;
    }
  }
  // 2. 用数组索引标记出现的数字
  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i]);
    if (num <= n) {
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }
  // 3. 找到第一个正数的位置
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  // 4. 如果都是负数，返回n+1
  return n + 1;
};

// test case
console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
