/**
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 返回容器可以储存的最大水量。
 * 说明：你不能倾斜容器。
 * 
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while(left<right){
        let low = Math.min(height[left], height[right]);
        const area = (right - left) * low;
        if(area > max){
            max = area;
        }
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return max
};

// cla
var maxArea = function(height) {
    // 边界条件
    if (height.length < 2) return 0;
    
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;
    
    while (left < right) {
        // 计算一次高度，避免重复计算
        const leftHeight = height[left];
        const rightHeight = height[right];
        const width = right - left;
        
        // 使用Math.min避免额外的判断
        maxWater = Math.max(maxWater, Math.min(leftHeight, rightHeight) * width);
        
        // 优化移动策略：始终移动较短的一边
        if (leftHeight < rightHeight) {
            // 跳过不可能产生更大面积的高度
            while (left < right && height[left] <= leftHeight) left++;
        } else {
            while (left < right && height[right] <= rightHeight) right--;
        }
    }
    
    return maxWater;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1