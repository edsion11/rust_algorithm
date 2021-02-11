include!("./nativeSolution/leetcode-76.rs");
fn main() {
    let s = String::from( "ADOBECODEBANC");
    let t = String::from("ABC");
    println!("{:?}",min_window(s,t));
}
