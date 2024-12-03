/**
 * 给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。
 *
 * 在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。
 *
 * 返回 你能获得的 最大 利润 。
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let res = 0
    for (let price of prices) {
        if (price <= min) {
            min = price
        }
        if (price > min) {
            // 如果当天价格大于最小价格,则卖出,并计算利润
            res += price - min
            min = price
        }
    }
    return res
};

// 动态规划
var maxProfit = function (prices) {
    const n = prices.length;
    const dp = new Array(n).fill(0).map(() => new Array(2).fill(0));
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for(let i=1; i<n; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
    }
    console.log(dp)
    return dp[n-1][0]
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 7
console.log(maxProfit([3,3,5,0,0,3,1,4]))
