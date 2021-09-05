#[allow(dead_code)]
pub fn can_jump(nums: Vec<i32>) -> bool {
    let mut last_valid_index:i32 = (nums.len()-1) as i32;
    let mut right:i32 = (&nums.len()-2) as i32;
    while right>=0{
        if right + nums[right as usize]>=last_valid_index {
            last_valid_index = right
        }
        right = right - 1;
    }
    return last_valid_index==0
}