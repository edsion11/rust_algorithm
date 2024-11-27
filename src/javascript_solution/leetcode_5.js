/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 */

/**
 * @param {string} s
 * @return {string}
 */
// dp解法 状态转移基于对称 从长度=1开始构建
// 以"babab"举例，dp[0][4] = dp[1][3] = dp[2][2](长度为1)
// 以"babbab"举例，dp[0][5] = dp[1][4] = dp[2][3](长度为2)
var longestPalindrome = function (s) {
  const dp = new Array(s.length)
    .fill(0)
    .map(() => new Array(s.length).fill(false));
  let res = "";
  for (let L = 1; L <= s.length; L++) {
    for (let i = 0; i < s.length; i++) {
      let j = i + L - 1;
      if (j >= s.length) {
        break;
      }
      if (s[i] === s[j]) {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      } else {
        dp[i][j] = false;
      }
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
};

// 超时
// var longestPalindrome = function(s) {
//     let res = ''
//     for(let i=0;i<s.length;i++){
//         for(j=i+1;j<=s.length;j++){
//             let str = s.substring(i,j)
//             if(str.length>res.length && str === str.split('').reverse().join('')){
//                 res = str
//             }
//         }
//     }
//     return res
// };

console.log(longestPalindrome("babab")); // babab
// console.log(longestPalindrome('babad')) // bab
// console.log(longestPalindrome('cbbd')) // bb
// console.log(longestPalindrome('a')) // a
// console.log(longestPalindrome('ac')) // a
// console.log(longestPalindrome('bb')) // bb
