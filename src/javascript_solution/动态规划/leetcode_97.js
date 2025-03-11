/**
* 给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。
* 两个字符串 s 和 t 交错 的定义与过程如下，其中每个字符串都会被分割成若干 非空子字符串：
* s = s1 + s2 + ... + sn
* t = t1 + t2 + ... + tm
* |n - m| <= 1
* 交错 是 s1 + t1 + s2 + t2 + s3 + t3 + ... 或者 t1 + s1 + t2 + s2 + t3 + s3 + ...
* 注意：a + b 意味着字符串 a 和 b 连接。
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  // Solution-1 动态规划
  // 状态转移方程： dp[i][j] = (dp[i-1][j]&&s1[i-1]===s3[i+j-1])||(dp[i][j-1]&&s2[j-1]===s3[i+j-1])
  // dp[i][j]表示s1的前i个字符和s2的前j个字符是否可以交错组成s3的前i+j个字符
  // 时间复杂度O(m*n) 空间复杂度O(m*n)
  const m = s1.length
  const n = s2.length
  if(m+n!==s3.length) return false
  const dp = new Array(m+1).fill(0).map(item=>new Array(n+1).fill(false))
  dp[0][0] = true
  for (let i = 0; i < m; i++) {
    dp[i+1][0] = dp[i][0]&&s1[i]===s3[i]
  }
  for (let i = 0; i < n; i++) {
    dp[0][i+1] = dp[0][i]&&s2[i]===s3[i]
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = (dp[i-1][j]&&s1[i-1]===s3[i+j-1])||(dp[i][j-1]&&s2[j-1]===s3[i+j-1])
    }
  }
  return dp[m][n]
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"))
