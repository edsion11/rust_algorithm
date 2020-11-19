/*
 * @lc app=leetcode.cn id=605 lang=rust
 *
 * [605] 种花问题
 */

// @lc code=start
impl Solution {
    pub fn can_place_flowers(flowerbed: Vec<i32>, n: i32) -> bool {
        let mut count:i32 = 0;
        let mut _i = 0;
        while _i<flowerbed.len(){
            if (_i==flowerbed.len()-1||flowerbed[_i+1]!=1)&&(_i==0||flowerbed[_i-1]!=1)&&flowerbed[_i]==0 {
                count+=1;
                _i+=2;
            }else{
                _i+=1;
            }
        }
        if count>=n{
            return true
        }
        return false
    }
}
// @lc code=end

