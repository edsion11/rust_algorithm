/**
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组
 * （该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 * 测试用例的答案是一个 32-位 整数。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    // [2, 3, -2, 4, -5]
  let max = nums[0];
  let min = nums[0];
  let prevMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let temp = max;
    max = Math.max(max * nums[i], min * nums[i], nums[i]);
    min = Math.min(temp * nums[i], min * nums[i], nums[i]);
    if(max>=prevMax){
        prevMax = max
    }
  }
  return prevMax;
};

// 空间复杂度O(n)
// var maxProduct = function(nums) {
//     const maxDp = Array.from(nums);
//     const minDp = Array.from(nums);
//     for(let i = 1; i < nums.length; i++) {
//         maxDp[i] = Math.max(maxDp[i], maxDp[i-1]*nums[i], minDp[i-1]*nums[i]);
//         minDp[i] = Math.min(minDp[i], maxDp[i-1]*nums[i], minDp[i-1]*nums[i]);
//     }
//     return Math.max(maxDp)
// };

// js超时,c++可以通过
// var maxProduct = function(nums) {
//     let max = nums[0]
//     for(let i = 0;i < nums.length;i++){
//         let  prev = nums[i]
//         if(prev >= max){
//             max = prev
//         }
//         for(j = i+1; j < nums.length;j++){
//             prev = prev*nums[j]
//             if(prev >= max){
//                 max = prev
//             }
//         }
//     }
//     return max
// };

console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([2, 3, -2, 4, -5])); // 240
console.log(maxProduct([-2, 0, -1])); // 0

