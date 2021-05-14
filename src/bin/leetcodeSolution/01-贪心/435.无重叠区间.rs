/*
 * @lc app=leetcode.cn id=435 lang=rust
 *
 * [435] 无重叠区间
 */

// @lc code=start
impl Solution {
    pub fn erase_overlap_intervals(intervals: Vec<Vec<i32>>) -> i32 {
        if intervals.len()==0{
            return 0
        }
        let len:usize = intervals.len();
        let mut intervals = intervals;
        intervals.sort_by(|a,b| a[1].cmp(&b[1]));
        let mut total = 0;
        let mut prev = intervals[0][1];
        let _i =0;
        for _i in 1..len{
            if intervals[_i][0]-prev<0{
                total+=1;
            }else{
                prev = intervals[_i][1];
            }
        }
        return total
    }
}
// @lc code=end

