/**
 * >>为运算表达式设计优先级
 * 给你一个由数字和运算符组成的字符串 expression ，按不同优先级组合数字和运算符，
 * 计算并返回所有可能组合的结果。你可以 按任意顺序 返回答案。
 * 生成的测试用例满足其对应输出值符合 32 位整数范围，不同结果的数量不超过 104 。
 */

/**
 * @param {string} expression
 * @return {number[]}
 */
// 记忆化搜索
// 思路： 一次便利字符串，遇到运算符时，递归计算左右两边的结果，然后根据运算符计算结果
var diffWaysToCompute = function(expression) {
    // 判断是否为数字
    const isNumber = (str) => {
        return !isNaN(Number(str));
    }
    // 记忆化搜索
    const memo = new Map();
    const dfs = (expression) => {
        // 如果已经计算过，直接返回
        if (memo.has(expression)) {
            return memo.get(expression);
        }
        // 如果是数字，直接返回
        if (isNumber(expression)) {
            return [Number(expression)];
        }
        const res = [];
        for (let i = 0; i < expression.length; i++) {
            const char = expression[i];
            if (char === '+' || char === '-' || char === '*') {
                // 递归计算左右两边的结果
                const left = dfs(expression.slice(0, i));
                const right = dfs(expression.slice(i + 1));
                // 计算结果
                for (let l of left) {
                    for (let r of right) {
                        if (char === '+') {
                            res.push(l + r);
                        } else if (char === '-') {
                            res.push(l - r);
                        } else {
                            res.push(l * r);
                        }
                    }
                }
            }
        }
        memo.set(expression, res);
        return res;
    }
    return dfs(expression);
};

// 动态规划解法
// 思路：dp[i][j]表示expression[i:j]的所有可能结果 []
// 状态转移方程：dp[i][j] = dp[i][k] op dp[k+1][j] op为运算符 i<=k<j
// 对比第一种解法，这种解法的时间复杂度更低，利用动态规划的思想，将重复计算的结果保存起来
var diffWaysToCompute = function(expression) {
    // 判断是否为数字
    const isNumber = (str) => {
        return !isNaN(Number(str));
    }

    const ops = [];
    for (let i = 0; i < expression.length;) {
        if (!isNumber(expression[i])) {
            ops.push(expression[i])
            i++;
        } else {
            let t = 0;
            while (i < expression.length && isNumber(expression[i])) {
                t = t * 10 + expression[i].charCodeAt() - '0'.charCodeAt();
                i++;
            }
            ops.push(t);
        }
    }
    // dp[i][j]表示expression[i:j]的所有可能结果 []
    const n = ops.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => []));
    for (let i = 0; i < ops.length; i++) {
        for (let j = 0; j < ops.length; j++) {
            dp[i][j] = [];
        }
    }
    for (let i = 0; i < ops.length; i += 2) {
        dp[i][i].push(ops[i]);
    }
    for(let len = 2; len <= n; len++) {
        for(let i=0;i < n-len;i++) {
            let j = i + len;

            //i=3, j=5, k=4
            for (let k = i + 1; k < j; k+=2) {
                // k=0,1
                for (let left of dp[i][k-1]) {
                    for (let right of dp[k+1][j]) {
                        if (ops[k] === '+') {
                            dp[i][j].push(left + right);
                        } else if (ops[k] === '-') {
                            dp[i][j].push(left - right);
                        } else {
                            dp[i][j].push(left * right);
                        }
                    }
                }
            }
        }
    }
    // 动态规划
    // console.log(dp)
    return dp[0][n - 1];
};



console.log(diffWaysToCompute("2-1-1")); // [0,2]
// ((2-1)-1) = 0
// (2-(1-1)) = 2
// dp数组:
// [
//   [ [ 2 ], [], [ 1 ], [], [ 2, 0 ] ],
//   [ [], [], [], [], [] ],
//   [ [], [], [ 1 ], [], [ 0 ] ],
//   [ [], [], [], [], [] ],
//   [ [], [], [], [], [ 1 ] ]
// ]

console.log(diffWaysToCompute("2*3-4*5")); // [-34,-14,-10,-10,10]
// dp数组：
// [
//   [ [ 2 ], [], [ 6 ], [], [ -2, 2 ], [], [ -34, -10, -14, -10, 10 ] ],
//   [ [], [], [], [], [], [], [] ],
//   [ [], [], [ 3 ], [], [ -1 ], [], [ -17, -5 ] ],
//   [ [], [], [], [], [], [], [] ],
//   [ [], [], [], [], [ 4 ],  [], [ 20 ] ],
//   [ [], [], [], [], [], [], [] ],
//   [ [], [], [], [], [], [], [ 5 ] ]
//  ]
// (2*(3-(4*5))) = -34
// ((2*3)-(4*5)) = -14
// ((2*(3-4))*5) = -10
// (2*((3-4)*5)) = -10
// (((2*3)-4)*5) = 10

console.log(diffWaysToCompute("11")); // [11]
