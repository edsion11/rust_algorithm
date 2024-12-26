/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
      if (!root) {
          return '[]'
      }
      const queue = [root]
      const result = []
      while(queue.length){
          const node = queue.shift()
          if(node){
              result.push(node.val)
              queue.push(node.left)
              queue.push(node.right)
          }else{
              result.push(null)
          }
      }
      return JSON.stringify(result)
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
      if(data === '[]'){
          return null
      }
      const list = JSON.parse(data)
      const root = new TreeNode(list[0])
      const queue = [root]
      let i = 1
      while(queue.length){
          const node = queue.shift()
          const leftVal = list[i]
          const rightVal = list[i+1]
          if(leftVal !== null){
              const leftNode = new TreeNode(leftVal)
              node.left = leftNode
              queue.push(leftNode)
          }
          if(rightVal !== null){
              const rightNode = new TreeNode(rightVal)
              node.right = rightNode
              queue.push(rightNode)
          }
          i += 2
      }
      return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
