/**
* 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
// 动态规划
var maximalSquare = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    let max = 0;
    for (let i = 0; i < m; i++) {
        dp[i][0] = matrix[i][0] === '1' ? 1 : 0;
        max = Math.max(max, dp[i][0]);
    }
    for (let i = 0; i < n; i++) {
        dp[0][i] = matrix[0][i] === '1' ? 1 : 0;
        max = Math.max(max, dp[0][i]);
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === '1') {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max * max;
};
// 暴力求解
var maximalSquare = function (matrix) {

}
console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]])) // 4
console.log(maximalSquare([["0","1"],["1","0"]])) // 1
console.log(maximalSquare([["0"]])) // 0
console.log(maximalSquare([["1","1"],["1","1"]])) // 1

// []
