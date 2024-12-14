/**
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。
 * 如果 word 存在于网格中，返回 true ；否则，返回 false 。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，
 * 其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 *
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// DFS
var exist = function (board, word) {
    const dfs = (i, j, visited, str, k) => {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j] || board[i][j] !== word[k]) {
            return false;
        }
        if (k === word.length - 1) {
            return true;
        }
        if (board[i][j] === word[k]) {
            str += board[i][j];
            visited[i][j] = true;
            const result = dfs(i + 1, j, visited, str, k + 1) || dfs(i - 1, j, visited, str, k + 1) || dfs(i, j + 1, visited, str, k + 1) || dfs(i, j - 1, visited, str, k + 1)
            visited[i][j] = false;
            if(result) return true
        } else {
            return false;
        }
    };
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const visited = new Array(board.length)
                .fill(false)
                .map(() => new Array(board[0].length).fill(false));
            if (dfs(i, j, visited, "", 0)) {
                return true;
            }
        }
    }
    return false;
};

// console.log(
//     exist(
//         [
//             ["A", "B", "C", "E"],
//             ["S", "F", "C", "S"],
//             ["A", "D", "E", "E"],
//         ],
//         "ABCCED"
//     )
// ); // true

// console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB")); // false
console.log(exist([["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]], "ABCESEEEFS")); // true
