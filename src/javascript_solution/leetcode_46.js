/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    // 回溯思路：
    // 1. 选择列表：nums 中不存在于 arr 的那些元素
    const backtrack = (arr) => {
        if(arr.length === nums.length) {
            return res.push([...arr]);
        }
        for(let num of nums) {
            if(arr.includes(num)) {
                continue;
            }
            arr.push(num);
            backtrack(arr);
            arr.pop();
        }
    };
    backtrack([]);
    return res;
};

// 1.优化，使用 visited 数组记录已经访问过的元素
var permute = function(nums) {
    const res = [];
    const visited = new Array(nums.length).fill(false);
    
    const backtrack = (path) => {
        if(path.length === nums.length) {
            res.push([...path]);
            return;
        }
        
        for(let i = 0; i < nums.length; i++) {
            if(visited[i]) continue;
            
            visited[i] = true;
            path.push(nums[i]);
            backtrack(path);
            path.pop();
            visited[i] = false;
        }
    }
    
    backtrack([]);
    return res;
};

// 2. 优化，使用 swap 交换元素
// 另一种优化方案：通过交换元素实现
var permute2 = function(nums) {
    const res = [];
    
    const swap = (i, j) => {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    const backtrack = (start) => {
        if(start === nums.length) {
            res.push([...nums]);
            return;
        }
        
        for(let i = start; i < nums.length; i++) {
            swap(start, i);
            backtrack(start + 1);
            swap(start, i); // 回溯还原
        }
    }
    
    backtrack(0);
    return res;
};

// test
console.log(permute([1,2,3])) // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]