/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if (text1[i] === text2[j]) {
            dp[i][j] = (i > 0 && j > 0 ? dp[i - 1][j - 1] : 0) + 1;
        } else {
            dp[i][j] = Math.max(i > 0 ? dp[i - 1][j] : 0, j > 0 ? dp[i][j - 1] : 0);
        }
    }
  }
  return dp[m - 1][n - 1];
};

var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = new Array(m+1).fill(0).map(item=>new Array(n+1).fill(0));
    for( let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(text1[i-1]===text2[j-1]){
                dp[i][j] = dp[i-1][j-1]+1
            }else{
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
            }
        }
    }
    return dp[m][n]
};

console.log(longestCommonSubsequence("abab", "baba")); // 3
console.log(longestCommonSubsequence("abcde", "ace")); // 3
console.log(longestCommonSubsequence("abc", "def")); // 0
