pub fn quick_sort<T: Ord>(arr: &mut [T]){
    let len = arr.len();
    _quick_sort(arr, 0, (len-1) as isize)
}

fn _quick_sort<T: Ord>(arr: &mut [T], low: isize, high: isize){
    if low < high{
        let p = _partition(arr ,low ,high);
        _quick_sort(arr, low, p-1);
        _quick_sort(arr, p+1, high);
    }
}
fn _partition<T: Ord>(arr: &mut [T], low: isize, high: isize) -> isize{
    let privot = high as usize;
    let mut store_index = low - 1;
    let mut last_index = high;
    loop{
        store_index += 1;
        while arr[store_index as usize]< arr[privot] {
            store_index += 1;
        }
        last_index -= 1;
        while arr[last_index as usize]> arr[privot] {
            last_index -= 1;
        }
        if last_index <= store_index{
            break;
        } else {
            arr.swap(store_index as usize,  last_index as usize)
        }
    }
    arr.swap(store_index as usize, privot as usize);
    store_index
}

#[test]
fn test_quick_sort(){
    let mut arr = [4,21,1,5,6,1,2,5,6,3];
    quick_sort(&mut arr);
    println!("{:?}", arr);
}