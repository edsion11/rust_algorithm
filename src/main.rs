include!("./nativeSolution/leetcode-763.rs");
fn main() {
    let str = String::from("ababcbacadefegdehijhklij");
    println!("{}",str);
    println!("{:?}",partition_labels(str));
}