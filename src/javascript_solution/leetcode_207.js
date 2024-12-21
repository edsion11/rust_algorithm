/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 超时，思路是DFS深度优先搜索当前课程是否有环
// var canFinish = function(numCourses, prerequisites) {
//     const set = new Set();
//     // DFS深度优先搜索当前课程是否有环
//     const dfs = (course) => {
//         if (set.has(course)) {
//             return false;
//         }
//         set.add(course);
//         for (let i = 0; i < prerequisites.length; i++) {
//             if (prerequisites[i][0] === course) {
//                 if (!dfs(prerequisites[i][1])) {
//                     return false;
//                 }
//             }
//         }
//         set.delete(course);
//         return true;
//     };
//     for (let i = 0; i < numCourses; i++) {
//         if (!dfs(i)) {
//             return false;
//         }
//     }
//     return true;
// };
// 优化
var canFinish = function(numCourses, prerequisites) {
    // inDegree记录每个课程的入度
    // 入度是在有向图中用来表示一个节点的前驱节点的个数
    // 例如：[1, 0]表示1是0的前驱节点，0的入度为1
    const inDegree = new Array(numCourses).fill(0);
    // queue记录入度为0的课程
    const queue = [];
    // 初始化入度
    for (let i = 0; i < prerequisites.length; i++) {
        inDegree[prerequisites[i][0]]++;
    }
    // 将入度为0的课程加入queue
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    while (queue.length) {
        // 出队列
        const course = queue.shift();
        // 课程数减1
        numCourses--;
        // 遍历课程，将入度为0的课程加入queue
        for (let i = 0; i < prerequisites.length; i++) {
            // 如果当前课程是其他课程的前驱节点
            if (prerequisites[i][1] === course) {
                // 入度减1
                inDegree[prerequisites[i][0]]--;
                // 如果入度为0，加入queue
                if (inDegree[prerequisites[i][0]] === 0) {
                    queue.push(prerequisites[i][0]);
                }
            }
        }
    }
    // 如果课程数为0，说明没有环
    return numCourses === 0;
}
console.log(canFinish(2, [[1, 0]])); // true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false