include!("./nativeSolution/leetcode-887.rs");
fn main() {
    let k: i32 = 12;
    let n: i32 = 12;
    let result: i32 = super_egg_drop(k, n);
    println!("{}", result);
}
