pub fn can_jump(nums: Vec<i32>) -> bool {
    let mut lastValidIndex:i32 = (nums.len()-1) as i32;
    let mut right:i32 = (&nums.len()-2) as i32;
    while right>=0{
        if right + nums[right as usize]>=lastValidIndex {
            lastValidIndex = right
        }
        right = right - 1;
    }
    return lastValidIndex==0
}