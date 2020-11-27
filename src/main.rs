include!("./nativeSolution/leetcode-406.rs");
fn main() {
    let people = vec![vec![7,0],vec![4,4],vec![7,1],vec![5,0],vec![6,1],vec![5,2]];
    println!("{:?}",reconstruct_queue(people))
}