/*
 * @lc app=leetcode.cn id=76 lang=rust
 *
 * [76] 最小覆盖子串
 */

// @lc code=start

impl Solution {
    pub fn min_window(s: String, t: String) -> String {
        use std::collections::HashMap;
        let mut left:usize=0;let mut right:usize=0;let mut begin:usize=0;
        let mut matchnum:usize=0;
        let mut tvalue=HashMap::new();
        let mut svalue=HashMap::new();
        let len2=t.len();
        for i in 0..len2{
            let count=tvalue.entry(&t[i..i+1]).or_insert(0);
            *count+=1;
        }
        let mut minlen:usize=1000000;
        let len1=s.len();
        let tvaluelen=tvalue.len();
        while right<len1{
            if let Some(v)=tvalue.get(&s[right..right+1]){
                let count=svalue.entry(&s[right..right+1]).or_insert(0);
                *count+=1;
                if *count==*v{
                    matchnum+=1;
                }

            }

            right+=1;
            while matchnum==tvaluelen{
                if right-left<minlen{
                    begin=left;
                    minlen=right-left;
                }
                if let Some(v)=tvalue.get(&s[left..left+1]){

                    let count=svalue.entry(&s[left..left+1]).or_insert(0);
                    *count-=1;
                    if *count<*v{
                        matchnum-=1;
                    }

                }
                left+=1;
            }
        }
        if minlen==1000000{
            return String::new();
        }
        else{
            return String::from(&s[begin..begin+minlen]);
        }
    }
}
// @lc code=end

