/**
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 使用map存储每个元素出现的次数
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    let res = 0, max = 0;
    for (const [key, value] of map) {
        if(value > max){
            max = value;
            res = key;
        }
    }
    return res;
};

// 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
// 算法说明：
// 1. 遍历数组，使用count记录当前元素的出现次数，使用res记录当前出现次数最多的元素
// 2. 当count为0时，将res设置为当前元素，count设置为1
// 3. 当当前元素与res相同时，count+1，否则count-1
// 4. 最终返回res

var majorityElement = function(nums) {
    let count = 0, res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            res = nums[i];
        }
        count += res === nums[i] ? 1 : -1;
    }
    return res;
}

// test
console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2