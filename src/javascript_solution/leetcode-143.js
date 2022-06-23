function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.show  = function (){
        let cur = this;
        while(cur){
            process.stdout.write(String(cur.val)+' ')
            cur = cur.next
        }
        process.stdout.write('\n')
    }
}



const head = new ListNode(1,new ListNode(2,new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7,new ListNode(8,new ListNode(9)))))))))

var reorderList = function(head) {
    var stash = []
    let cur = head;
    while(cur){
        stash.push(cur)
        cur = cur.next
    }
    var i=0,j=stash.length-1;
    while(i<j){
        stash[i].next = stash[j]
        i++
        if(i===j){
            break
        }
        stash[j].next = stash[i]
        j--
    }
    stash[i].next = null
    return head
};

var reorderList2 = function(head) {
    let slow = head, fast = head;
    while(fast.next&&fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }
    let mid = slow.next;
    slow.next = null;
    const reverseList = (head)=>{
        if(!head||!head.next){
            return head
        }else{
            let res = reverseList(head.next)
            head.next.next = head
            head.next = null
            return res
        }
    }
    let reversedMid = reverseList(mid)
    let left = head;
    let right = reversedMid;
    while(left&&right){
        let leftHeadNext = left.next
        let rightHeadNext = right.next
        left.next = right
        left = leftHeadNext
        right.next = left
        right = rightHeadNext
    }
    return head
};
head.show()
reorderList(head).show()