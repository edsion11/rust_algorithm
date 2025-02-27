/**
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 * 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums || nums.length === 0) return -1;
    let left = 0, right = nums.length - 1;
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        if(nums[mid]===target){
            return mid;
        }
        // mid->right 有序
        // if (nums[left] <= nums[mid]) {
        //     if (target >= nums[left] && target < nums[mid]) {
        //         right = mid - 1;
        //     } else {
        //         left = mid + 1;
        //     }
        // } else {
        //     if (target > nums[mid] && target <= nums[right]) {
        //         left = mid + 1;
        //     } else {
        //         right = mid - 1;
        //     }
        // }
        if(nums[mid] <= nums[right]){
            if(target > nums[mid] && target <= nums[right]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }else{
            if(target >= nums[left] && target < nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }
    }
    return -1;
};

// 时间复杂度：O(logn)
// 空间复杂度：O(1)
// test
console.log(search([4,5,6,7,0,1,2], 0)); // 4
console.log(search([4,5,6,7,0,1,2], 3)); // -1