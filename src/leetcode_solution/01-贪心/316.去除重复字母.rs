/*
 * @lc app=leetcode.cn id=316 lang=rust
 *
 * [316] 去除重复字母
 */

// @lc code=start
impl Solution {
    pub fn remove_duplicate_letters(s: String) -> String {
        let mut counts: [usize; 26] = [0; 26];
        for &b in s.as_bytes() {
            counts[(b - b'a') as usize] += 1;
        }
        let mut v: Vec<char> = Vec::with_capacity(26);
        let mut exists: [bool; 26] = [false; 26];
        for &b in s.as_bytes() {
            let i = (b - b'a') as usize;
            counts[i] -= 1;
            if exists[i] {
                continue;
            }
            while let Some(&last) = v.last() {
                let j = (last as u8 - b'a') as usize;
                if b < last as u8 && counts[j] > 0 {
                    exists[j] = false;
                    v.pop();
                } else {
                    break;
                }
            }
            v.push(b as char);
            exists[i] = true;
        }
        v.iter().collect()
    }
}
// @lc code=end

