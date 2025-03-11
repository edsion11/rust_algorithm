/**
 * 给你一个以字符串表示的非负整数 num 和一个整数 k ，
 * 移除这个数中的 k 位数字，使得剩下的数字最小。请你以字符串形式返回这个最小的数字。
 */

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = []
    const len = num.length
    const resLength = len-k
    if(len===k) return '0'
    for(let i=0;i<num.length;i++){
        // 单调栈框架
        while(k>0 && stack.length && stack[stack.length-1]>num[i]){
            stack.pop()
            k--
        }
        stack.push(num[i])
    }
    stack.splice(resLength)
    const idx = stack.findIndex(item=>parseInt(item)>0)
    if(idx===-1) return '0'
    stack = stack.filter((_,index)=> index>=idx)
    return stack.join('')
};

console.log(removeKdigits("1432219", 3)) // 1219
console.log(removeKdigits("10200", 1)) // 200
console.log(removeKdigits("10", 2))  // 0
console.log(removeKdigits("112", 1)) // 11
console.log(removeKdigits("1173", 2)) // 11
console.log(removeKdigits("100", 1)) // 0
console.log(removeKdigits("10001", 4)) // 0