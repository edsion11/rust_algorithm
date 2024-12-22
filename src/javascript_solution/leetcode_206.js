/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return null
    let prev = head
    let next = head.next
    head.next = null
    while(next){
        const next1 = next.next
        next.next = prev
        prev = next
        next = next1
    }
    return prev
};
// 递归
var reverseList = function(head) {
    if(!head || !head.next) return head
    const next = head.next
    const newHead = reverseList(next)
    next.next = head
    head.next = null
    return newHead
}

// Definition for singly-linked list.   
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
console.log(reverseList(head)) // 5 -> 4 -> 3 -> 2 -> 1