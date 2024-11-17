/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  let columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
  let boxes = new Array(3)
    .fill(0)
    .map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      if (num !== ".") {
        let n = num.charCodeAt() - "1".charCodeAt();
        let box_index = parseInt(i / 3) * 3 + parseInt(j / 3);
        rows[i][n]++;
        columns[j][n]++;
        boxes[box_index][n]++;
        if (rows[i][n] > 1 || columns[j][n] > 1 || boxes[box_index][n] > 1) {
          return false;
        }
      }
    }
  }
};
