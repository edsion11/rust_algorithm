/**
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
 * 如果剩余字符少于 k 个，则将剩余字符全部反转。
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    const reverse = (str) => {
        return str.split('').reverse().join('');
    }
    if (s.length < k) {
        return reverse(s);
    }
    let res = ''
    // const n = Math.floor(s.length/(2*k))
    while (s.length - res.length >= 2 * k) {
        res = res + reverse(s.slice(res.length, res.length + k)) + s.slice(res.length + k, res.length + 2 * k)
    }
    const len = s.length - res.length
    if (len < 2 * k && len > 0) {
        if (len < k) {
            res = res + reverse(s.slice(res.length))
        } else {
            res = res + reverse(s.slice(res.length, res.length + k)) + s.slice(res.length + k)
        }
    }
    return res
}
// 循环遍历字符串，每次取出2k个字符，前k个字符反转，后k个字符不变
var reverseStr = function(s, k) {
    const reverse = (arr, left, right) => {
        while (left < right) {
            const temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    const n = s.length;
    const arr = Array.from(s);
    for (let i = 0; i < n; i += 2 * k) {
        reverse(arr, i, Math.min(i + k, n) - 1);
    }
    return arr.join('');
};

var reverseStr = function(s, k) {
    const reverse = (str) => {
        return str.split('').reverse().join('');
    }
    let res = ''
    for (let i = 0; i < s.length; i += 2 * k) {
        res = res + reverse(s.slice(i, i + k)) + s.slice(i + k, i + 2 * k)
    }
    return res
}


console.log(reverseStr("abcdefg", 2)); // "bacdfeg"
console.log(reverseStr("abcd", 2)); // "bacd"
