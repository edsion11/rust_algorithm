/**
 * 给你一个整数数组 prices 和一个整数 k ，其中 prices[i] 是某支给定的股票在第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成 k 笔交易。也就是说，你最多可以买 k 次，卖 k 次。
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */


/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    const n = prices.length;
    if (n === 0) {
        return 0;
    }
    const dp = new Array(n).fill(0).map(() => new Array(k + 1).fill(0).map(() => new Array(2).fill(0)));
    for (let s = 0; s < k + 1; s++) {
        dp[0][s][0] = 0;
        dp[0][s][1] = -prices[0];
    }
    for (let i = 1; i < n; i++) {
        dp[i][0][0] = dp[i - 1][0][0];
        for (let j = 1; j < k + 1; j++) {
            dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
            dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
        }
    }
    console.log(dp)
    return Math.max(...dp[n - 1].flat())
};
// console.log(maxProfit(2, [2, 4, 1])) // 2
// console.log(maxProfit(2, [3, 2, 6, 5, 0, 3])) // 7
console.log(maxProfit(4, [1, 2, 4, 2, 5, 7, 2, 4, 9, 0])) // 15
