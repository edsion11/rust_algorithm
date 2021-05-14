/*
 * @lc app=leetcode.cn id=167 lang=rust
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
impl Solution {
    pub fn two_sum(numbers: Vec<i32>, target: i32) -> Vec<i32> {
        let mut left = 0;
        let mut right = numbers.len()-1;
        while left<right{
            let sum = numbers[left]+numbers[right];
            if sum==target{
                return vec![left as i32+1,right as i32+1]
            }else{
                if sum<target{
                    left+=1;
                }else{
                    right-=1;
                }
            }
        }
        vec![]
    }
}
// @lc code=end

