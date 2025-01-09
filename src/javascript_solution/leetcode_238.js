/** 
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。
 *题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。
 *请 不要使用除法，且在 O(n) 时间复杂度内完成此题。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const prevSelf = [nums[0]];
    const reverseSelf = [nums[n-1]];
    let k = 1
    while (k < n) {
        prevSelf.push(prevSelf[k-1] * nums[k]);
        reverseSelf.unshift(reverseSelf[0] * nums[n-1-k]);
        k++;
    }
    const res = [];
    for(let i=0; i<n; i++) {
        if(i===0) {
            res.push(reverseSelf[1]);
        }else if(i===n-1) {
            res.push(prevSelf[n-2]);

        }else {
            res.push(prevSelf[i-1]* reverseSelf[i+1]);
        }
    }
    return res;
};

// 优化空间复杂度
var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = new Array(n);
    // 计算左侧乘积
    res[0] = 1;
    for (let i = 1; i < n; i++) {
        res[i] = res[i-1] * nums[i-1];
    }
    // 计算右侧乘积并得到结果
    let right = 1;
    for (let i = n-1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }
    
    return res;
}

// 双指针
var productExceptSelf = function(nums) {
    const n = nums.length;
    const res = Array(n).fill(1);
    
    let left = 1, right = 1;
    let i = 0, j = n - 1;
    
    while (i < n) {
        res[i] *= left;
        res[j] *= right;
        left *= nums[i];
        right *= nums[j];
        i++;
        j--;
    }
    
    return res;
};

// test case
console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]