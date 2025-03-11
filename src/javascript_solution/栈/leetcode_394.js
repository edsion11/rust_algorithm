/**
 * 给定一个经过编码的字符串，返回它解码后的字符串。
编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * @param {*} s 
 * @returns 
 */

const decodeString = (s) => {
  const stack = [];
  let num = 0;
  let str = "";

  for (let char of s) {
    if (char >= "0" && char <= "9") {
      // 处理数字
      num = num * 10 + Number(char);
    } else if (char === "[") {
      // 遇到左括号，将当前数字和字符串入栈
      stack.push(str);
      stack.push(num);
      str = "";
      num = 0;
    } else if (char === "]") {
      // 遇到右括号，出栈并处理重复字符串
      let curNum = stack.pop();
      let prevStr = stack.pop();
      str = prevStr + str.repeat(curNum);
    } else {
      // 处理字母
      str += char;
    }
  }

  return str;
};

// 递归解法
const decodeString = (s) => {
    // 辅助递归函数，返回 [当前索引, 解码后的字符串]
    const dfs = (s, i) => {
        let res = "";
        let multi = 0;
        
        while (i < s.length) {
            if (s[i] >= '0' && s[i] <= '9') {
                multi = multi * 10 + Number(s[i]);
            } else if (s[i] === '[') {
                // 递归处理括号内的内容
                const [nextIndex, tmp] = dfs(s, i + 1);
                i = nextIndex;
                res += tmp.repeat(multi);
                multi = 0;
            } else if (s[i] === ']') {
                // 返回当前索引和处理结果
                return [i, res];
            } else {
                res += s[i];
            }
            i++;
        }
        return res;
    };
    
    return dfs(s, 0);
};
console.log(decodeString("2[abc]3[cd]ef"));
console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("abc3[cd]xyz"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("100[leetcode]"));
