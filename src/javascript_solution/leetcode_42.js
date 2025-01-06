/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
*/
// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let res = 0;
  for (let i = 1; i < height.length-1; i++) {
    let left = i - 1;
    let right = i + 1;
    let cur = height[i];
    let bound = height[i];
    while (left >= 0 && right <= height.length - 1) {
      if (height[left] > cur && height[right] > cur && height[left] > bound && height[right] > bound) {
        let h = Math.min(height[left], height[right]) - bound
        let w = right - left - 1
        console.log('----', left, right, bound, h, w)
        res += h*w;
        bound = Math.min(height[left], height[right]);
      }
      left--;
      right++;
    }
  }
  return res;
};



// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // 6
console.log(trap([4,2,0,3,2,5])) // 9
