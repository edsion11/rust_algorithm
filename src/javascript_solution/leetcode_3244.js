/**
 * 给你一个整数 n 和一个二维整数数组 queries。
 * 有 n 个城市，编号从 0 到 n - 1。初始时，每个城市 i 都有一条单向道路通往城市 i + 1（ 0 <= i < n - 1）。
 * queries[i] = [ui, vi] 表示新建一条从城市 ui 到城市 vi 的单向道路。每次查询后，你需要找到从城市 0 到城市 n - 1 的最短路径的长度。
 * 所有查询中不会存在两个查询都满足 queries[i][0] < queries[j][0] < queries[i][1] < queries[j][1]。
 * 返回一个数组 answer，对于范围 [0, queries.length - 1] 中的每个 i，answer[i] 是处理完前 i + 1 个查询后，从城市 0 到城市 n - 1 的最短路径的长度。
 */

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function (n, queries) {
  let roads = new Array(n).fill(0).map((_, i) => i + 1);
  let res = [];
  let dist = n - 1;
  for (let i = 0; i < queries.length; i++) {
    let k = roads[queries[i][0]];
    roads[queries[i][0]] = queries[i][1];
    while (k !== -1 && k < queries[i][1]) {
      let t = roads[k];
      roads[k] = -1;
      k = t;
      dist--;
    }
    res.push(dist);
  }
  return res;
};

console.log(
  shortestDistanceAfterQueries(4, [
    [0, 3],
    [0, 2],
  ]),
);
