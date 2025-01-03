/**
* 309. Best Time to Buy and Sell Stock with Cooldown
* 给定一个整数数组prices，其中第  prices[i] 表示第 i 天的股票价格 。
* 设计一个算法计算出最大利润。在满足以下约束条件下，你可以尽可能地完成更多的交易（多次买卖一支股票）:
* 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天)。
* 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // DFS搜索
  let n = prices.length;
  // memo[i][0]表示第i天不持有股票的最大利润，memo[i][1]表示第i天持有股票的最大利润
  let memo = new Array(n).fill(0).map(() => new Array(2).fill(-1));
  // status: 0表示不持有股票，1表示持有股票
  function dfs(prices, index, status) {
    if (index >= n) {
      return 0;
    }
    // 如果memo中已经有值，直接返回
    if (memo[index][status] !== -1) {
      return memo[index][status];
    }
    // 三种状态， a: 不操作，b: 买入，c: 卖出
    let a = 0, b = 0, c = 0;
    // 不操作
    a = dfs(prices, index + 1, status);
    // 买入
    if (status === 0) {
      // 买入股票
      b = dfs(prices, index + 1, 1) - prices[index];
    } else {
      // 卖出股票
      c = dfs(prices, index + 2, 0) + prices[index];
    }
    // 更新memo, 三种状态取最大值
    memo[index][status] = Math.max(a, b, c);
    return memo[index][status];
  }
  return dfs(prices, 0, 0);
};

var maxProfit = function(prices) {
  let n = prices.length;
  if (n == 0) return 0;

  // dp[i][0] 表示第 i 天不持有股票的最大利润
  // dp[i][1] 表示第 i 天持有股票的最大利润
  let dp = new Array(n).fill(0).map(() => new Array(2).fill(0));

  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i-1][1], (i > 1 ? dp[i-2][0] : 0) - prices[i]);
  }

  return dp[n-1][0];
};

// Test case
console.log(maxProfit([1,2,3,0,2])); // 3
// console.log(maxProfit([3,2,6,5,0,3])) // 7
