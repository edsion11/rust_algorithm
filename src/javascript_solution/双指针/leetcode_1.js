/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let left = 0;
  right = nums.length - 1;
  const sorts = Array.from(nums).sort((a, b) => a - b);
  while (left < right) {
    let sum = sorts[left] + sorts[right];
    if (sum === target) {
        const resL = nums.indexOf(sorts[left]);
        const resR = nums.lastIndexOf(sorts[right]);
      return [resL, resR];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [left, right];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
