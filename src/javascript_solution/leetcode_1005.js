/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b)=>a-b)
    let count = 0
    while (count < k) {
      const min = nums[0]
      if (min !== 0) {
        nums[0] = -nums[0]
        count++
      } else {
        break
      }
      nums.sort((a,b)=>a-b)
    }
    return nums.reduce((a,b)=>a+b)
};
