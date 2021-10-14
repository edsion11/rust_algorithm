pub fn quick_sort(arr: Vec<&str>, lo: i32, hi: i32, d: i32) {
    if lo > hi {
        return;
    }
    let mut low_pointer = lo;
    let mut high_pointer = hi;
    let p = char_at(arr[lo], d);
    let mut i = lo + 1;
    let cur: u8;
    while i < hi_pointer {
        cur = char_at(arr[i], d);
        println!("{:?}",arr);
        if cur < p {
            swap(arr, i as usize, low_pointer as usize);
            low_pointer += 1;
        } else if cur > p {
            swap(arr, i as usize, high_pointer as usize);
            high_pointer -= 1;
            i += 1;
        } else {
            i += 1;
        }
    }
    quick_sort(arr, lo, low_pointer, d);
    if p > 0 {
        quick_sort(arr, low_pointer, high_pointer, d + 1);
    }
    quick_sort(arr, high_pointer + 1, hi, d);
}
pub fn swap(&mut arr: Vec<&str>, i: usize, j: usize) -> Vec<&str> {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    arr
}
pub fn char_at(str: &str, i: i32) -> u8 {
    return str.as_bytes()[i as usize] as u8;
}

#[test]

fn test_quick_sort() {
    let mut arr = vec!["aa", "bb", "cc"];
    quick_sort(arr, 0, arr.len() as i32 - 1, 0);
    println!("{:?}", arr);
}
