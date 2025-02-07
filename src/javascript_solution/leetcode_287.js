/**
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
 * 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
 * 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const num2  = [...nums].sort((a, b) => a - b);
    for (let i = 0; i < num2.length; i++) {
        if (num2[i] === num2[i + 1]) {
            return num2[i];
        }
    }
    return -1;
};

// 这道题有一个巧妙的解法，叫做"Floyd's Tortoise and Hare"（快慢指针或称龟兔赛跑算法），可以在O(n)时间复杂度和O(1)空间复杂度内解决。
//原理是将数组值看作链表的下一个索引，由于有重复数字，必然形成环，问题就转化为找到环的入口节点。
// 以下是优化后的解法：

var findDuplicate = function(nums) {
    // 第一阶段：找到相遇点
    let slow = nums[0];
    let fast = nums[0];
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    
    // 第二阶段：找到环的入口
    let ptr1 = nums[0];
    let ptr2 = slow;
    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }
    
    return ptr1;
};
// 算法说明：
// 1. **第一阶段**：使用快慢指针，慢指针每次移动一步，快指针每次移动两步，直到它们相遇
// 2. **第二阶段**：将一个指针重置到起点，两个指针每次都移动一步，它们相遇的点就是重复的数字

// 这个算法的特点：
// - 时间复杂度：O(n)
// - 空间复杂度：O(1)
// - 不会修改原数组
// - 适用于给定条件下的所有情况

// 相比原来的排序解法（时间复杂度O(nlogn)），这个解法不仅更快，而且满足题目要求的不修改原数组的条件。


// 二分法
// 二分法的思路是先猜一个数（有效范围 [left, right]里的中间数 mid），然后统计原始数组中小于等于这个中间数的元素的个数 cnt，
// 如果 cnt 严格大于 mid，根据抽屉原理，重复元素就在区间 [left, mid] 里；否则在区间 [mid + 1, right] 里。
// 以下是二分法的解法：
var findDuplicate = function(nums) {
    let left = 1;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        
        // 计算数组中小于等于mid的数字个数
        let count = 0;
        for (const num of nums) {
            if (num <= mid) {
                count++;
            }
        }
        
        // 如果count大于mid，说明重复的数在左半部分
        if (count > mid) {
            right = mid;
        } else {
            // 否则在右半部分
            left = mid + 1;
        }
    }
    
    return left;
}


// test
console.log(findDuplicate([1,3,4,2,2])); // 2