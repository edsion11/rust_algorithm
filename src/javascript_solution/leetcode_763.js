/**
 * 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。
 * 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。
 * 返回一个表示每个字符串片段的长度的列表。
 */

/**
 * @param {string} s
 * @return {number[]}
 */
// 思路：遍历字符串，记录每个字符最后出现的位置，如果当前位置等于最后出现的位置，则切割
var partitionLabels = function(s) {
    const map = new Map();
    for(let i = 0; i < s.length; i++) {
        map.set(s[i], i);
    }
    const res = [];
    let max = 0;
    let prev = 0;
    for(let i = 0; i < s.length;i++) {
        max = Math.max(max, map.get(s[i]));
        if(i===max){
            res.push(i+1-prev);
            prev = i+1;
        }
    }
    return res;
};

// test case
console.log(partitionLabels("ababcbacadefegdehijhklij")); // [9,7,8]
console.log(partitionLabels("eccbbbbdec")); // [10]