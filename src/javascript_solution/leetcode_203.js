/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const newHead = new ListNode(null)
  newHead.next = head
  let cur = newHead
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    }
  }
  return newHead.next
};
