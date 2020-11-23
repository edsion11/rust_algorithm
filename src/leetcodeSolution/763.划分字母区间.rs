/*
 * @lc app=leetcode.cn id=763 lang=rust
 *
 * [763] 划分字母区间
 */

// @lc code=start
impl Solution {
    pub fn partition_labels(s: String) -> Vec<i32> {
        let mut map = [0;26];
        for (i,c) in s.bytes().enumerate(){
            map[(c-97) as usize] = i;
        }
        let mut result = vec![];
        let (mut l, mut r) = (0, 0);
        for (i, c) in s.bytes().enumerate() {
            r = map[(c - b'a') as usize].max(r);
            if i == r {
                result.push((r + 1 - l) as i32);
                l = i + 1
            }
        }
        return result
    }
}
// @lc code=end

