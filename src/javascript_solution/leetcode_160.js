/**
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
   let a = headA, b = headB;
   let aLen = 0, bLen = 0;
   while (a.next) {
     a = a.next
     aLen++;
   }
   while (b.next) {
     b = b.next
     bLen++
   }
   if (a === b) {
     let steps = aLen-bLen;
     let newA = headA, newB = headB;
     console.log()
     if (steps > 0) {
       while (steps > 0&&newA.next) {
         newA = newA.next
         steps--
       }
     } else if (steps < 0) {
       steps = -steps
       while (steps > 0&&newB.next) {
         newB = newB.next
         steps--
       }
     }
     while (newA !== newB && newA.next &&newB.next) {
       newA = newA.next
       newB = newB.next
     }
     return newA
   } else {
     return null
   }
 };


var getIntersectionNode = function(headA, headB) {
  let a = headA, b = headB;
  while (a.next) {
    a = a.next
  }
  while (b.next) {
    b = b.next
  }
  if (a === b) {
    a = headA
    b = headB
    while (a !== b) {
      if (!a.next) {
        a = headB
      } else {
              a = a.next
      }
      if (!b.next) {
        b = headA
      } else {
        b = b.next
      }
    }
    return a
  } else {
    return null
  }
};
