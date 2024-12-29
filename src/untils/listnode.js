// 定义链表节点
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function arrayToList(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

module. exports = { ListNode, arrayToList };
