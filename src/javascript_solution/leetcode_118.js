/**
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 */


/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const res = new Array(numRows).fill(0)
    for(let i=0;i<numRows;i++){
        res[i] = new Array(i+1).fill(1)
    }
    for(let i=0;i<numRows;i++){
        for(let j=0;j<=i;j++){
            if(j>0 && j<i){
                res[i][j] = res[i-1][j-1] + res[i-1][j]
            }
        }
    }
    return res
};

console.log(generate(5)) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]];
