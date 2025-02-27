/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const map = new Map()
  map.set('}', '{')
  map.set(']', '[')
  map.set(')', '(')
  for (let str of s) {
    if (str === '(' || str === '{' || str === '[') {
      stack.push(str)
    } else {
      const top = stack.pop()
      if (top !== map.get(str)) {
        return false
      }
    }
  }
  return stack.length === 0
};
console.log(isValid("()[]{}"))
console.log(isValid("([)]"))
console.log(isValid("{[]}"))
