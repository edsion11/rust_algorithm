/**
* 给你链表的头节点 head 和一个整数 k 。
* 交换 链表正数第 k 个节点和倒数第 k 个节点的值后，返回链表的头节点（链表 从 1 开始索引）。
* @param {*} head
* @param {*} k
* @returns
*/

// 只需要找到两个节点，然后交换节点的值即可
var swapNodes = function(head, k) {
    let left = head;
    let right = head;
    while(k>1){
        left = left.next;
        k--;
    }
    let temp = left;
    while(left){
        left = left.next;
        right = right.next;
    }
    let tempVal = temp.val;
    temp.val = right.val;
    right.val = tempVal;
    return head;
}

// 尝试使用交换节点的思路:
// 1. 先找到第k个节点和第length-k个节点
// 2. 找到前驱节点，交换节点
// 3. 如果节点相邻，交换节点的next即可
// 4. 如果节点不相邻，交换节点的next和前驱节点的next即可
var swapNodes = function(head, k) {
    if (!head || !head.next) return head;

    // 创建虚拟头节点
    let dummy = new ListNode(0);
    dummy.next = head;

    // 获取链表长度
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    // 计算从后往前数第k个节点的位置
    let fromEnd = length - k + 1;

    // 如果k等于fromEnd，说明是同一个节点，无需交换
    if (k === fromEnd) return head;

    // 确保k始终指向靠前的节点
    if (k > fromEnd) {
        let temp = k;
        k = fromEnd;
        fromEnd = temp;
    }

    // 找到第一个节点的前驱
    let firstPrev = dummy;
    for (let i = 1; i < k; i++) {
        firstPrev = firstPrev.next;
    }

    // 找到第二个节点的前驱
    let secondPrev = dummy;
    for (let i = 1; i < fromEnd; i++) {
        secondPrev = secondPrev.next;
    }

    // 获取要交换的节点
    let firstNode = firstPrev.next;
    let secondNode = secondPrev.next;

    // 如果节点相邻
    if (firstNode.next === secondNode) {
        // 处理相邻节点的情况
        firstPrev.next = secondNode;
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
    } else {
        // 处理不相邻节点的情况
        let firstNext = firstNode.next;
        let secondNext = secondNode.next;

        firstPrev.next = secondNode;
        secondNode.next = firstNext;

        secondPrev.next = firstNode;
        firstNode.next = secondNext;
    }

    return dummy.next;
};
