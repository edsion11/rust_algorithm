
/**
 * 在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：
 * 值 0 代表空单元格；
 * 值 1 代表新鲜橘子；
 * 值 2 代表腐烂的橘子。
 * 每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。
 * 返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
// leetcode result: 9 ms 52.82MB
var orangesRotting = function(grid) {
    // 思路：BFS
    const queue = []
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    // 记录新鲜橘子的数量
    let freshCount = 0
    const rows = grid.length
    const cols = grid[0].length
    let res = 0
    // 将所有腐烂的橘子加入队列
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j])
            } else if (grid[i][j] === 1) {
                freshCount++
            }
        }
    }
    // BFS，当有新鲜橘子且队列不为空时，继续遍历
    while (queue.length && freshCount) {
        // 记录是否有新的橘子腐烂，如果没有则表示无法腐烂新鲜橘子
        let changed = false
        const size = queue.length
        // 遍历当前队列中的腐烂橘子
        for (let i = 0; i < size; i++) {
            const [x, y] = queue.shift()
            // 遍历当前腐烂橘子的四个方向
            for (const [dx, dy] of directions) {
                const newX = x + dx
                const newY = y + dy
                if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] === 1) {
                    grid[newX][newY] = 2
                    freshCount--
                    queue.push([newX, newY])
                    changed = true
                }
            }
        }
        if (changed) {
            res++
        }
    }
    return freshCount === 0 ? res : -1
};

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]])); // 4
console.log(orangesRotting([[2,1,1],[1,1,1],[0,1,2]])); // 2