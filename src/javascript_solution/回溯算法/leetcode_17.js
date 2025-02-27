/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 *给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const res = [];
  if(!digits) return res
  const n = digits.length;
  const map = ["", "abc", "def", "ghi", "jkl", "mon", "pqrs", "tuv", "wxyz"];
  const backtrack = (str, i) => {
    if (str.length === n) {
      res.push(str);
      return;
    }
    const key = parseInt(digits[i]) - 1;
    const strs = map[key];
    for (let s of strs) {
      str = str + s;
      backtrack(str, i + 1);
      str = str.slice(0, str.length - 1);
    }
  };
  backtrack("", 0);
  return res;
};

// test
console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
