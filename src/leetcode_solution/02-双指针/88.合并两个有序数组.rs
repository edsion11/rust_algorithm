/*
 * @lc app=leetcode.cn id=88 lang=rust
 *
 * [88] 合并两个有序数组
 */

use std::collections::HashMap;

// @lc code=start
impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        let (mut p1, mut p2) = (m - 1, n - 1);
        let mut p = m + n - 1;
        while p1 >= 0 && p2 >= 0 {
            if nums1[p1 as usize] < nums2[p2 as usize] {
                nums1[p as usize] = nums2[p2 as usize];
                p2 -= 1
            } else {
                nums1[p as usize] = nums1[p1 as usize];
                p1 -= 1
            }
            p -= 1
        }
        for i in 0..p2 + 1 {
            nums1[i as usize] = nums2[i as usize]
        }
    }
}
// @lc code=end

