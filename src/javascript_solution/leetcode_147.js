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
var insertionSortList = function(head) {
    if(!head){
        return null
    }
    let dHead = new ListNode(-1);
    dHead.next = head;
    let lastSorted = head,current = head.next
    while(current){
        if(lastSorted.val<=current.val){
            lastSorted = current.next
        }else{
            let prev = dHead.next;
            while(prev.next.val<=current.val){
                prev = prev.next
            }
            lastSorted.next = current.next
            current.next = prev.next
            prev.next = current
        }
        current = lastSorted.next;
        return dHead.next
    }
};