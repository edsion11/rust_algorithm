/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0;
  let ten = 0;
  const k = bills.length
  let i=0
  while (i < k) {
    let cur = bills[i]
    if (cur === 5) {
      five++
    }
    if (cur === 10) {
      if (five === 0) {
        return false
      }
      if (five === 0) {
        return false
      }
      five--
      ten++
    }
    if (cur === 20) {
      if (five === 0) {
        return false
      }
      if (ten > 0) {
        ten--
        five--
      } else {
        if (five < 3) {
          return false
        }
        five -= 3
      }
    }
    i++
  }
  return true
};

console.log(lemonadeChange([5,5,5,10,20])) // true
