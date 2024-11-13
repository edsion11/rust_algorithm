/**
 * 题目：打开转盘锁
 * 你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。
 * 每个拨轮可以自由旋转：例如把 '9' 变为 '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
 * 列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转。
 * 字符串 target 代表可以解锁的数字，你需要给出解锁需要的最小旋转次数，如果无论如何不能解锁，返回 -1 。
 */

// 输入：deadends = ["0201","0101","0102","1212","2002"], target = "0202"
// 输出：6
// 解释：
// 可能的移动序列为 "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202"。
// 注意 "0000" -> "0001" -> "0002" -> "0102" -> "0202" 这样的序列是不能解锁的，
// 因为当拨动到 "0102" 时这个锁就会被锁定。
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const deadSet = new Set(deadends);
  const visited = new Set();
  const queue = [["0000", 0, []]];
  const getSideLocks = (locks) => {
    const res = [];
    for (let i = 0; i < 4; i++) {
      const cur = locks[i];
      res.push(
        locks.slice(0, i) +
          (cur === "0" ? "9" : parseInt(cur) - 1) +
          locks.slice(i + 1),
      );
      res.push(
        locks.slice(0, i) +
          (cur === "9" ? "0" : parseInt(cur) + 1) +
          locks.slice(i + 1),
      );
    }
    return res;
  };

  while (queue.length > 0) {
    const [cur, depth, paths] = queue.shift();
    if (cur === target) {
      // 输出经过的路径
      console.log("paths", paths);
      return depth;
    }
    if (deadSet.has(cur)) continue;
    const nextLocks = getSideLocks(cur);
    for (let i = 0; i < nextLocks.length; i++) {
      const next = nextLocks[i];
      if (!visited.has(next)) {
        queue.push([next, depth + 1, [...paths, next]]);
        visited.add(next);
      }
    }
  }
  return -1;
};
console.log(
  openLock(
    ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"],
    "8888",
  ),
);
