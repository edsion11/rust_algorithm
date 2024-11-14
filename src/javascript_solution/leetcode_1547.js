/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {
    // 将0和n加入cuts数组中，并排序
    cuts.push(0)
    cuts.push(n)
    cuts.sort((a,b)=>a-b)
    const m = cuts.length
    const f = Array.from({ length: m }, () => Array(m))
    const dfs = (i,j)=>{
        // 两个断点相邻，无法切割，返回0
        if(i+1 === j){
            return 0
        }
        // 如果已经计算过，直接返回结果
        if(f[i][j]){
            return f[i][j]
        }
        // 初始化结果为无穷大
        let res = Infinity
        // 从i+1到j-1的位置进行切割，取最小值
        for(let k = i + 1;k < j;k++){
            // 递归计算左右两边的最小值
            res = Math.min(res, dfs(i,k)+dfs(k,j))
        }
        // 返回结果，同时加上当前切割的代价，并记录到f数组中。
        return f[i][j] = res+cuts[j]-cuts[i]
    }
    // 从0到m-1的位置进行切割，得到最终结果
    return dfs(0,m-1)
};

const n = 7;
const cuts = [1,3,4,5];
console.log(minCost(n, cuts)) // 16
