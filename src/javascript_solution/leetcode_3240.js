/**
 * 给你一个 m x n 的二进制矩阵 grid 。
 *
 * 如果矩阵中一行或者一列从前往后与从后往前读是一样的，那么我们称这一行或者这一列是 回文 的。
 *
 * 你可以将 grid 中任意格子的值 翻转 ，也就是将格子里的值从 0 变成 1 ，或者从 1 变成 0 。
 *
 * 请你返回 最少 翻转次数，使得矩阵中 所有 行和列都是 回文的 ，且矩阵中 1 的数目可以被 4 整除 。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function(grid) {
    const m = grid.length, n = grid[0].length;
    let ans = 0;
    for (let i = 0; i < Math.floor(m / 2); i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            const cnt1 = grid[i][j] + grid[i][n - 1 - j] +
                grid[m - 1 - i][j] + grid[m - 1 - i][n - 1 - j];
            ans += Math.min(cnt1, 4 - cnt1);
        }
    }
    let diff = 0; cnt1 = 0;
    if (m % 2 === 1) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            if (grid[Math.floor(m / 2)][j] ^ grid[Math.floor(m / 2)][n - 1 - j]) {
                diff++;
            } else {
                cnt1 += grid[Math.floor(m / 2)][j] * 2;
            }
        }
    }
    if (n % 2 === 1) {
        for (let i = 0; i < Math.floor(m / 2); i++) {
            if (grid[i][Math.floor(n / 2)] ^ grid[m - 1 - i][Math.floor(n / 2)]) {
                diff++;
            } else {
                cnt1 += grid[i][Math.floor(n / 2)] * 2;
            }
        }
    }
    if (m % 2 === 1 && n % 2 === 1) {
        ans += grid[Math.floor(m / 2)][Math.floor(n / 2)];
    }
    if (diff > 0) {
        ans += diff;
    } else {
        ans += cnt1 % 4;
    }
    return ans;
};

const grid = [[1,0,0],[0,1,0],[0,0,1]]
console.log(minFlips(grid))
