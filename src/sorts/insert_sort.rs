pub fn insert_sort<T: Ord>(arr: &mut [T]){
    if arr.len()<2{
        return
    }
    for i in 1..arr.len() {
        for j in 0..i{
            if arr.get(i)<arr.get(j){
                arr.swap(i,j)
            }else{
                continue;
            }
        }
    }
}

#[test]
pub fn test_insert_sort_() {
    let mut arr = [4,3,2,1,6,4,2,3,6,7,4,1,2,5,6,3,2,1,1,5,6,6,1,2,6,6,4,1,12,5,6];
    insert_sort(&mut arr);
    println!("{:?}",arr);
}