/**
 * 给你一个整数 n ，请你找出并返回第 n 个 丑数 。
 * 丑数 就是质因子只包含 2、3 和 5 的正整数。
 */

/**
 * @param {number} n
 * @return {number}
 */
// 动态规划
var nthUglyNumber = function(n) {
    const dp = new Array(n+1).fill(0);
    dp[1] = 1;
    // 丑数x可以表示为丑数y乘以2、3、5的结果
    // p2、p3、p5分别表示dp数组中的丑数乘以2、3、5的结果
    let p2 = 1, p3 = 1, p5 = 1;
    for(let i=2;i<=n;i++){
        // 丑数x可以表示为丑数y乘以2、3、5的结果，计算出最小的丑数
        // dp[p2], dp[p3], dp[p5]分别表示dp数组中的丑数乘以2、3、5的结果
        // p2,p3,p5分别表示dp数组中的丑数乘以2、3、5的结果的索引,从前往后遍历，重复的丑数只计算一次
        const num2 = dp[p2]*2, num3 = dp[p3]*3, num5 = dp[p5]*5;
        dp[i] = Math.min(num2, num3, num5);
        if(dp[i]===num2) p2++;
        if(dp[i]===num3) p3++;
        if(dp[i]===num5) p5++;
    }
    return dp[n];
};
// 最小堆
var nthUglyNumber = function(n) {
    const heap = [1];
    const factors = [2, 3, 5];
    const set = new Set([1]);
    for(let i=1;i<n;i++){
        const cur = heap.shift();
        for(let factor of factors){
            const next = cur*factor;
            if(!set.has(next)){
                set.add(next);
                heap.push(next);
            }
        }
        heap.sort((a,b)=>a-b);
    }
    return heap[0];
}
// 暴力解法
// var nthUglyNumber = function(n) {
//     let res = 0; // 丑数
//     let count = 0; // 计数
//     const isUgly = (num) => {
//         if(num<=0) return false;
//         while(num%2===0 ){
//             num = num/2;
//         }
//         while(num%3===0){
//             num = num/3;
//         }
//         while(num%5===0){
//             num = num/5;
//         }
//         return num===1;
//     }
//     while(count<n){
//         res++;
//         if(isUgly(res)){
//             count++;
//         }
//     }
//
//     return res;
// };


console.log(nthUglyNumber(10)) // 12
console.log(nthUglyNumber(4)) // 4
console.log(nthUglyNumber(12)) // 16
