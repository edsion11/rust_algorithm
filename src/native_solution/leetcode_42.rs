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
#[test]
pub fn test_trap() {
    let height = vec![4, 2, 0, 3, 2, 5];
    let result = trap(height);
    println!("{:?}", result);
}
