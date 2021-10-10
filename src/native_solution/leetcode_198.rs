#[allow(dead_code)]
pub fn rob(nums: Vec<i32>) -> i32 {
    let len = nums.len();
    if len <= 2 {
        return nums.into_iter().max().unwrap_or(0);
    }
    let (mut pre, mut ans) = (0, 0);
    for _i in nums.iter() {
        let temp = ans;
        ans = ans.max(_i + pre);
        pre = temp;
    }
    ans
}

#[test]
fn test_rob() {
    let nums = vec![1, 2, 3, 1];
    println!("{:?}", self::rob(nums))
}
