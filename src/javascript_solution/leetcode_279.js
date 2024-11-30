/**
 * 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
 * 完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
 */


/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const dp = new Array(n + 1).fill(0);
    // 计算每个dp[i]的值
    for (let i = 1; i <= n; i++) {
        let min = Number.MAX_VALUE;
        // 遍历所有的平方数
        for (let j = 1; j * j <= i; j++) {
            // 状态转移方程 => dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
            min = Math.min(min, dp[i - j * j]);
        }
        // 取所有当前数字减去平方数的最小值 + 1
        dp[i] = min + 1;
    }
    return dp[n];
};
console.log(numSquares(12)); // 3
console.log(numSquares(13)); // 2