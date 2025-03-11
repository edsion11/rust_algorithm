/**
 * 一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：
 * "1" -> 'A'
 * "2" -> 'B'
 * "25" -> 'Y'
 * "26" -> 'Z'
 * 然而，在 解码 已编码的消息时，你意识到有许多不同的方式来解码，因为有些编码被包含在其它编码当中（"2" 和 "5" 与 "25"）。
 * 例如，"11106" 可以映射为：
 * "AAJF" ，将消息分组为 (1, 1, 10, 6)
 * "KJF" ，将消息分组为 (11, 10, 6)
 * 消息不能分组为  (1, 11, 06) ，因为 "06" 不是一个合法编码（只有 "6" 是合法的）。
 * 注意，可能存在无法解码的字符串。
 * 给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。如果没有合法的方式解码整个字符串，返回 0。
 * 题目数据保证答案肯定是一个 32 位 的整数。
 */


/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    const dp = new Array(s.length + 1).fill(0);
    dp[0] = s[0] === '0' ? 0 : 1;
    // 1. 如果 s[i] === '0'，那么 s[i] 不能单独解码，只能和 s[i-1] 组合解码
    dp[1] = s[0] === '0' ? 0 : s[1]==='0'? s[0] <= 2 ? 1 : 0 : parseInt(s[0]+s[1]) <=26 ? 2 : 1;
    for (let i = 2; i < s.length; i++) {
        // 状态转移方程：当前字符为 0 时，前一个字符为 1 或 2 时，dp[i] = dp[i-2]
        if (s[i] === '0') {
            if (s[i - 1] === '1' || s[i - 1] === '2') {
                dp[i] = dp[i - 2]
            } else {
                dp[i] = 0
            }
        } else {
            // 当前字符不为 0 时，前一个字符为 0 时，dp[i] = dp[i-1]
            if (s[i - 1] === '0') {
                dp[i] = dp[i - 1]
            } else {
                // 当前字符不为 0 时,前一个字符不为 0 时，判断前两个字符是否小于等于 26
                const num = parseInt(s[i - 1] + s[i])
                if (num <= 26) {
                    dp[i] = dp[i - 1] + dp[i - 2]
                } else {
                    dp[i] = dp[i - 1]
                }
            }
        }
    }
    return dp[s.length - 1]
};
console.log(numDecodings("12")) // 2
console.log(numDecodings("226")) // 3
console.log(numDecodings("0")) // 0
console.log(numDecodings("11106")) // 2
console.log(numDecodings("06")) // 0
console.log(numDecodings("10")) // 1
