/**
 * 给你一个长度为 n 的整数数组 nums ，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。
 * 我们是这样定义一个非递减数列的： 对于数组中任意的 i (0 <= i <= n-2)，总满足 nums[i] <= nums[i + 1]。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    const n = nums.length;
    let cnt = 0;
    for (let i = 0; i < n - 1; ++i) {
        const x = nums[i], y = nums[i + 1];
        if (x > y) {
            cnt++;
            if (cnt > 1) {
                return false;
            }
            if (i > 0 && y < nums[i - 1]) {
                nums[i + 1] = x;
            }
        }
    }
    return true;
};

var checkPossibility = function (nums) {
    if(nums.length<=2) return true
    let flag = true
    for(let i = 0;i<nums.length-1;i++){
        if(!(nums[i]<=nums[i+1])){
            if(flag){
                flag = false
                if(i===0){
                    nums[i] = nums[i+1]
                }else{
                    if(nums[i-1]<=nums[i+1]){
                        nums[i] = nums[i-1]
                    }else{
                        nums[i+1] = nums[i]
                    }
                }
            }else{
                return false
            }
        }
    }
    return true
}

// 尝试滑动窗口的思路
var checkPossibility = function(nums) {
    if (nums.length <= 2) return true;
    let modified = false;
    // 处理第一个元素的特殊情况
    if (nums[0] > nums[1]) {
        nums[0] = nums[1];
        modified = true;
    }
    
    // 使用长度为3的滑动窗口
    for (let i = 1; i < nums.length - 1; i++) {
        // 当前窗口: [nums[i-1], nums[i], nums[i+1]]
        if (nums[i] > nums[i + 1]) {
            if (modified) return false;
            
            // 需要修改时，选择更优的修改方案
            if (nums[i - 1] <= nums[i + 1]) {
                nums[i] = nums[i + 1]; // 降低当前值
            } else {
                nums[i + 1] = nums[i]; // 提升后一个值
            }
            modified = true;
        }
    }
    
    return true;
};


// test
console.log(checkPossibility([4, 2, 3]));
console.log(checkPossibility([4, 2, 1]));
console.log(checkPossibility([3, 4, 2, 3]));
console.log(checkPossibility([5, 7, 1, 8]));
