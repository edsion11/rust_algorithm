/**
 * 
 * 给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以 字符串形式返回小数 。
 * 如果小数部分为循环小数，则将循环的部分括在括号内。
 * 如果存在多个答案，只需返回 任意一个 。
 * 对于所有给定的输入，保证 答案字符串的长度小于 104 。
 */
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
// 有理数除法，可以使用长除法的思想，将除数乘以10，然后除以被除数，得到商和余数，余数乘以10，继续除以被除数，直到余数为0或者出现循环
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) {
        return "0";
    }
    const res = [];
    if (numerator < 0 ^ denominator < 0) {
        res.push("-");
    }
    const num = Math.abs(numerator);
    const den = Math.abs(denominator);
    res.push(Math.floor(num / den));
    if (num % den === 0) {
        return res.join("");
    }
    res.push(".");
    const map = new Map();
    let remainder = num % den;
    while (remainder !== 0) {
        if (map.has(remainder)) {
        res.splice(map.get(remainder), 0, "(");
        res.push(")");
        break;
        }
        map.set(remainder, res.length);
        remainder *= 10;
        res.push(Math.floor(remainder / den));
        remainder %= den;
    }
    return res.join("");
};

console.log(fractionToDecimal(1, 2)); // "0.5"
console.log(fractionToDecimal(2, 1)); // "2"
console.log(fractionToDecimal(2, 3)); // "0.(6)"
console.log(fractionToDecimal(4, 333)); // "0.(012)"
console.log(fractionToDecimal(1, 5)); // "0.2"
console.log(fractionToDecimal(-50, 8)); // "-6.25"