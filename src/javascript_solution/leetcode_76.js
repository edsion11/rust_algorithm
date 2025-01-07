/**
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
 * 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 注意：
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// 暴力解法
var minWindow = function(s, t) {
    const res = [];
    for(let i=0; i<s.length; i++){
        const arr = new Array(128).fill(0);
        for(let j=i+1; j<=s.length; j++){
            arr[s[j-1].charCodeAt()]++;
            let flag = true;
            const temp = [...arr]
            for(let k=0; k<t.length; k++){
                if(temp[t[k].charCodeAt()] === 0){
                    flag = false;
                    break;
                }else{
                    temp[t[k].charCodeAt()]--;
                }
            }
            if(flag&&t.length === t.split("").filter((item)=>temp[item.charCodeAt()-65] === 0).length){
                res.push(s.substring(i, j));
            }
        }
    }
    if(res.length === 0){
        return "";
    }
    res.sort((a, b)=>a.length - b.length);
    return res[0];
};

// 滑动窗口
var minWindow = function(s, t) {
    if (!s || !t || s.length < t.length) return "";
    
    const need = new Array(128).fill(0);
    let needCount = 0;
    
    // 统计需要的字符
    for (let c of t) {
        need[c.charCodeAt()]++;
        needCount++;
    }
    
    let left = 0, right = 0;
    let minLen = Infinity;
    let start = 0;
    let count = 0;
    const window = new Array(128).fill(0);
    
    while (right < s.length) {
        // 扩大窗口
        const c = s[right].charCodeAt();
        window[c]++;
        if (window[c] <= need[c]) {
            count++;
        }
        right++;
        
        // 收缩窗口
        while (count === needCount) {
            if (right - left < minLen) {
                minLen = right - left;
                start = left;
            }
            
            const d = s[left].charCodeAt();
            window[d]--;
            if (window[d] < need[d]) {
                count--;
            }
            left++;
        }
    }
    
    return minLen === Infinity ? "" : s.substring(start, start + minLen);
};

// test case
console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindow("a", "a")); // "a"
console.log(minWindow("a", "aa")); // ""
console.log(minWindow("ab", "a")); // "a"