/**
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const n = prices.length;
    const dp = new Array(n).fill(0).map(() => new Array(3).fill(0).map(() => new Array(2).fill(0)));
    dp[0][0][0] = 0;
    dp[0][0][1] = -prices[0];
    dp[0][1][0] = 0;
    dp[0][1][1] = -prices[0];
    dp[0][2][0] = 0;
    dp[0][2][1] = -prices[0];
    for (let i = 1; i < n; i++) {
        dp[i][0][0] = dp[i - 1][0][0];
        for (let j = 1; j < 3; j++) {
            dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
            dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
        }
    }
    return Math.max(...dp[n-1].flat())
};
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))
console.log(maxProfit([1, 2, 3, 4, 5]))
