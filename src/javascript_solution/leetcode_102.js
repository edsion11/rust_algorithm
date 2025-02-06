/**
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const stack = [root]
    const res = []
    while(stack.length){
        const len = stack.length;
        const temp = []
        for(let i=0;i<len;i++){
            const node = stack.shift()
            if(node){
                temp.push(node.val)
                stack.push(node.left)
                stack.push(node.right)
            }
        }
        if(temp.length){
            res.push(temp)
        }
    }
    return res
};