/**
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 *
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 1. 按圈旋转
  const n = matrix.length;
  let k = 0;
  if (n % 2 === 0) {
    k = n / 2 + 1;
  } else {
    k = (n + 1) / 2;
  }
  for (let i = 0; i < k - 1; i++) {
    let temp = [];
    for (let k = n - 1 - i; k >= i; k--) {
      temp.push(matrix[k][i]);
    }
    for (let j = i; j <= n - i - 1; j++) {
      temp.push(matrix[i][j]);
      matrix[i][j] = temp.shift();
    }
    for (let k = i; k < n - i; k++) {
      if (k === i) {
        temp.push(temp[temp.length - 1]);
      } else {
        temp.push(matrix[k][n - 1 - i]);
      }
      matrix[k][n - 1 - i] = temp.shift();
    }
    for (let j = n - 1 - i; j >= i; j--) {
      if (j === n - 1 - i) {
        temp.push(temp[temp.length - 1]);
      } else {
        temp.push(matrix[n - 1 - i][j]);
      }
      matrix[n - 1 - i][j] = temp.shift();
    }
    for (let k = n - 1 - i; k >= i; k--) {
      matrix[k][i] = temp.shift();
    }
  }
  return matrix;
};
// test case
console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [[7,4,1],[8,5,2],[9,6,3]]
console.log(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);
// [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
