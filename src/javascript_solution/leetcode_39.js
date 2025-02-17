/**
 * 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，
 * 找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。
 * 你可以按 任意顺序 返回这些组合。
 * candidates 中的 同一个 数字可以 无限制重复被选取 。
 * 如果至少一个数字的被选数量不同，则两种组合是不同的。 
 * 对于给定的输入，保证和为 target 的不同组合数少于 150 个。
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 342ms, 70MB
var combinationSum = function(candidates, target) {
    const res = []
    const backtrack = (result, sum)=>{
        if(sum>=target){
            if(sum===target){
                res.push(result)
            }
            return
        }
        for(let num of candidates){
            backtrack([...result, num], sum+num)
        }
    }
    backtrack([], 0)
    const res1 = new Set(res.map(item=>item.sort().join(',')))
    const res2 = []
    for(let setRes of res1){
        res2.push(setRes.split(',').map(item=>Number(item)))
    }
    return res2
};

// 回溯算法
// 10ms, 58MB
var combinationSum = function(candidates, target) {
    const res = []
    candidates.sort((a,b)=>a-b)
    const backtrack = (result, sum, index)=>{
        if(sum>=target){
            if(sum===target){
                res.push(result)
            }
            return
        }
        for(let i = index; i<candidates.length; i++){
            backtrack([...result, candidates[i]], sum+candidates[i], i)
        }
    }
    backtrack([], 0, 0)
    return res
};

var combinationSum = function(candidates, target) {
    const res = [];
    
    // 优化1：先排序，便于剪枝
    candidates.sort((a, b) => a - b);
    
    /**
     * @param {number[]} path 当前路径
     * @param {number} target 剩余目标值
     * @param {number} start 开始搜索的位置
     */
    const backtrack = (path, target, start) => {
        // 找到一个解
        if (target === 0) {
            res.push([...path]);
            return;
        }
        
        // 从start开始遍历，避免重复组合
        for (let i = start; i < candidates.length; i++) {
            // 剪枝：如果当前数字已经大于target，后面更大的数字就不用看了
            if (candidates[i] > target) break;
            
            // 做选择
            path.push(candidates[i]);
            // 递归，同一个数字可以重复使用，所以传入i而不是i+1
            backtrack(path, target - candidates[i], i);
            // 撤销选择
            path.pop();
        }
    };
    
    backtrack([], target, 0);
    return res;
};

// test
console.log(combinationSum([2,3,6,7], 7)) // [[2,2,3],[7]]