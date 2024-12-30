/**
有两个水壶，容量分别为 x 和 y 升。水的供应是无限的。确定是否有可能使用这两个壶准确得到 target 升。
你可以：
装满任意一个水壶
清空任意一个水壶
将水从一个水壶倒入另一个水壶，直到接水壶已满，或倒水壶已空。
*/


/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function(x, y, target) {
  // 思路1: DFS + 记忆化搜索
  const visited = new Set()
  const dfs = (a, b) => {
    // 如果a或b等于target或者a+b等于target，返回true
    if (a === target || b === target || a + b === target) {
      return true
    }
    // 如果visited中已经存在a-b，返回false
    if (visited.has(`${a}-${b}`)) {
      return false
    }
    visited.add(`${a}-${b}`)
    // dfs(0, b) 清空a
    // dfs(a, 0) 清空b
    // dfs(x, b) 填满a
    // dfs(a, y) 填满b
    // dfs(a - Math.min(a, y - b), b + Math.min(a, y - b)) a倒入b
    // dfs(a + Math.min(b, x - a), b - Math.min(b, x - a)) b倒入a
    // a倒入b时，a剩下的水量为 a - Math.min(a, y - b), b剩下的水量为 b + Math.min(a, y - b)
    // b倒入a时，a剩下的水量为 a + Math.min(b, x - a), b剩下的水量为 b - Math.min(b, x - a)
    return dfs(0, b) || dfs(a, 0) || dfs(x, b) || dfs(a, y) || dfs(a - Math.min(a, y - b), b + Math.min(a, y - b)) || dfs(a + Math.min(b, x - a), b - Math.min(b, x - a))
  }
  return dfs(0, 0)
};

// 用栈模拟DFS
var canMeasureWater = function(x, y, target) {
  const stack = [[0, 0]]
  const visited = new Set()
  while(stack.length){
    const [a, b] = stack.pop()
    if (a === target || b === target || a + b === target) {
      return true
    }
    if (visited.has(`${a}-${b}`)) {
      continue
    }
    visited.add(`${a}-${b}`)
    stack.push([0, b])
    stack.push([a, 0])
    stack.push([x, b])
    stack.push([a, y])
    stack.push([a - Math.min(a, y - b), b + Math.min(a, y - b)])
    stack.push([a + Math.min(b, x - a), b - Math.min(b, x - a)])
  }
  return false
}

console.log(canMeasureWater(3, 5, 4)) // true
console.log(canMeasureWater(2, 6, 5)) // false
console.log(canMeasureWater(1, 2, 3)) // true
