/*
 * @lc app=leetcode.cn id=55 lang=rust
 *
 * [55] 跳跃游戏
 */

// @lc code=start
impl Solution {
    pub fn can_jump(nums: Vec<i32>) -> bool {
        let mut lastValidIndex:i32 = (nums.len()-1) as i32;
        let mut right:i32 = (&nums.len()-2) as i32;
        while right>=0{
            if right + nums[right as usize]>=lastValidIndex {
                lastValidIndex = right
            }
            right = right - 1;
        }
        return lastValidIndex==0
    }
}
// @lc code=end

