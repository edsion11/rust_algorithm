include!("./nativeSolution/leetcode-29.rs");
fn main() {
    // let matrix = vec![vec![1,2,3],vec![4,5,6],vec![7,8,9]];
     let matrix = vec![vec![1,2,3,4],vec![5,6,7,8],vec![9,10,11,12]];
    // let matrix  = vec![vec![1]];
    // let matrix = vec![vec![3],vec![2]];
    println!("{:?}",spiral_order(matrix));
}
