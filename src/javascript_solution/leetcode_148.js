/**
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
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
 * @return {ListNode}
 */
var sortList = function(head) {
  const mergeSort = (head, tail) => {
    if (head === tail){
      return head
    }
    let mid = head
    let slow = head;
    let fast = head
    // 1->2
    while (fast!==tail&&fast.next!==tail) {
      fast = fast.next.next
      slow = slow.next
    }
  }
};


var sortList = function(head) {
   if (!head || !head.next) return head;

   // 计算链表长度
   let length = 0;
   let curr = head;
   while (curr) {
       length++;
       curr = curr.next;
   }

   // 创建虚拟头节点
   let dummy = new ListNode(0);
   dummy.next = head;

   // 自底向上归并排序
   // step 表示每次归并的子链表长度
   for (let step = 1; step < length; step = step * 2) {
       let prev = dummy;
       curr = dummy.next;

       // 对每对需要归并的子链表进行处理
       while (curr) {
           // 获取左半部分链表
           let left = curr;
           let right = split(left, step);
           curr = split(right, step);

           // 合并左右链表，并连接到已排序部分
           prev = merge(left, right, prev);
       }
   }

   return dummy.next;
};

// 分割链表，返回第二部分的头节点
function split(head, step) {
   if (!head) return null;

   // 向前走 step-1 步，找到第一部分的尾节点
   for (let i = 1; head.next && i < step; i++) {
       head = head.next;
   }

   const next = head.next;
   head.next = null;
   return next;
}

// 合并两个有序链表，prev 是合并后链表的前驱节点
function merge(l1, l2, prev) {
   let curr = prev;

   // 合并两个有序链表
   while (l1 && l2) {
       if (l1.val <= l2.val) {
           curr.next = l1;
           l1 = l1.next;
       } else {
           curr.next = l2;
           l2 = l2.next;
       }
       curr = curr.next;
   }

   // 连接剩余部分
   curr.next = l1 ? l1 : l2;

   // 移动到合并后链表的末尾
   while (curr.next) {
       curr = curr.next;
   }

   return curr;
}
