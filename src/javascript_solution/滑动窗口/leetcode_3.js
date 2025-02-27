/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。
 * 
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    for(let i = 0; i < s.length; i++){
        let str = s[i];
        for(let j = i + 1; j < s.length; j++){
            if(str.indexOf(s[j]) === -1){
                str += s[j];
            }else{
                break;
            }
        }
        max = Math.max(max, str.length);
    }
    return max
};

var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let max = 0;
    while(left < s.length && right < s.length){
        let str = s.substring(left, right);
        if(str.indexOf(s[right]) === -1){
            right++;
            max = Math.max(max, right - left);
        } else {
            left++;
        }
    }
    return max
}

// test case
console.log(lengthOfLongestSubstring("abcabcbb")); // 3