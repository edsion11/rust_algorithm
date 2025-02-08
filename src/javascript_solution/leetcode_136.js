/**
 * 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用线性时间复杂度和常量额外空间的解法
// 位运算：异或运算
var singleNumber = function(nums) {
    let res = 0;
    res = nums.reduce((prev,cur)=>{
        return prev^cur
    },0)
    return res
};

// 2.排序
var singleNumber = function(nums) {
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i+=2){
        if(nums[i]!==nums[i+1]){
            return nums[i]
        }
    }
    return nums[nums.length-1]
}

// test
console.log(singleNumber([2,2,1])); // 1