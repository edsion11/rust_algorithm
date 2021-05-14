/*
 * @lc app=leetcode.cn id=135 lang=rust
 *
 * [135] 分发糖果
 */

// @lc code=start
impl Solution {
    pub fn candy(ratings: Vec<i32>) -> i32 {
        let mut candies = Vec::new();
        let ratings = &ratings;
        for _item in ratings{
            candies.push(1);
        }
        let mut left = 1;
        let mut right = candies.len()-1;
        while left<=candies.len()-1 {
            if ratings[left]>ratings[left-1] {
                candies[left]=candies[left-1]+1;
            }
            left+=1;
        }
        let  mut result = 0;
        while right>0{
            if ratings[right-1]>ratings[right] {
                if candies[right-1]<candies[right]+1{
                    candies[right-1] = candies[right]+1
                }else{ 
                    candies[right-1] = candies[right-1]
                }
            }
            right=right-1;
        }
        for item in &candies{
            result+=item
        }
        result
    }
}
// @lc code=end

