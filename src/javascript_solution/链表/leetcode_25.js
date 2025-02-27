/**
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，
 * 那么请将最后剩余的节点保持原有顺序。
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 * 
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;
    const reverseList = (head, tail) => {
        let prev = tail.next;
        let curr = head;
        while (curr !== tail) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        curr.next = prev;
        return [tail, head];
    }
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    curr = head;
    while(curr) {
        let tail = curr;
        for(let i = 1; i < k && tail; i++) {
            tail = tail.next;
        }
        if(!tail) {
            break;
        }
        const [newHead, newTail] = reverseList(curr, tail);
        prev.next = newHead;
        prev = newTail;
        curr = newTail.next;
    }

    return dummy.next;
};

var reverseKGroup = function(head, k) {
    const reverseList = (head, tail) => {
        // 递归
        // 1->2->3  => 2->1->3
        if(head === tail) {
            return [head, tail];
        }
        const [newHead, newTail] = reverseList(head.next, tail);
        const next = newTail.next;
        head.next.next = head;
        head.next = next;
        return [newHead, head];
     }
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    curr = head;
    while(curr) {
        let tail = curr;
        for(let i = 1; i < k && tail; i++) {
            tail = tail.next;
        }
        if(!tail) {
            break;
        }
        const [newHead, newTail] = reverseList(curr, tail);
        prev.next = newHead;
        prev = newTail;
        curr = newTail.next;
    }

    return dummy.next;
};
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
const tail = new ListNode(5);
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, tail))));
console.log(reverseKGroup(head, 2)); // 2->1->4->3->5