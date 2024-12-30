/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */

var findMinHeightTrees = function(n, edges) {
  const result = []
  const dfs = (k) => {
    let height = 0
    const queue = [k]
    const visited = new Array(n).fill(false)
    while(queue.length){
      const len = queue.length
      for (let i = 0; i < len; i++) {
        const node = queue.shift()
        visited[node] = true
        for (let j = 0; j < edges.length; j++) {
          if (edges[j][0] === node && !visited[edges[j][1]]) {
            queue.push(edges[j][1])
          }
          if (edges[j][1] === node && !visited[edges[j][0]]) {
            queue.push(edges[j][0])
          }
        }
      }
      height++
    }
    return height
  }
  for (let i = 0; i < n; i++) {
    result.push([i, dfs(i)])
  }
  result.sort((a, b) => a[1] - b[1])
  const minHeight = result[0][1]
  return result.filter(item => item[1] === minHeight).map(item => item[0])
};

// 超时， 因为每次都要重新计算高度
// 优化： 从叶子节点开始，每次删除叶子节点，直到剩下1个或2个节点
// 1. 先构建邻接表
// 2. 从叶子节点开始，每次删除叶子节点，直到剩下1个或2个节点
// 3. 返回剩下的节点
var findMinHeightTrees = function(n, edges) {
  if (n === 1) {
    return [0]
  }
  const adj = new Array(n).fill(0).map(() => [])
  const degree = new Array(n).fill(0)
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i]
    adj[a].push(b)
    adj[b].push(a)
    degree[a]++
    degree[b]++
  }
  const queue = []
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) {
      queue.push(i)
    }
  }
  while(n > 2) {
    const len = queue.length
    n -= len
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      for (let j = 0; j < adj[node].length; j++) {
        degree[adj[node][j]]--
        if (degree[adj[node][j]] === 1) {
          queue.push(adj[node][j])
        }
      }
    }
  }
  return queue
};
console.log(findMinHeightTrees(4, [[1,0],[1,2],[1,3]])) // [1]
console.log(findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]])) // [3,4]
