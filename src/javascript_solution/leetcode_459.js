/**
* 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  return (s + s).slice(1, -1).includes(s);
};

var repeatedSubstringPattern = function(s) {
  for (let i = 0; i < s.length-1; i++) {
    const subStr = s.substring(0, i + 1)
    if (s.split(subStr).every(item => item === '')) {
      return true
    }
  }
  return false
};

console.log(repeatedSubstringPattern("abab")) // true
console.log(repeatedSubstringPattern("aba")) // false
console.log(repeatedSubstringPattern("abcabcabcabc")) // true
