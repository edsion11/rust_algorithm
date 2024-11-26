/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1);
  dp[0] = 0;
  for (let coin of coins) {
    dp[coin] = 1;
  }
  for (let i = 1; i <= amount; i++) {
    if (dp[i] === undefined) {
      let min = 0;
      for (let coin of coins) {
        if (coin <= i) {
          if (dp[i - coin] !== undefined) {
            if (min === 0) {
              min = dp[i - coin] + 1;
            } else {
              min = Math.min(min, dp[i - coin] + 1);
            }
          }
        }
      }
      dp[i] = min === 0 ? undefined : min;
    }
  }
  return dp[amount] === undefined ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2], 3)); // -1
