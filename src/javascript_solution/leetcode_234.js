/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
/**
 * 给你一个单链表的头节点 head ，请你判断该链表是否为
 * 回文链表。如果是，返回 true ；否则，返回 false 。

 */


/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 用O(n)的空间复杂度，将链表的值存储在数组中，然后使用双指针法判断是否为回文链表
var isPalindrome = function(head) {
    const vals = [];
    while (head !== null) {
        vals.push(head.val);
        head = head.next;
    }
    for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
        if (vals[i] !== vals[j]) {
            return false;
        }
    }
    return true;
};

// 使用O(1)的空间，先找到链表的中点，然后将后半部分反转，最后比较两个链表是否相同
var isPalindrome = function(head) {
    if (!head || !head.next) return true;
    
    // 找到中点
    let slow = head;
    let fast = head;
    
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // 递归反转后半部分
    const reverseList = (head) => {
        if (!head || !head.next) return head;
        
        const newHead = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        
        return newHead;
    }
    
    let secondHalf = reverseList(slow.next);
    
    // 比较两半部分
    let firstHalf = head;
    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) return false;
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    
    return true;
};
// 1->2->2->1