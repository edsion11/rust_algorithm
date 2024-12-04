/**
* 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
* 每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:
* 0 <= j <= nums[i]
* i + j < n
* 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  const n = nums.length;
  // dp[i] 表示到达 i 的最小跳跃次数
  // dp[i] = min(0..j) dp[j] + 1, j + nums[j] >= i
  const dp = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    let res = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < i; j++) {
      if (j + nums[j] >= i) {
        res = Math.min(res, dp[j] + 1);
      }
    }
    dp[i] = res;
  }
  return dp[n - 1];
};

console.log(jump([2,3,1,1,4])) // 2
console.log(jump([2,3,0,1,4])) // 2
