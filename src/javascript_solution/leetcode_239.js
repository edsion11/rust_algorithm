/**
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
 * 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 * 返回 滑动窗口中的最大值 。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let left = 0;
    let right = left + k - 1;
    let max = Math.max(...nums.slice(left, right+1))
    left++;
    right++;
    const result = [max];
    while(right<nums.length){
        if(nums[right]>max){
           max = nums[right];
        }else {
            if(nums[right-k] === max){
                max = Math.max(...nums.slice(left, right+1))
            }
        }
        left++;
        right++;
        result.push(max);
    }   
    return result;
};

// 优先队列
var maxSlidingWindow = function(nums, k) {
    const deque = [];  // 存储下标
    const result = [];
    
    for(let i = 0; i < nums.length; i++) {
        // 移除超出窗口范围的元素
        while(deque.length && deque[0] <= i - k) {
            deque.shift();
        }
        
        // 保持队列单调递减
        while(deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        // 当窗口大小达到k时，记录最大值
        if(i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
};

// 优化版
var maxSlidingWindow = function(nums, k) {
    if (!nums || !nums.length) return [];
    if (k === 1) return nums;
    
    const result = [];
    const deque = []; // 存储下标，保持单调递减
    
    // 初始化第一个窗口
    for (let i = 0; i < k; i++) {
        while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }
        deque.push(i);
    }
    result.push(nums[deque[0]]);
    
    // 处理剩余窗口
    for (let i = k; i < nums.length; i++) {
        // 移除超出窗口范围的元素
        if (deque[0] <= i - k) deque.shift();
        
        // 维护单调递减队列
        while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }
        deque.push(i);
        result.push(nums[deque[0]]);
    }
    
    return result;
};

// test case
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // [3,3,5,5,6,7]