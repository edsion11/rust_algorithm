/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(fast === slow){
            break;
        }
    }
    if(!fast || !fast.next){
        return null
    }
    let res = head;
    while(fast!==res){
        fast = fast.next;
        res = res.next;
    }
    return res;
};