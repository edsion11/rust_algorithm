/**
 * 给定一个整数数组 nums，
 * 将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    /**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    if(k<=n){
        const prev = nums.splice(n-k)
        nums.unshift(...prev)
    }else{
        let k1 = k%n
        const prev = nums.splice(n-k1)
        nums.unshift(...prev)
    }
    return nums
};

// test case
console.log(rotate([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2)); // [3,99,-1,-100]
console.log(rotate([1,2], 5)); // [2,1]