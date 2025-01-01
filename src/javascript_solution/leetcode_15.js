/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  if (nums.length < 3) {
    return res;
  }
  let map = new Map();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    let target = -nums[i];
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        if (!map.get(`${nums[i]}${nums[left]}${nums[right]}}}`)) {
          res.push([nums[i], nums[left], nums[right]]);
          map.set(`${nums[i]}${nums[left]}${nums[right]}}}`, true);
        }
        left++;
        right--;
      }
    }
  }
  return res;
};


// claude 优化版
// 优化步骤：
// 提前处理特殊情况
// 减少不必要的循环判断
// 优化内层循环的边界条件
var threeSum = function(nums) {
    // 提前处理特殊情况
    if (nums.length < 3) return [];
    
    nums.sort((a, b) => a - b);
    const result = [];
    const n = nums.length;
    
    // 优化：当第一个数大于0时，不可能有解
    for (let i = 0; i < n - 2 && nums[i] <= 0; i++) {
        // 跳过重复值
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        let left = i + 1;
        let right = n - 1;
        const target = -nums[i];
        
        while (left < right) {
            const sum = nums[left] + nums[right];
            if (sum === target) {
                result.push([nums[i], nums[left], nums[right]]);
                // 优化：直接移动到下一个不同的数
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
};
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []
console.log(threeSum([-2, 0, 0, 2, 2])); //  [[-2,0,2]]
