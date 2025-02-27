/**
给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文串。返回 s 所有可能的分割方案。
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(true));
  const res = [];
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }
  for (let i = n - 1; i >= 0; i--) {
    for (j = i + 1; j < n; j++) {
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
    }
  }
  const dfs = (i, j, arr) => {
    if ((i >= n || j >= n) && arr.join("").length === n) {
      res.push(arr);
      return;
    }
    for (let k = j; k < n; k++) {
      if (dp[j][k]) {
        dfs(j + 1, k + 1, [...arr, s.substring(j, k + 1)]);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    dfs(0, i, []);
  }
  return res;
};

var partition = function (s) {
  const res = [];
  const check = (str) => str.split("").reverse().join("") === str;
  const backtrack = (path, i) => {
    if (i === s.length) {
      res.push(path);
      return;
    }
    for (let k = i + 1; k <= s.length; k++) {
      if (check(s.slice(i, k))) {
        path.push(s.slice(i, k));
        backtrack([...path], k);
        path.pop();
      }
    }
  };
  backtrack([], 0);
  return res;
};

// 使用动态规划优化
var partition = function (s) {
  const res = [];
  const n = s.length;
  // dp[i][j] 表示 s[i..j] 是否为回文串
  const dp = Array(n)
    .fill(0)
    .map(() => Array(n).fill(true));

  // 预处理所有的回文子串
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
    }
  }
  const backtrack = (path, i) => {
    if (i === n) {
      res.push(path);
      return;
    }
    for (let k = i + 1; k <= n; k++) {
      if (dp[i][k-1]) {
        path.push(s.slice(i, k));
        backtrack([...path], k);
        path.pop();
      }
    }
  };
  backtrack([], 0);
  return res;
};

console.log(partition("aab")); // [["a","a","b"],["aa","b"]]
console.log(partition("a")); // [["a"]]
console.log(partition("ab")); // [["a","b"]]
console.log(partition("aa")); // [["a","a"],["aa"]]
console.log(partition("cdd")); // [["c","d","d"],["c","dd"]]
console.log(partition("efe")); // [["e","f","e"],["efe"]]
