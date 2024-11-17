/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (divisor === -1) return dividend === -2147483648 ? 2147483647 : -dividend
    if (divisor === 1) return dividend
    let has = String(dividend).includes('-') ^ String(divisor).includes('-')
    if (Math.abs(divisor) === 2 ** 31 && Math.abs(dividend) === 2 ** 31) return has === 0 ? 1 : -1
    let res = 0;
    let a = Math.abs(dividend)
    let b = Math.abs(divisor)
    while (a >= b) {
        let i = 1;
        let tmp = b
        // 除数翻倍,商翻倍,直到除数大于被除数,记录商
        while (a >= tmp) {
            a -= tmp
            res += i
            i = i << 1
            if (tmp === 2 * 31) return res
            tmp = Math.abs(tmp << 1)
        }
    }
    return has === 0 ? res : parseInt('-' + res)
};
// console.log(divide(14, 3))
// console.log(divide(7, -3))
console.log(divide(2147483647, 2))
