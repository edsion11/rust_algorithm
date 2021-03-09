impl Solution {
    use std::collections::HashMap;
    pub fn super_egg_drop(k: i32, n: i32) -> i32 {
    let mut dp: HashMap<(usize, usize), u64> = HashMap::new();
    let (mut left, mut right) = (1, n + 1);
    if k == 1 {
        return n;
    }
    let t = loop {
        let mid = left + (right as f32 - left as f32).log2() as i32;
        let floor = drop_egg(k as usize, mid as usize, &mut dp);
        if floor > n as u64 {
            right = mid
        } else if floor < n as u64 {
            left = mid + 1
        } else {
            break mid;
        }
        if left == right {
            break left;
        }
    };
    t as i32
}
    pub fn drop_egg(k: usize, t: usize, dp: &mut HashMap<(usize, usize), u64>) -> u64 {
        if let Some(floor) = dp.get(&(k, t)) {
            return *floor;
        }
        if k == 1 || t == 1 {
            return t as u64;
        }
        let floor = drop_egg(k, t - 1, dp) + drop_egg(k - 1, t - 1, dp) + 1;
        dp.insert((k, t), floor);
        floor
}

}
