/*
 * @lc app=leetcode.cn id=406 lang=rust
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
impl Solution {
    pub fn reconstruct_queue(people: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        if people.len()==0{
            return people
        }
        let mut people = people;
        people.sort_by(|a,b| {
            if a[0]==b[0]{
                return a[1].cmp(&b[1])
            }
            return b[0].cmp(&a[0])
        });
        let mut result = vec![];
        for p in  people{
            result.insert(p[1] as usize,p );
        }
        return result
    }
}
// @lc code=end

