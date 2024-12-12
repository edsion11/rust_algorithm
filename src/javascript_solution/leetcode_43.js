/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {

  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  const res1 = []
  for (let i = num2.length-1; i >= 0; i--) {
    const temp = []
    for (let j = num1.length-1; j >= 0; j--) {
      temp.push(parseInt(num1[j])*parseInt(num2[i]))
    }
    res1.push(temp)
  }
  console.log(res1)
  for (let i = 0; i < res1.length; i++) {
    for (let j = 0; j < i; j++) {
      res1[i].unshift(0)
    }
  }
    console.log(res1)
  const res = []
  let carry = 0
  const n  = res1.length
  for (let i = 0; i < res1[n-1].length; i++) {
    let sum = carry
    for (let j = 0; j < n; j++) {
      sum += res1[j][i] || 0
    }
    if(i === res1[res1.length-1].length - 1) {
      res.push(sum)
    } else {
      res.push(sum % 10)
      carry = Math.floor(sum / 10)
    }
  }
  return res.reverse().join('')
};

console.log(multiply('2', '3')) // 6
console.log(multiply('123', '456')) // 56088
