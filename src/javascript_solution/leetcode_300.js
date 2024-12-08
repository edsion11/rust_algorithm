/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length == 0) {
        return 0;
    }
    // dp[i]表示以nums[i]结尾的最长上升子序列的长度
    var dp = [1];
    var max = 1;
    for (let i = 0; i < nums.length; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        max = Math.max(max, dp[i])
    }
    return max
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])) // 4
console.log(lengthOfLIS([1,7,8,3,4])) // 3
console.log(lengthOfLIS([1,7,8,3,4,5])) // 4
// [1,7,8,3,4]
