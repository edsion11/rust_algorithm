/**
* 超级丑数 是一个正整数，并满足其所有质因数都出现在质数数组 primes 中。
* 给你一个整数 n 和一个整数数组 primes ，返回第 n 个 超级丑数 。
* 题目数据保证第 n 个 超级丑数 在 32-bit 带符号整数范围内。
*/

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
// 动态规划
var nthSuperUglyNumber = function(n, primes) {
  const dp = new Array(n+1).fill(0);
  dp[1] = 1;
  const pointers = new Array(primes.length).fill(1);
  for(let i=2;i<=n;i++){
      const nums = primes.map((prime, index) => dp[pointers[index]]*prime);
      dp[i] = Math.min(...nums);
      nums.forEach((num, index) => {
          if(dp[i]===num) pointers[index]++;
      });
  }
  return dp[n];
};

// 最小堆 超时
var nthSuperUglyNumber = function (n, primes) {
  const heap = [1]
  const set = new Set([1])
  for (let i = 1; i < n; i++) {
    const cur = heap.shift()
    for (let prime of primes) {
      const next = cur * prime
      if (!set.has(next)) {
        set.add(next)
        heap.push(next)
      }
    }
    heap.sort((a, b) => a - b)
  }
  return heap[0]
}


console.log(nthSuperUglyNumber(12,[2,7,13,19])) // 32
console.log(nthSuperUglyNumber(1,[2,3,5])) // 1
