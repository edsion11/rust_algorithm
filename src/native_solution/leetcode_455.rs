#[allow(dead_code)]
pub fn find_content_children(g: Vec<i32>, s: Vec<i32>) -> i32 {
    let mut i =0;
    let mut j = 0;
    let mut result:i32 = 0;
    while i<g.len()&&j<s.len() {
        if g[i]<=s[j]{
            i+=1;
            result+=1;
        }
        j+=1;
    }
    result
}
