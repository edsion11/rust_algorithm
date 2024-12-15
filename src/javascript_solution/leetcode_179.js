/**
 * 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
 * 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => {
    return Number(`${b}${a}`) - Number(`${a}${b}`);
  });
  if (nums.length > 1 && nums[0] === 0) {
    while(nums[0]===0&&nums.length>1){
        nums.shift();
    }
  }
  return nums.join("");
};

console.log(largestNumber([10, 2])); // "210"
console.log(largestNumber([3, 30, 34, 5, 9])); // "9534330"
console.log(largestNumber([1])); // "1"
console.log(largestNumber([0, 0])); // "0"
console.log(largestNumber([0])); // "0"
console.log(largestNumber([0, 0, 0,0])); // "0"
