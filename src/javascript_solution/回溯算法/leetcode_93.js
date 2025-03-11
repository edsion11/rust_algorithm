/**
 *
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
 * 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
 * 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = [];
  const dfs = (end, ipAddr) => {
    if (ipAddr.length === 4 && end === s.length) {
      res.push(ipAddr.join("."));
      return;
    }
    if (ipAddr.length === 4 || end === s.length) {
      return;
    }
    for (let i = end + 1; i <= s.length; i++) {
      const num = s.substring(end, i);
      if (num > 255 || (num.length > 1 && num[0] === "0")) {
        break;
      }
      ipAddr.push(num);
      dfs(i, ipAddr);
      ipAddr.pop();
    }
  };
  dfs(0, []);
  return res;
};

console.log(restoreIpAddresses("25525511135")); // ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses("0000")); // ["0.0.0.0"]
console.log(restoreIpAddresses("101023")); // ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
