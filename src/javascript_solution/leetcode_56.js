/**
 * 
 * 以数组 intervals 表示若干个区间的集合，
 * 其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 暴力解法
// var merge = function(intervals) {
//     intervals.sort((a,b)=>a[0]-b[0]);
//     const res = [];
//     for(let i=0;i<intervals.length;i++){
//         const start = intervals[i][0];
//         let end = intervals[i][1];
//         // 情况1：区间完全包含
//         // 情况2：区间部分重叠，
//         for(let j= i+1;j<intervals.length;j++){
//             if(intervals[j][0]<=end){
//                 i++;
//                 if(intervals[j][1]>end){
//                     end = intervals[j][1];
//                 }
//             }
//         }
//         res.push([start,end]);
//     }
//     return res;
// };
// 思考：如何优化暴力解法？
// 1.数组排序后，只需要比较相邻的两个区间是否重叠，如果重叠则合并区间
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    let start = intervals[0][0];
    let end = intervals[0][1];
    const res = [];
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0]<=end){
            end = Math.max(end,intervals[i][1]);    
        }else{
            res.push([start,end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }
    }
    res.push([start,end]);
    return res;
}

// test case
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // [[1,5]]
console.log(merge([[1,4],[2,3]])); // [[1,4]]