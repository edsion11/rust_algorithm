function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(1,new ListNode(2, new ListNode(3, new ListNode(4))))

// 递归
// var swapPairs = function (head) {
//   if (head === null || head.next === null) {
//     return head;
//   }
//   const newHead = head.next;
//   head.next = swapPairs(newHead.next);
//   newHead.next = head;
//   return newHead;
// };

var swapPairs = (head)=>{
    const dummyHead = new ListNode(0);
    dummyHead.next = head
    let temp = dummyHead
    while(temp.next!=null&&temp.next.next!=null){
        const node1 = temp.next
        const node2 = temp.next.next
        temp.next = node2
        node1.next = node2.next
        node2.next = node1
        temp = node1
    }
    return dummyHead.next
}


console.log(swapPairs(head))