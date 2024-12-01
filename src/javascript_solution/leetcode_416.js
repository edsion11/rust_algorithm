/**
 *
 * 给你一个 只包含正整数 的 非空 数组 nums 。
 * 请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((prev, curr) => prev + curr, 0);
  if (sum % 2 !== 0) {
    return false;
  }
  const target = sum / 2;
  const n = nums.length;
  // dp[i][j] 表示前 i 个数中是否存在和为 j 的子集
  const dp = new Array(n + 1).fill(0).map(() => new Array(target + 1).fill(false));
  // base case dp[0][0] = true 表示前 0 个数中是否存在和为 0 的子集
  // dp[i][0] = true 表示前 i 个数中是否存在和为 0 的子集
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }
  // 
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      // 如果 j - nums[i - 1] < 0，说明当前的数比目标值大，不能选
      if (j - nums[i - 1] < 0) {
        // 不选当前的数
        dp[i][j] = dp[i - 1][j];
      } else {
        // 选或者不选当前的数
        // 选当前的数 dp[i - 1][j - nums[i - 1]] 表示前 i - 1 个数中是否存在和为 j - nums[i - 1] 的子集
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      }
    }
  }
  return dp[n][target];
};

console.log(canPartition([1, 5, 11, 5])); // true
console.log(canPartition([1, 2, 3, 5])); // false
console.log(canPartition([3, 3, 3, 4, 5])); // true
