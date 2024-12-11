/**
 * 「外观数列」是一个数位字符串序列，由递归公式定义：
 * countAndSay(1) = "1"
 * countAndSay(n) 是 countAndSay(n-1) 的行程长度编码。
 * 行程长度编码（RLE）是一种字符串压缩方法，其工作原理是通过将连续相同字符（重复两次或更多次）替换为字符重复次数（运行长度）和字符的串联。
 * 例如，要压缩字符串 "3322251" ，我们将 "33" 用 "23" 替换，将 "222" 用 "32" 替换，将 "5" 用 "15" 替换并将 "1" 用 "11" 替换。
 * 因此压缩后字符串变为 "23321511"。
 * 给定一个整数 n ，返回 外观数列 的第 n 个元素。
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  const res = ['1']
  while (res.length <= n) {
    const str = res[res.length - 1]
    let temp = ''
    let cur = undefined
    let count = 0
    for (let i = 0; i < str.length;i++) {
      if (!cur) {
        cur = str[i]
        count = 1
      } else {
        if (cur === str[i]) {
          count++
        } else {
          temp += count + cur
          cur = str[i]
          count = 1
        }
      }
      if (i === str.length - 1) {
        temp += count + cur
      }
    }
    res.push(temp)
  }
  return res[n - 1]
};
console.log(countAndSay(4)) // 1211
console.log(countAndSay(1)) // 1
console.log(countAndSay(8)) // 1113213211
