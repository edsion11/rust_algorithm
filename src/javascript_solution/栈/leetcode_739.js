/**
 * 给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，
 * 下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。
 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
/// O(n^2)
var dailyTemperatures = function (temperatures) {
  let res = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] - temperatures[i] > 0 && res[i] === 0) {
        res[i] = j - i;
      }
    }
  }
  return res;
};
// 2
var dailyTemperatures = function (temperatures) {
    // 从左到右 维护一个temperature递减的栈，将下标入栈，
  const n = temperatures.length;
  const res = new Array(n).fill(0);
  const stack = [0]; // 单调栈
  for (let i = 1; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const top = stack.pop();
      res[top] = i - top;
    }
    stack.push(i)
  }
  return res
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
