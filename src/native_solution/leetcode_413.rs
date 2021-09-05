#[allow(dead_code)]
pub fn number_of_arithmetic_slices(nums: Vec<i32>) -> i32 {
    if nums.len()<=2 {
        return 0;
    }
    let (mut sum, mut pre) = (0,0);
    for _i in 2..nums.len(){
        if nums[_i]-nums[_i-1]==nums[_i-1]-nums[_i-2]{
            pre = pre+1;
            sum = sum + pre;
        }else{
            pre = 0;
        }
    }
    sum
}
