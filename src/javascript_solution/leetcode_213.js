/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
 * 同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len1 = nums.length
  if (len1 === 1) {
    return nums[0]
  }
  const helper = (nums2) => {
    const dp = new Array(nums2.length).fill(0)
    const len = nums2.length
    if (len === 1) {
      return nums2[0]
    }
    if (len === 2) {
      return Math.max(nums2[0], nums2[1])
    }
    dp[0] = nums2[0]
    dp[1] = Math.max(nums2[0], nums2[1])
    for (let i = 2; i < len; i++) {
      dp[i] = Math.max(dp[i-2] + nums2[i], dp[i-1])
    }
    return dp[len-1]
  }
  return Math.max(helper(nums.slice(0, nums.length-1)), helper(nums.slice(1)))
};

console.log(rob([2,3,2])) // 3
console.log(rob([1,2,3,1])) // 4
console.log(rob([0])) // 0
console.log(rob([1,2,3])) // 3
console.log(rob([1,2,1,1])) // 3
console.log(rob([1,3,1,3,100])) // 103
