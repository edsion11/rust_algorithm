/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const array = [["X","O","X"],["X","O","X"],["X","O","X"]]
// 思路： 从边界开始，将边界上的O以及与边界上的O相连的O全部标记为A，然后遍历整个数组，将O标记为X，将A标记为O
var solve = function(board) {
    const row = board.length
    const col = board[0].length
    const dfs = (i, j) => {
        if (i < 0 || i >= row || j < 0 || j >= col || board[i][j] !== 'O') {
            return
        }
        board[i][j] = 'A'
        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
    }
    for (let i = 0; i < row; i++) {
        dfs(i, 0)
        dfs(i, col - 1)
    }
    for (let i = 0; i < col; i++) {
        dfs(0, i)
        dfs(row - 1, i)
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'
            }
            if (board[i][j] === 'A') {
                board[i][j] = 'O'
            }
        }
    }
};
solve(array)
console.log(array)
