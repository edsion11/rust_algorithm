/**
* 给定一个整数数组 prices，其中 prices[i]表示第 i 天的股票价格 ；整数 fee 代表了交易股票的手续费用。
* 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
* 返回获得利润的最大值。
* 注意：这里的一笔交易指买入持有并卖出股票的整个过程，每笔交易你只需要为支付一次手续费。
*/



/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  const n = prices.length
  const dp = new Array(n).fill(0).map(() => new Array(2).fill(0))
  dp[0][0] = 0
  dp[0][1] = -prices[0]
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] - fee)
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i])
  }
  return dp[n-1][0]
};


// DFS解法
var maxProfit = function (prices, fee) {
  const n = prices.length
  const dfs = (index, status, profit) => {
    if(index>=n) return 0
    // 当前不持有股票的情况
    let a = 0, b = 0, c = 0;
    a = dfs(index+1, status, profit)
    // 当前不持有股票的情况
    if (status === 0) {
      b = dfs(index + 1, 1, profit) - prices[index]
    } else {
      c = dfs(index + 1, 0, profit) + prices[index] - fee
    }
    return Math.max(a, b, c)
  }
  return dfs(0, 0, 0)
}


// 贪心解法
var maxProfit = function (prices, fee) {
  const n = prices.length
  let profit = 0;
  for (let i = 0; i < n; i++) {

  }
}

// test case
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)) // 8
