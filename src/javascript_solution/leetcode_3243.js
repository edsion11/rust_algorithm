/**
 *给你一个整数 n 和一个二维整数数组 queries。
 *有 n 个城市，编号从 0 到 n - 1。初始时，每个城市 i 都有一条单向道路通往城市 i + 1（ 0 <= i < n - 1）。
 *queries[i] = [ui, vi] 表示新建一条从城市 ui 到城市 vi 的单向道路。每次查询后，你需要找到从城市 0 到城市 n - 1 的最短路径的长度。
 *返回一个数组 answer，对于范围 [0, queries.length - 1] 中的每个 i，answer[i] 是处理完前 i + 1 个查询后，从城市 0 到城市 n - 1 的最短路径的长度。
 */
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function (n, queries) {
  const res = [];
  const neighbors = new Array(n).fill(0).map((item) => []);
  for (let i = 0; i < n - 1; i++) {
    neighbors[i].push(i + 1);
  }
  const bfs = (n, neighbors) => {
    const queue = [0];
    const visited = new Array(n).fill(false);
    visited[0] = true;
    let step = 0;
    while (queue.length) {
      const size = queue.length;
      for (let i = 0; i < size; i++) {
        const cur = queue.shift();
        if (cur === n - 1) {
          return step;
        }
        for (let next of neighbors[cur]) {
          if (!visited[next]) {
            visited[next] = true;
            queue.push(next);
          }
        }
      }
      step++;
    }
    return -1;
  };
  for (let item of queries) {
    const [ui, vi] = item;
    neighbors[ui].push(vi);
    res.push(bfs(n, neighbors));
  }
  return res;
};

// Test1
console.log(
  shortestDistanceAfterQueries(5, [
    [2, 4],
    [0, 2],
    [0, 4],
  ]),
);
//  [3, 2, 1]
// Test2
console.log(
  shortestDistanceAfterQueries(4, [
    [0, 3],
    [0, 2],
  ]),
);
// [1, 1]
