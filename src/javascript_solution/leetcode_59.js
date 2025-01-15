/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
*/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const result = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  const map = new Map();
  const right = [0, 1];
  const down = [1, 0];
  const left = [0, -1];
  const up = [-1, 0];
  const directions = [right, down, left, up];
  const dfs = (i,j,direction, value) => {
    if (i < 0 || i >= n || j < 0 || j >= n || map.has(`${i},${j}`)) {
      return;
    }
    map.set(`${i},${j}`, value);
    result[i][j] = value;
    const preDirection = directions[direction];
    if (i + preDirection[0] < n && i + preDirection[0] >= 0 && j + preDirection[1] < n && j + preDirection[1] >= 0 && !map.has(`${i + preDirection[0]},${j + preDirection[1]}`)) {
      return dfs(i + preDirection[0], j + preDirection[1], direction, value + 1);
    }
    if (j + 1 < n && !map.has(`${i},${j + 1}`)) {
      return dfs(i, j + 1, 0, value + 1);
    }
    if (i + 1 < n && !map.has(`${i+1},${j}`)) {
      return dfs(i+1, j, 1, value + 1);
    }
    if (j - 1 >= 0 && !map.has(`${i},${j - 1}`)) {
      return dfs(i, j - 1, 2, value + 1);
    }
    if (i - 1 >= 0 && !map.has(`${i-1},${j}`)) {
      return dfs(i-1, j, 3, value + 1);
    }
    return
  }
  dfs(0,0,0,1);
  return result;
};

// 优化空间复杂度
var generateMatrix = function (n) {
  const result = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  let k = 0
  if (n % 2 === 0) {
    k = n / 2
  } else {
    k = (n - 1) / 2
    result[k][k] = n * n
  }
  let value = 1
  for (let i = 0; i < k; i++) {
    for (let j = i; j < n - i - 1; j++) {
      result[i][j] = value++
    }
    for (let j = i; j < n - i - 1; j++) {
      result[j][n - i - 1] = value++
    }
    for (let j = n - i - 1; j > i; j--) {
      result[n - i - 1][j] = value++
    }
    for (let j = n - i - 1; j > i; j--) {
      result[j][i] = value++
    }
  }
  return result
}


// test case
console.log(generateMatrix(3))
console.log(generateMatrix(1))
console.log(generateMatrix(4))
