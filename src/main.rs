include!("./nativeSolution/leetcode-88.rs");
fn main() {
    let mut nums1 = vec![1,2,3];
    let mut nums2 = vec![2,5,6];
    merge(&mut nums1,6,&mut nums2,3);
    println!("{:?}",nums1);
}