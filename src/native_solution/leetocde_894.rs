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

use std::rc::Rc;
use std::cell::RefCell;

pub fn all_possible_fbt(mut n: i32) -> Vec<Option<Rc<RefCell<TreeNode>>>> {
    if n % 2 == 0 {
        return vec![];
    }
    let mut res: Vec<Option<Rc<RefCell<TreeNode>>>> = vec![];
    if n == 1 {
        res.push(Some(Rc::new(RefCell::new(TreeNode::new(0)))));
        return res;
    }
    n -= 1;
    for i in (1..n).step_by(2) {
        let left = all_possible_fbt(i);
        let right = all_possible_fbt(n - i);
        for l in &left {
            for r in &right {
                let root = Rc::new(RefCell::new(TreeNode::new(0)));
                {
                    let mut ref_root = root.borrow_mut();
                    ref_root.left = Some(l.as_ref().unwrap().clone());
                    ref_root.right = Some(r.as_ref().unwrap().clone());
                }
                res.push(Some(root));
            }
        }
    }
    res
}


#[test]
fn test_all_possible_fbt(){
    println!("{:?}",all_possible_fbt(3));
}