/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const n = nums.length;
  const res = [];
  if (n < 4) {
    return res;
  }
  nums.sort((a,b)=>a-b)
  const sum = (a,b,c,d) => a + b + c + d;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const  s = sum(nums[i], nums[j], nums[left], nums[right]);
        if (s < target) {
          left++;
        } else if (s > target) {
          right--;
        } else {
          const key = `${nums[i]}${nums[j]}${nums[left]}${nums[right]}`;
          if (!map.has(key)) {
            res.push([nums[i], nums[j], nums[left], nums[right]]);
            map.set(key, true);
          }
          left++;
          right--;
        }
      }
    }
  }
  return res
};
// 76ms ,58MB

// test case
console.log(fourSum([1, 0, -1, 0, -2, 2], 0)) // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2,2,2,2,2], 8)) // [[2,2,2,2]]
