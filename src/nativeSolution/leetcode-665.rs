pub fn check_possibility(nums: Vec<i32>) -> bool {
    if nums.len()<=2 {
        return true
    }
    let mut nums = nums;
    let mut flag:bool = true;
    for _i in 0..nums.len()-1{
        if nums[_i]<=nums[_i+1]{
            continue
        }else{
            if flag == true{
                flag = false;
                if _i==0{
                    nums[_i] = nums[_i+1];
                }else{
                    if nums[_i-1]<=nums[_i+1]{
                        nums[_i] = nums[_i-1];
                    }else{
                        nums[_i+1] = nums[_i]
                    }
                }
            }else{
                return false
            }
        }
    }
    return true
}