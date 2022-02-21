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