/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组
 * 是数组中的一个连续部分。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// ans = max(ans[i]*nums[i], Math.max())
var maxSubArray = function(nums) {
    let max = nums[0];
    for(let i=0;i<nums.length;i++){
        let sum = 0;
        for(j = i; j<nums.length;j++){
            sum+=nums[j];
            max = Math.max(max, sum);
        }
    }
    return max;
}

// ==> 优化为前缀和
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum = Math.max(sum+nums[i], nums[i]);
        max = Math.max(max, sum);
    }
    return max;
}


// test case
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5,4,-1,7,8])); // 23


