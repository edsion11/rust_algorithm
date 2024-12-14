/**
 * 给你两个 版本号字符串 version1 和 version2 ，请你比较它们。版本号由被点 '.' 分开的修订号组成。
 * 修订号的值 是它 转换为整数 并忽略前导零。
 * 比较版本号时，请按 从左到右的顺序 依次比较它们的修订号。
 * 如果其中一个版本字符串的修订号较少，则将缺失的修订号视为 0。
 * 返回规则如下：
 * 如果 version1 < version2 返回 -1，
 * 如果 version1 > version2 返回 1，
 * 除此之外返回 0。
 *
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");
  v1.forEach((v, i) => {
    v1[i] = parseInt(v);
  });
  v2.forEach((v, i) => {
    v2[i] = parseInt(v);
  });
  const len = Math.max(v1.length, v2.length);
  for (let i = 0; i < len; i++) {
    const num1 = i < v1.length ? v1[i] : 0;
    const num2 = i < v2.length ? v2[i] : 0;
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }
  return 0;
};

// 不用split方法
var compareVersion = function (version1, version2) {
  let i = 0,
    j = 0;
  const len1 = version1.length,
    len2 = version2.length;
  while (i < len1 || j < len2) {
    let num1 = 0,
      num2 = 0;
    while (i < len1 && version1[i] !== ".") {
      num1 = num1 * 10 + (version1[i] - "0");
      i++;
    }
    while (j < len2 && version2[j] !== ".") {
      num2 = num2 * 10 + (version2[j] - "0");
      j++;
    }
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
    i++;
    j++;
  }
  return 0;
};

console.log(compareVersion("1.01", "1.001")); // 0
console.log(compareVersion("1.0", "1.0.0")); // 0
console.log(compareVersion("0.1", "1.1")); // -1
console.log(compareVersion("1.2", "1.10")); // -1
