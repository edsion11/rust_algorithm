/**
* 给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
* 每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:
* 0 <= j <= nums[i]
* i + j < n
* 返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  const n = nums.length;
  // dp[i] 表示到达 i 的最小跳跃次数
  // dp[i] = min(0..j) dp[j] + 1, j + nums[j] >= i
  const dp = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    let res = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < i; j++) {
      if (j + nums[j] >= i) {
        res = Math.min(res, dp[j] + 1);
      }
    }
    dp[i] = res;
  }
  return dp[n - 1];
};


// DFS
var jump = function(nums) {
  if (nums.length <= 1) return 0;
    
  let minJumps = Infinity;
  // index代表当前下表，jumps代表已经跳的次数
  const dfs = (index, jumps) => {
      // 到达终点
      if (index >= nums.length - 1) {
          minJumps = Math.min(minJumps, jumps);
          return;
      }
      // 剪枝：如果当前跳跃次数已经大于等于已知最小值，停止搜索
      if (jumps >= minJumps) return;
      
      // 尝试所有可能的跳跃距离
      for (let i = nums[index]; i >= 1; i--) {
          dfs(index + i, jumps + 1);
      }
  };
  
  dfs(0, 0);
  return minJumps;
}

// 贪心算法
var jump = function(nums){
  if(nums.length<=1) return 0
  let max = 0;
  let end = 0;
  let res = 0
  for(let i=0;i<nums.length-1;i++){
    max = Math.max(max, i+nums[i])
    if(i===end){
      end = max
      res++
    }
  }
  return res
}


console.log(jump([2,3,1,1,4])) // 2
console.log(jump([2,3,0,1,4])) // 2
