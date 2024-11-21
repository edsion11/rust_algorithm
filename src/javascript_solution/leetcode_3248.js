/**
 * 大小为 n x n 的矩阵 grid 中有一条蛇。蛇可以朝 四个可能的方向 移动。
 * 矩阵中的每个单元格都使用位置进行标识： grid[i][j] = (i * n) + j。
 * 蛇从单元格 0 开始，并遵循一系列命令移动。
 * 给你一个整数 n 表示 grid 的大小，另给你一个字符串数组 commands，
 * 其中包括 "UP"、"RIGHT"、"DOWN" 和 "LEFT"。题目测评数据保证蛇在整个移动过程中将始终位于 grid 边界内。
 * 返回执行 commands 后蛇所停留的最终单元格的位置。
 */


/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let res = 0
    commands.forEach((command) => {
        if(command==='UP'){
            res = res-n
        }else if(command === 'DOWN'){
            res = res+n
        }else if(command === 'LEFT'){
            res = res-1
        }else if(command === 'RIGHT'){
            res = res+1
        }
    })
    return res
};

console.log(finalPositionOfSnake(3, ["RIGHT","DOWN","LEFT","DOWN"])) // 6