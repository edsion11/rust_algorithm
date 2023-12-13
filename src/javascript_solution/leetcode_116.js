
var connect = function(root) {
    if(root===null) return root
    const queue = [root]
    console.log(queue)
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