/**
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const needSetZeroRow = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        needSetZeroRow.push([i,j]);
      }
    }
  }
  for (let i = 0; i < needSetZeroRow.length; i++) {
    const [row, col] = needSetZeroRow[i];
    for (let j = 0; j < matrix[row].length; j++) {
      matrix[row][j] = 0;
    }
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][col] = 0;
    }
  }
  return matrix;
};

// 优化为O(1)空间复杂度
// 1. 使用两个变量记录第一行和第一列是否有0
// 2. 使用第一行和第一列记录其他行列是否有0
// 3. 根据第一行和第一列的记录，将其他行列置0
var setZeroes = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let rowHasZero = false;
  let colHasZero = false;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      colHasZero = true;
    }
  }
  for (let i = 0; i < n; i++) {
    if (matrix[0][i] === 0) {
      rowHasZero = true;
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }
  if (rowHasZero) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }
  if (colHasZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
  return matrix;
}



console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]])) // [[1,0,1],[0,0,0],[1,0,1]]
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])) // [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
