const { ListNode, arrayToList } = require('../../untils/listnode.js')

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const res = new ListNode(null)
    const resnum = []
    const l1num = []
    const l2num = []
    while (l1) {
        l1num.push(l1.val)
        l1 = l1.next
    }
    while (l2) {
        l2num.push(l2.val)
        l2 = l2.next
    }
    const len = Math.max(l1num.length, l2num.length)
    let coun = 0
    for (let i = len - 1; i >= 0; i--) {
        let a = l1num.shift() || 0
        let b = l2num.shift() || 0
        if (a + b + coun >= 10) {
            let r = (a+b+coun)%10
            coun = Math.floor((a+b+coun)/10)
            resnum.push(r)
        } else {
            resnum.push(a + b+coun)
            coun = 0
        }
    }
    if(coun > 0) {
        resnum.push(coun)
    }
    while(resnum.length > 0) {
        let node = new ListNode(resnum.pop())
        node.next = res.next
        res.next = node
    }
    return res.next
};

// 不使用数组
var addTwoNumbers = function (l1, l2) {
    let res = new ListNode(null)
    let res2 = res
    let coun = 0
    while (l1 || l2 || coun) {
        let a = l1 ? l1.val : 0
        let b = l2 ? l2.val : 0
        let sum = a + b + coun
        coun = Math.floor(sum / 10)
        let node = new ListNode(sum % 10)
        res2.next = node
        res2 = res2.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return res.next
}



console.log(addTwoNumbers(arrayToList([2, 4, 3]), arrayToList([5, 6, 4]))) // 342 + 465 = 807
// console.log(addTwoNumbers(arrayToList([0]), arrayToList([0]))) // 0 + 0 = 0
// console.log(addTwoNumbers(arrayToList([9, 9, 9, 9, 9, 9, 9]), arrayToList([9, 9, 9, 9]))) // 9999999 + 9999 = 10009998