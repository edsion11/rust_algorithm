/**
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
 *   你可以对一个单词进行如下三种操作：
 *   插入一个字符
 *   删除一个字符
 *   替换一个字符
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(i === 0 || j === 0) {
                if(i === 0 && j === 0) {
                    dp[i][j] = word1[i] === word2[j] ? 0 : 1;
                } else if(i === 0) {
                    dp[i][j] = word1[i] === word2[j] ? j : dp[i][j-1] + 1;
                } else {
                    dp[i][j] = word1[i] === word2[j] ? i : dp[i-1][j] + 1;
                }
            } else {
                if(word1[i] === word2[j]) {
                    dp[i][j] = dp[i-1][j-1];
                } else {
                    dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]) + 1;
                }
            }
        }
    }
};

console.log(minDistance("horse", "ros")); // 3