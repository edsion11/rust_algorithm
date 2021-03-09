use std::collections::HashMap;


// include!("./nativeSolution/leetcode-76.rs");
// include!("./leetcodeSolution/动态规划/96-不同的二叉搜索树.rs");
fn main() {
    let mut map = HashMap::new();
    map.insert(1,1);
    map.insert(1, 2);
    if let Some(s) = map.get(&1){
        println!("{:?}",s);
    }else{
        println!("none");
    }
}
