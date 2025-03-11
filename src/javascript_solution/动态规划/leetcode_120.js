/**
 * 给定一个三角形 triangle ，找出自顶向下的最小路径和。
 * 每一步只能移动到下一行中相邻的结点上。相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
 * 也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。
 */


/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    const n = triangle.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    // 状态转移方程： dp[i][j] = dp[i-1][j-1]+triangle[i][j] 或 dp[i-1][j]+triangle[i][j] 的最小值
    dp[0][0] = triangle[0][0];
    for (let i = 1; i < n; i++) {
        for(let j=0;j<=i;j++){
            if(j===0) {
                dp[i][j] = dp[i - 1][j] + triangle[i][j];
                continue
            }
            if(j===i){
                dp[i][j] = dp[i - 1][j-1] + triangle[i][j];
                continue
            }
            dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
        }
    }
    return Math.min(...dp[n-1])
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])); // 11
