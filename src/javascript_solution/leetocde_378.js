var { NaivePQ } = require("./priority_queue.js");
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 *  [ ] 1. 暴力搜索 time: O(n^2 log n) space: O(n^2)
 *  [*] 2. 归并排序(优先队列)time: O(k*log n) space: O(n)
 *  [*] 3. 二分查找 
 */

// [*] 2. 归并排序(优先队列)
var kthSmallest = function (matrix, k) {
  const pq = new NaivePQ((a, b) => a[0] - b[0]);
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    pq.add([matrix[i][0], i, 0]);
  }
  for (let i = 0; i < k - 1; i++) {
    let now = pq.remove();
    if (now[2] !== n - 1) {
      pq.add([matrix[now[1]][now[2] + 1], now[1], now[2] + 1]);
    }
  }
  return pq.remove()[0]
};

// [*] 3. 二分查找
/* var kthSmallest = function(matrix, k) {
   const check = (matrix, mid,k,n) =>{
       let i = n - 1;
       let j = 0;
       let num= 0;
       while(i >= 0 && j < n){
           if(matrix[i][j] <= mid){
                num += i + 1
                j++;
           }else{
               i--;
           }
       }
       return num >= k
   }
   let n = matrix.length;
   let left = matrix[0][0];
   let right = matrix[n - 1][n - 1];
   while(left < right){
        let mid = left + ((right-left) >> 1);
        if(check(matrix, mid, k, n)){
            right = mid;
        }else{
            left = mid + 1;
        }
   }
   return left
}; */

const matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  k = 8;
console.log(kthSmallest(matrix, k));
