/**
 * 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const visited = new Set();
  const queue = [0];

  while (queue.length) {
    const cur = queue.shift();
    // Check if we can reach the end from current position
    if (cur + nums[cur] >= nums.length - 1) return true;
    // Add all possible jumps to queue
    for (let i = 1; i <= nums[cur]; i++) {
      const nextPos = cur + i;
      if (!visited.has(nextPos) && nextPos < nums.length) {
        visited.add(nextPos);
        queue.push(nextPos);
      }
    }
  }

  return false;
};

var canJump = function (nums) {
    let max = 0
    for(let i=0;i<=max;i++){
        if(i+nums[i]>max){
            max = i+nums[i]
        }
        if(max>=nums.length-1){
            return true
        }
    }
    return false
}
