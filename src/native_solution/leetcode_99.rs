use std::{borrow::Borrow, cell::RefCell, rc::Rc};

// Definition for a binary tree node.
#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}
// 一个二叉搜索树的两个节点被替换，在不改变结构的情况下恢复
pub fn recover_tree(root: Option<Rc<RefCell<TreeNode>>>) {
    
}

// pub fn preorder(root: Option<Rc<RefCell<TreeNode>>>,  prev: Option<Rc<RefCell<TreeNode>>>, result: Vec<Option<Rc<RefCell<TreeNode>>>>){
// 	match root{
// 		Some(node)=>{
// 			preorder(node.borrow().left.clone(),None, result);
// 			let cur = node.borrow().val.clone();
// 			println!("{:?}",cur);
// 			preorder(node.borrow().right.clone(),root,result);
// 		},
// 		None =>{
// 			return 
// 		}
// 	}
// }

#[test]
fn test_preorder(){
	let root = Some(Rc::new(RefCell::new(TreeNode{
		val: 2,
		left: Some(Rc::new(RefCell::new(TreeNode::new(1)))),
		right: Some(Rc::new(RefCell::new(TreeNode::new(3))))
	})));
	// preorder(root);
}

pub fn swap_tree_node(left: &Rc<RefCell<TreeNode>>, right: &Rc<RefCell<TreeNode>>){
  let temp = right.as_ref().borrow().val.clone();
  left.borrow_mut().val = right.as_ref().borrow().val.clone();
  right.borrow_mut().val = temp;
}
#[test]
fn test_swap_tree_node(){
	let root = Some(Rc::new(RefCell::new(TreeNode{
		val: 1,
		left: Some(Rc::new(RefCell::new(TreeNode::new(2)))),
		right: Some(Rc::new(RefCell::new(TreeNode::new(3))))
	})));
	let mut queue: Vec<Rc<RefCell<TreeNode>>> = Vec::new();
	let mut r = root.clone();
  let mut result: Vec<Rc<RefCell<TreeNode>>> = Vec::new();
	while !r.is_none()||!queue.is_empty(){
		while let Some(node) = r{
			queue.push(node.clone());
			r = node.as_ref().borrow().left.clone();
		}
		r = queue.pop();
		if let Some(node) = r{
			println!("{:?}", node.as_ref().borrow().val);
      result.push(node.clone());
			r = node.as_ref().borrow().right.clone();
		}
	}
  let mut prev: Rc<RefCell<TreeNode>> = result.remove(0);
  let mut nodes: Vec<Rc<RefCell<TreeNode>>> = Vec::new();
  for item in result{
    let curval = item.as_ref().borrow().val.clone();
    let preval = prev.as_ref().borrow().val.clone();
    if curval<preval{
      nodes.push(item.clone());
      nodes.push(prev.clone());
    }
  }
  println!("{:?}",nodes.len());
}