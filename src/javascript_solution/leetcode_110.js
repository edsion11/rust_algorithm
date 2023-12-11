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
 * @return {boolean}
 */

const getNodeHeight = (node)=>{
    if(node === null) return 0
    return Math.max(getNodeHeight(node.left), getNodeHeight(node.right))+1
}
var isBalanced = function(root) {
    if(root === null) return true
    if(Math.abs(getNodeHeight(root.left)-getNodeHeight(root.right))<=1&&      isBalanced(root.left)&&isBalanced(root.right)){
        return true
    }
    return false
};

const getNodeHeight2 = (node)=>{
    if(node === null) return 0
    let left = getNodeHeight(node.left)
    let right = getNodeHeight(node.right)
    if(left===-1||right===-1||Math.abs(left-right)>1){
        return -1
    }else{
        return Math.max(left,right)+1
    }
}
var isBalanced = function(root) {
    return getNodeHeight2(root)>=0
};