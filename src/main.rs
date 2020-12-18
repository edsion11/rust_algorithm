include!("./nativeSolution/leetcode-887.rs");
// use std::collections::HashMap;
fn main() {
    let k: i32 = 12;
    let n: i32 = 12;
    let result: i32 = super_egg_drop(k, n);
    println!("{}", result);
}
