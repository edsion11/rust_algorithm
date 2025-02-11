/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的
 * 子集（幂集）。解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    // 思路： 子集可以表示为原属组的每个元素选或不选
    // 如： [1, 2, 3] 的子集可以表示为 [1, 2, 3]对应的二进制数的每一位即111
    // 从0到2^n-1，每个数对应一个子集
    const dfs = (start, arr) => {
        if(start === nums.length) {
            res.push(arr);
            return;
        }
        arr.push(nums[start]);
        dfs(start + 1, [...arr]);
        arr.pop();
        dfs(start + 1, [...arr]);
    }
    dfs(0, [])
    return res;
};

// 优化， 位运算
var subsets = function(nums) {
    const res = [];
    const n = nums.length;
    // 1<<n 表示2的n次方
    for(let i = 0; i < (1 << n); i++) {
        const arr = [];
        // 从0到2^n-1，每个数对应一个子集
        for(let j = 0; j < n; j++) {
            // 判断i的第j位是否为1
            if(i & (1 << j)) {
                // 如果为1，表示nums[j]在子集中
                arr.push(nums[j]);
            }
        }
        res.push(arr);
    }
    return res;
};


// test
console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]