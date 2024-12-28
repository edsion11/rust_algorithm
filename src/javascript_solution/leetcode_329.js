/**
 * 给定一个 m x n 整数矩阵 matrix ，找出其中 最长递增路径 的长度。
 * 对于每个单元格，你可以往上，下，左，右四个方向移动。 
 * 你 不能 在 对角线 方向上移动或移动到 边界外（即不允许环绕）。
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    if (!matrix || matrix.length === 0) return 0;
    const m = matrix.length, n = matrix[0].length;
    const cache = Array.from({ length: m }, () => Array(n).fill(0));
    let res = 0;

    const dfs = (i, j, prevVal) => {
        if (i < 0 || i >= m || j < 0 || j >= n || matrix[i][j] <= prevVal) return 0;
        if (cache[i][j] !== 0) return cache[i][j];
        
        const currVal = matrix[i][j];
        const len1 = dfs(i + 1, j, currVal);
        const len2 = dfs(i - 1, j, currVal);
        const len3 = dfs(i, j + 1, currVal);
        const len4 = dfs(i, j - 1, currVal);
        
        cache[i][j] = 1 + Math.max(len1, len2, len3, len4);
        return cache[i][j];
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res = Math.max(res, dfs(i, j, -Infinity));
        }
    }
    return res;
};

console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]])); // 4
console.log(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]])); // 4
console.log(longestIncreasingPath([[1]])); // 1
console.log(longestIncreasingPath([[7,8,9],[9,7,6],[7,2,3]])); // 6