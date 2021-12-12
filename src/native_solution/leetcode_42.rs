pub fn trap(height: Vec<i32>) -> i32 {
    let mut result = 0;
    let mut max = Vec::new();
    for _i in 1..height.len() - 1 {
        let mut left = _i as i32 - 1;
        let mut right = _i as i32 + 1;
        let mut left_max = height[_i];
        let mut right_max = height[_i];
        while left >= 0 || right < height.len() as i32 {
            if let Some(value) = height.get(left as usize) {
                if *value >= left_max {
                    left_max = height[left as usize];
                }
            }
            if let Some(value) = height.get(right as usize) {
                if *value >= right_max {
                    right_max = height[right as usize];
                }
            }
            left -= 1;
            right += 1;
        }
        max.push((left_max.min(right_max)) - height[_i])
    }
    for item in max {
        result += item;
    }
    return result;
}

pub fn trap_dp(height: Vec<i32>) -> i32 {
    let len = height.len();
    let mut left_max: Vec<i32> = vec![height[0]; len];
    let mut right_max: Vec<i32> = vec![height[len - 1]; len];
    let mut result = 0;
    for _i in 1..len {
        left_max[_i] = left_max[_i - 1].max(height[_i])
    }
    for _i in (0..len-1).rev() {
        right_max[_i] = right_max[_i + 1].max(height[_i])
    }
    let mut max_array: Vec<i32> = vec![0; len];
    for _i in 0..len - 1 {
        max_array[_i] = left_max[_i].min(right_max[_i]) - height[_i]
    }
    for item in max_array {
        result += item
    }
    result
}

pub fn trap_two_pointer(height: Vec<i32>) -> i32{
    let mut res = 0;
    let mut left=0;
    let mut right = height.len()-1;
    let mut left_max=0;
    let mut right_max=0;
    while left<right{
        left_max = left_max.max(height[left]);
        right_max = right_max.max(height[right]);
        if (height[left] < height[right]) {
            res += left_max - height[left];
            left+=1;
        } else {
            res += right_max - height[right];
            right-=1;
        }
    }
    res
}
#[test]
pub fn test_trap() {
    let height = vec![4, 2, 0, 3, 2, 5];
    let result = trap(height);
    println!("{:?}", result);
}

#[test]
pub fn test_trap_dp() {
    let height = vec![4, 2, 0, 3, 2, 5];
    let result = trap_two_pointer(height);
    println!("{:?}", result);
}
