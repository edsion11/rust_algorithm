/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  // inDegree记录每个课程的入度
  const inDegree = new Array(numCourses).fill(0);
  for (let [a, _] of prerequisites) {
    inDegree[a]++;
  }
  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  const res = [];
  while (queue.length) {
    const cur = queue.shift();
    res.push(cur);
    for (let [a, b] of prerequisites) {
      if (b === cur) {
        inDegree[a]--;
        if (inDegree[a] === 0) {
          queue.push(a);
        }
      }
    }
  }
  return res.length === numCourses ? res : [];
};

console.log(findOrder(2, [[1, 0]])); // [0,1]
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
); // [0,2,1,3] or [0,1,2,3]
console.log(findOrder(1, [])); // [0]
console.log(
  findOrder(3, [
    [1, 0],
    [1, 2],
    [0, 1],
  ])
); // []
