/**
给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文串。返回 s 所有可能的分割方案。
*/


/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(true));
  const res = []
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }
  for (let i = n-1; i >=0; i--) {
    for (j = i + 1; j < n; j++) {
      dp[i][j] = s[i] === s[j] &&dp[i + 1][j - 1];
    }
  }
  const dfs = (i,j, arr) => {
    if ((i >= n || j >= n)&&arr.join('').length === n) {
      res.push(arr)
      return
    }
    for (let k = j; k < n; k++) {
      if (dp[j][k]) {
        dfs(j+1,k+1, [...arr, s.substring(j,k+1)])
      }
    }
  }
  for (let i = 0; i < n; i++) {
    dfs(0,i,[])
  }
  return res
};

console.log(partition("aab")) // [["a","a","b"],["aa","b"]]
// [true, true, false]
// [false, true, false]
// [false, false, true]
// console.log(partition("a")) // [["a"]]
// console.log(partition("ab")) // [["a","b"]]
// console.log(partition("aa")) // [["a","a"],["aa"]]
console.log(partition("cdd")) // [["c","d","d"],["c","dd"]]
console.log(partition("efe")) // [["e","f","e"],["efe"]]
