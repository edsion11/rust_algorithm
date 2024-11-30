/**
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。
 * 如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // 状态转移方程 => dp[i] = dp[j] && check(s[j..i−1])
  const dp = new Array(s.length).fill(false);
  for (let i = 0; i < s.length; i++) {
    // 判断[0,...,i+1]的当前字符串是否在字典中
    let flag = wordDict.includes(s.slice(0, i + 1));
    // 如果在字典中，直接赋值为true, 否则遍历之前的字符串
    if (flag) {
      dp[i] = flag;
      continue;
    } else {
      for (let j = 0; j < i; j++) {
        // 判断[0,...,j]的当前字符串是否在字典中，如果在字典中，判断[j+1,...,i]的当前字符串是否在字典中
        // 状态转移方程 => dp[i] = dp[j] && wordDict.includes(s.slice(j + 1, i + 1)
        if (dp[j] && wordDict.includes(s.slice(j + 1, i + 1))) {
          flag = true;
          dp[i] = flag;
          break;
        }
      }
    }
  }
  return dp[s.length-1]
};

console.log(wordBreak("leetcode", ["leet", "code"])); // true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
