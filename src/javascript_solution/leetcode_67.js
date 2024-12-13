/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const result = [];
  if (a.length > b.length) {
    b = b.padStart(a.length, '0');
  } else {
    a = a.padStart(b.length, '0');
  }
  let j = 0
  for (let i = a.length-1; i >= 0; i--) {
    const res = parseInt(a[i]) + parseInt(b[i]) + j;
    if (res >= 2) {
      result.unshift(res - 2);
      j = 1;
    } else {
      result.unshift(res);
      j = 0;
    }
  }
  if (j > 0) {
    result.unshift(1)
  }
  return result.join('')
};

console.log(addBinary("11", "1")) // 100
console.log(addBinary("1010", "1011")) // 10101
