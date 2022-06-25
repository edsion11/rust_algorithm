/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    if(s.length<2) return 0
    let res = 0
    var dp  = new Array(s.length).fill(0)
    for(let i=1;i<s.length;i++){
        if(s[i]===')'){
            if(s[i-1]==='('){
                dp[i] = i-2>=0?dp[i-2]+2:2
            }else if(s[i-dp[i-1]-1]==='('){
                dp[i] = dp[i-1]+(i-dp[i-1]>=2?dp[i-dp[i-1]-2]:0)+2
            }
            res = Math.max(dp[i],res)
        }
    }
    return res
};
// @lc code=end

