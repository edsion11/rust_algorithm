/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 给你一个 二进制 字符串 s 和一个整数 k。
// 如果一个 二进制字符串 满足以下任一条件，则认为该字符串满足 k 约束：

// 字符串中 0 的数量最多为 k。
// 字符串中 1 的数量最多为 k。
// 返回一个整数，表示 s 的所有满足 k 约束 的
// 子字符串
// 的数量。
// 输入：s = "10101", k = 1
// 输出：12
// 解释：
// s 的所有子字符串中，除了 "1010"、"10101" 和 "0101" 外，其余子字符串都满足 k 约束。
var countKConstraintSubstrings = function (s, k) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    // let count = 0;
    for (let j = i; j < s.length; j++) {
      const str = s.slice(i, j + 1);
      if (
        str.split("").filter((item) => item === "0").length <= k ||
        str.split("").filter((item) => item === "1").length <= k
      ) {
        count++;
      }
    }
  }
  return count;
};

var countKConstraintSubstrings2 = function (s, k, queries) {
  const res = [];
  for (let i = 0; i < queries.length; i++) {
    const end = queries[i][1];
    const start = queries[i][0];
    res.push(countKConstraintSubstrings(s.slice(start, end + 1), k));
  }
  console.log(res);
  return res;
};
// console.log(countKConstraintSubstrings("10101", 1));
// console.log(countKConstraintSubstrings("0001111", 2));
countKConstraintSubstrings2("010101", 1, [
  [0, 5],
  [1, 4],
  [2, 3],
]);
