/**
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的异位词的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
*/
// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const result  = [];
  const arr = new Array(26).fill(0)
  for (let c of p) {
    arr[c.charCodeAt() - 'a'.charCodeAt()]++;
  }
  const len = p.length
  for (let i = 0; i <= s.length - len; i++) {
    const subStr = s.slice(i, i + len);
    const subArr = new Array(26).fill(0)
    for (let c of subStr) {
      subArr[c.charCodeAt() - 'a'.charCodeAt()]++;
    }
    if (arr.join('') === subArr.join('')) {
      result.push(i);
    }
  }
  return result;
};


// 优化的解法
var findAnagrams = function(s, p) {
  const result  = [];
  const arr = new Array(26).fill(0)
  for (let c of p) {
    arr[c.charCodeAt() - 'a'.charCodeAt()]++;
  }
  const len = p.length
  const subArr = new Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    subArr[s[i].charCodeAt() - 'a'.charCodeAt()]++;
    if (i >= len) {
      subArr[s[i - len].charCodeAt() - 'a'.charCodeAt()]--;
    }
    if (arr.join('') === subArr.join('')) {
      result.push(i - len + 1);
    }
  }
  return result;
};

var findAnagrams = function(s, p) {
    const sLen = s.length, pLen = p.length;

    if (sLen < pLen) {
        return [];
    }

    const ans = [];
    const count = Array(26).fill(0);
    // 初始化count数组，记录p中字符出现的次数，s中字符出现的次数
    for (let i = 0; i < pLen; ++i) {
        ++count[s[i].charCodeAt() - 'a'.charCodeAt()];
        --count[p[i].charCodeAt() - 'a'.charCodeAt()];
    }

    let differ = 0;
    // 计算不同的字符个数
    for (let j = 0; j < 26; ++j) {
        if (count[j] !== 0) {
            ++differ;
        }
    }
    // 如果不同的字符个数为0，说明p是s的子串
    if (differ === 0) {
        ans.push(0);
    }

    for (let i = 0; i < sLen - pLen; ++i) {
        // 滑动窗口，更新count数组，更新不同的字符个数
        if (count[s[i].charCodeAt() - 'a'.charCodeAt()] === 1) {
            --differ;
        } else if (count[s[i].charCodeAt() - 'a'.charCodeAt()] === 0) {
            ++differ;
        }
        --count[s[i].charCodeAt() - 'a'.charCodeAt()];

        if (count[s[i + pLen].charCodeAt() - 'a'.charCodeAt()] === -1) {
            --differ;
        } else if (count[s[i + pLen].charCodeAt() - 'a'.charCodeAt()] === 0) {
            ++differ;
        }
        ++count[s[i + pLen].charCodeAt() - 'a'.charCodeAt()];

        if (differ === 0) {
            ans.push(i + 1);
        }
    }
    return ans;
};
