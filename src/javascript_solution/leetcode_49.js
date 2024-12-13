/**
* 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
* 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

 // const isAnagrams = (str1, str2) => {
 //   return str1.split('').sort().join('') === str2.split('').sort().join('');
 // }
var groupAnagrams = function(strs) {
  const map = new Map();
  for (let str of strs) {
    let key = Array.from(str).sort().join('');
    let list = map.get(key) ? map.get(key) : [];
    list.push(str);
    map.set(key, list);
  }
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
