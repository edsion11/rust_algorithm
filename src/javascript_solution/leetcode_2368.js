/**
 * 现有一棵由 n 个节点组成的无向树，节点编号从 0 到 n - 1 ，共有 n - 1 条边。
 * 给你一个二维整数数组 edges ，长度为 n - 1 ，
 * 其中 edges[i] = [ai, bi] 表示树中节点 ai 和 bi 之间存在一条边。另给你一个整数数组 restricted 表示 受限 节点。
 * 在不访问受限节点的前提下，返回你可以从节点 0 到达的 最多 节点数目。
 * 注意，节点 0 不 会标记为受限节点。
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
// 超时
var reachableNodes = function (n, edges, restricted) {
  const visited = new Set();
  const queue = [0];
  const getEdges = (node) => edges.filter((edge) => edge.includes(node));
  let count = 1;
  while (queue.length > 0) {
    const cur = queue.shift();
    visited.add(cur);
    const maps = getEdges(cur);
    maps.forEach((item) => {
      const index = item.indexOf(cur);
      if (
        index > -1 &&
        restricted.indexOf(item[index === 0 ? 1 : 0]) === -1 &&
        !visited.has(item[index === 0 ? 1 : 0])
      ) {
        queue.push(item[index === 0 ? 1 : 0]);
        count++;
      }
    });
  }
  return count;
};

// 官方解法
// var reachableNodes = function(n, edges, restricted) {
//     const isRestricted = new Array(n).fill(0);
//     for (const x of restricted) {
//         isRestricted[x] = 1;
//     }

//     const g = new Array(n).fill(null).map(() => []);
//     for (const [u, v] of edges) {
//         g[u].push(v);
//         g[v].push(u);
//     }

//     let cnt = 0;
//     const dfs = (x, f) => {
//         cnt++;
//         for (const y of g[x]) {
//             if (y !== f && !isRestricted[y]) {
//                 dfs(y, x);
//             }
//         }
//     }
//     dfs(0, -1);
//     return cnt;
// };

console.log(
  reachableNodes(
    7,
    [
      [0, 1],
      [0, 2],
      [0, 5],
      [0, 4],
      [3, 2],
      [6, 5],
    ],
    [4, 2, 1],
  ),
);
// 输出：4
