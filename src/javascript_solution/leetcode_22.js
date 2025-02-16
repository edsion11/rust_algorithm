/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  const backtrack = (str) => {
    if (str.length === 2 * n) {
      res.push(str);
      return;
    }
    if (str.split("").filter((item) => item === "(").length < n) {
      backtrack(str + "(");
    }
    if (str.split("").filter((item) => item === ")").length < str.split('').filter(item=>item==='(').length) {
      backtrack(str + ")");
    }
  };
  backtrack("");
  return res;
};
// 思考： 每次递归都需要遍历一次字符串来判断括号，时间复杂度为O(n^2)，考虑优化如下：
// 1. 通过两个变量left和right来记录左右括号的数量，当left<n时，可以添加左括号，当right<left时，可以添加右括号
var generateParenthesis = function (n) {
    const res = []
    const backtrack = (str, left, right) => {
        if (str.length === 2 * n) {
            res.push(str)
            return
        }
        if (left < n) {
            backtrack(str + '(', left + 1, right)
        }
        if (right < left) {
            backtrack(str + ')', left, right + 1)
        }
    }
    backtrack('', 0, 0)
    return res
}

// 按括号序列的长度递归
var generateParenthesis = function(n) {
    // dp[i] 表示长度为i的所有有效括号组合
    const dp = new Array(n + 1).fill(0).map(() => []);
    dp[0] = [''];  // 空字符串是长度为0的有效括号组合
    
    for (let len = 1; len <= n; len++) {
        // 遍历所有可能的左括号位置
        for (let leftCount = 0; leftCount < len; leftCount++) {
            const rightCount = len - 1 - leftCount;
            // 获取左括号内部的所有组合
            const leftParts = dp[leftCount];
            // 获取右括号内部的所有组合
            const rightParts = dp[rightCount];
            
            // 组合左右两部分的括号
            for (const left of leftParts) {
                for (const right of rightParts) {
                    dp[len].push(`(${left})${right}`);
                }
            }
        }
    }
    
    return dp[n];
};

console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]
