/**
 * 如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为 摆动序列 。第一个差（如果存在的话）可能是正数或负数。仅有一个元素或者含两个不等元素的序列也视作摆动序列。
 * 例如， [1, 7, 4, 9, 2, 5] 是一个 摆动序列 ，因为差值 (6, -3, 5, -7, 3) 是正负交替出现的。
 * 相反，[1, 4, 7, 2, 5] 和 [1, 7, 4, 5, 5] 不是摆动序列，第一个序列是因为它的前两个差值都是正数，第二个序列是因为它的最后一个差值为零。
 * 子序列 可以通过从原始序列中删除一些（也可以不删除）元素来获得，剩下的元素保持其原始顺序。
 * 给你一个整数数组 nums ，返回 nums 中作为 摆动序列 的 最长子序列的长度 。
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  const dp = new Array(nums.length).fill(0).map(() => new Array(2).fill(0));
  // dp[i][0]表示以nums[i]结尾的摆动序列的最长长度，且nums[i] - nums[i-1] > 0
  // dp[i][1]表示以nums[i]结尾的摆动序列的最长长度，且nums[i] - nums[i-1] < 0
  dp[0][0] = 1;
  dp[0][1] = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 0) {
      dp[i][0] = dp[i - 1][1] + 1
      dp[i][1] = dp[i - 1][1];
    } else if (nums[i] - nums[i - 1] < 0) {
      dp[i][1] = dp[i - 1][0] + 1
      dp[i][0] = dp[i - 1][0];
    } else {
      dp[i][0] = dp[i - 1][0];
      dp[i][1] = dp[i - 1][1];
    }
  }
  return Math.max(...dp[nums.length-1])
};

// test case
console.log(wiggleMaxLength([1,7,4,9,2,5])); // [1,7,4,9,2,5] => 6 dp=[[1, 1], [2, 1], [2, 3], [2, 4], [5, 3], [4, 6]]
console.log(wiggleMaxLength([1,17,5,10,13,15,10,5,16,8])); // [1, 17, 10, 13, 10, 16, 8]=> 7
console.log(wiggleMaxLength([1,2,3,4,5,6,7,8,9])); // [1, 2] => 2
