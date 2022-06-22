use crate::sorts::max_heap_sort;

mod native_solution;
mod sorts;

fn main() {
    //...
    let mut arr  =[5,9,3,-1,0,11,1,24];
    max_heap_sort(&mut arr);
    println!("{:?}",arr)
}

