/**
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 说明：每次只能向下或者向右移动一步。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[0][0];
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else {

        dp[i][j] = Math.min(
          dp[i - 1][j] + grid[i][j],
          dp[i][j - 1] + grid[i][j]
        );
      }
    }
  }
  return dp[m-1][n-1]
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);

console.log(minPathSum([[1,2,3],[4,5,6]]))
