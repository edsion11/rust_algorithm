/**
* 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    const dp = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(0));
    for (let i = 0; i < matrix.length; i++) {
        dp[i][0] = matrix[i][0] === '1' ? 1 : 0;
    }
    for (let i = 0; i < matrix[0].length; i++) {
        dp[0][i] = matrix[0][i] === '1' ? 1 : 0;
    }
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === '1') {
                if (dp[i - 1][j - 1] === 1) {
                    dp[i][j] = dp[i-1][j-1]
                    const len = dp[i - 1][j - 1] ** 0.5;
                    for (let k = j; k >= j - len; k--) {
                        if (matrix[i][k] === '1') {
                            dp[i][j]++
                        }
                    }
                    for (let k = i; k >= i - len; k--) {
                        if (matrix[k][j] === '1') {
                            dp[i][j]++
                        }
                    }
                    if(dp[i][j]-1===(len+1)**2){
                        dp[i][j] = dp[i][j]-1
                    }else{
                        dp[i][j] = 1
                    }
                }
            }
        }
    }
    return Math.max(...dp.flat())
};
console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]])) // 4
console.log(maximalSquare([["0","1"],["1","0"]])) // 1
console.log(maximalSquare([["0"]])) // 0
console.log(maximalSquare([["1","1"],["1","1"]])) // 1

// []
