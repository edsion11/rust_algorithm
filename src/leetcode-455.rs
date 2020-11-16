pub fn leetcode455(){
    let g = [1,2,3];
    let s = [1,2];
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