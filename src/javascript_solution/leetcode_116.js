// Solution-1: 利用队列, 层序遍历。时间复杂度O(n), 空间复杂度O(n)
var connect = function(root) {
    if(root===null) return root
    const queue = [root]
    while(queue.length>0){
        const len = queue.length

        for(let i = 0;i<len;i++){
            const node = queue.shift()
            if(i<len-1){
                console.log(node)
                node.next = queue[0]
            }
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
    }
    return root
};

// Solution-2: 利用已经建立的next指针，时间复杂度O(n), 空间复杂度O(1)
var connect = function(root) {
    if(!root) return root
   let leftHead = root
   while(leftHead.left!==null){
       let node = leftHead
       while(node!==null){
           if(node.left){
               node.left.next = node.right
           }
           if(node.next){
               node.right.next = node.next.left
           }
           node = node.next
       }
       leftHead = leftHead.left
   }
   return root
};