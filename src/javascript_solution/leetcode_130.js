/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const array = [["X","O","X"],["X","O","X"],["X","O","X"]]
console.log(array)
var solve = function(board) {
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[i].length; j++) {
            if(board[i][j] === 'O'&& !(j===0||j===board[i].length-1||i===0||i===board.length-1)){
                console.log(i ,j)
                if(!(i-1===0&&board[i-1][j]==='O')){
                    console.log(1);
                    board[i][j] = 'X'
                }
                if(!(i+1===board.length-1&&board[i+1][j]==='O')){
                    console.log(2);
                    board[i][j] = 'X'
                }
                if(!(j-1===0&&board[i][j-1]==='O')){
                    console.log(3);
                    board[i][j] = 'X'
                }
                if(!(j+1===board[i].length-1&&board[i][j+1]==='O')){
                    console.log(4);
                    board[i][j] = 'X'
                }
            }
        }
    }
};
solve(array)
console.log(array)