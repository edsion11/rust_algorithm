pub fn leetcode135() -> i32 {
    const CANDY:[i32;3] = [1,0,2];
    const L:usize = CANDY.len();
    let mut candies = [1;L];
    let mut left = 0;
    let mut right = candies.len()-1;
    while left<candies.len()-1 {
        if CANDY[left+1]>CANDY[left] {
            candies[left]+=1;
        }
        left+=1;
    }
    let  mut result = 0;
    while right>0{
        if CANDY[right-1]>CANDY[right]&&candies[right-1]<=candies[right] {
            if CANDY[right-1]>CANDY[right]{
                candies[right-1] = candies[right-1]+1
            }else{ 
                candies[right-1] = candies[right]+1
            }
        }
        right=right-1;
    }
    for item in &candies{
        result+=item
    }
    result
}