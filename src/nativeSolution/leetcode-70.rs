// pub fn climb_stairs(n: i32) -> i32 {
//     if n<2{
//         return 1
//     }
//     let mut array = vec![1;n as usize+1];
//     for _i in 2..n+1{
//         array[_i as usize] = array[_i as usize - 1]+array[_i as usize - 2];
//     }
//     array[n as usize]
// }
// pub fn climb_stairs(n: i32) -> i32 {
//     if n<2{
//         return 1
//     }
//     climb_stairs(n-1)+climb_stairs(n-2)
// }
pub fn climb_stairs(n: i32) -> i32 {
    if n<2{
        return 1
    }
    let mut pre1 = 1;
    let mut pre2 = 1;
    let mut cur:i32 = 1;
    for _i in 2..n+1{
        cur = pre1 + pre2;
        pre2 = pre1;
        pre1 = cur;
    }
    return cur;
}
