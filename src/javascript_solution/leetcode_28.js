/**
* 给你两个字符串 haystack 和 needle ，
* 请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。
*/


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(haystack=== needle) return 0
  let res = -1
  const n = needle.length
  haystack.split('').reduce((prev,cur, curIndex) => {
    const curStr = prev + cur
    if (curStr.length < n) {
      return prev + cur
    } else {
      if (curStr === needle) {
        res = res < 0 ? curIndex - n + 1 : Math.min(curIndex - n, res)
      }
      return curStr.slice(1)
    }
  }, '')
  return res
};

console.log(strStr("sadbutsad", "sad")) // 0
console.log(strStr("leetcode", "leeto")) // -1
console.log(strStr("hello", "ll")) // 2
console.log(strStr("aaaaa", "bba")) // -1
console.log(strStr("abc", "c")) // 2
console.log(strStr("aaa", "a")) // 0
