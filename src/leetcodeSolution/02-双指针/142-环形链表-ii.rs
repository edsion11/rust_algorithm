use std::collections::LinkedList;
pub fn detect_cycle(list: LinkedList<i32>) {
    
}
fn main() {
    let mut list1: LinkedList<i32> = LinkedList::new();
    let mut list2: LinkedList<i32> = LinkedList::new();
    list1.push_back(1);
    list2.push_back(2);
    list1.append(&mut list2);
    detect_cycle(list1);
}
