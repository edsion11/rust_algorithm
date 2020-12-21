include!("./nativeSolution/leetcode-29.rs");
fn main() {
    let matrix = vec![vec![1,2,3],vec![4,5,6],vec![7,8,9]];
    println!("{:?}",spiral_order(matrix));
}
