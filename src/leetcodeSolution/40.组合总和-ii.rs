/*
 * @lc app=leetcode.cn id=40 lang=rust
 *
 * [40] 组合总和 II
 */

// @lc code=start
use std::collections::VecDeque;

impl Solution {
    pub fn combination_sum2(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        fn backtrace(path: &mut Vec<i32>, candidates: &mut Vec<i32>,
            idx: usize, sum: i32, target: i32, answer: &mut std::collections::HashSet<Vec<i32>>) {
            if sum==target {
                answer.insert(path.clone());
                return;
            }
            for i in idx..candidates.len() {
                if sum+ candidates[i] <= target {
                    path.push(candidates[i]);
                    backtrace(path, candidates,i+1, sum+candidates[i],target,answer);
                    path.pop();
                }
            }
        }
        let mut answer = std::collections::HashSet::new();
        let mut candidates = candidates;
        candidates.sort_unstable();
        backtrace(&mut Vec::new(),&mut candidates,0,0,target,&mut answer);
        answer.into_iter().collect()
    }
}
// @lc code=end

