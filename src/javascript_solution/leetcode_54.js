/**
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let m = matrix.length; // 行数
  let n = matrix[0].length; // 列数
  let res = [];
  // 使用map记录已经访问过的位置
  const map = new Map();
  let right = [0, 1]; // 右
  let down = [1, 0]; // 下
  let left = [0, -1]; // 左
  let up = [-1, 0]; // 上
  const directions = [right, down, left, up]; // 右下左上
  const dfs = (i, j, res, direction) => {
    res.push(matrix[i][j]);
    // 标记已经访问过
    map.set(`${i}-${j}`, 1);
    const curDirection = directions[direction];
    // 按原来的方向继续走，如果下一个位置在矩阵内且没有访问过，继续递归
    if (
      i + curDirection[0] >= 0 &&
      i + curDirection[0] < m &&
      j + curDirection[1] >= 0 &&
      j + curDirection[1] < n &&
      !map.has(`${i + curDirection[0]}-${j + curDirection[1]}`)
    ) {
      return dfs(i + curDirection[0], j + curDirection[1], res, direction);
    }
    // 如果下一个位置不在矩阵内或者已经访问过，按顺时针方向继续走
    if (j + right[1] <= n - 1 && !map.has(`${i + right[0]}-${j + right[1]}`)) {
      return dfs(i + right[0], j + right[1], res, 0);
    }
    if (i + down[0] <= m - 1 && !map.has(`${i + down[0]}-${j + down[1]}`)) {
      return dfs(i + down[0], j + down[1], res, 1);
    }
    if (j + left[1] >= 0 && !map.has(`${i + left[0]}-${j + left[1]}`)) {
      return dfs(i + left[0], j + left[1], res, 2);
    }
    if (i + up[0] >= 0 && !map.has(`${i + up[0]}-${j + up[1]}`)) {
      return dfs(i + up[0], j + up[1], res, 3);
    }
    return;
  };
  dfs(0, 0, res,0);
  return res;
};
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1,2,3,6,9,8,7,4,5]
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
); // [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24],
  ])
); // [1,2,3,4,8,12,16,20,24,23,22,21,17,13,9,5,6,7,11,15,19,18,14,10]


// 别的思路: 按层模拟
var spiralOrder = function(matrix) {
    if(matrix.length === 0) return [];
    const res = [];
    let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1;
    while(left <= right && top <= bottom) {
        for(let i = left; i <= right; i++) {
        res.push(matrix[top][i]);
        }
        for(let i = top + 1; i <= bottom; i++) {
        res.push(matrix[i][right]);
        }
        if(left < right && top < bottom) {
        for(let i = right - 1; i >= left; i--) {
            res.push(matrix[bottom][i]);
        }
        for(let i = bottom - 1; i > top; i--) {
            res.push(matrix[i][left]);
        }
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    return res;
}