
pub fn quick_sort(arr: &mut Vec<&str>, lo: i32, hi: i32, d: i32) {
    if lo >= hi {
        return;
    }
    let mut low_pointer = lo;
    let mut high_pointer = hi;
    let p = char_at(arr[lo as usize], d);
    let mut i = lo + 1;
    let mut cur: u8;
    while i <= high_pointer {
        cur = char_at(arr[i as usize], d);
        if cur < p {
            arr.swap(i as usize, low_pointer as usize);
            low_pointer += 1;
        } else if cur > p {
            arr.swap(i as usize, high_pointer as usize);
            high_pointer -= 1;
            i += 1;
        } else {
            i += 1;
        }
    }
    quick_sort(arr, lo, low_pointer, d);
    if p > 0 {
        quick_sort( arr, low_pointer, high_pointer, d + 1);
    }
    quick_sort( arr, high_pointer + 1, hi, d);
}

pub fn char_at(str: &str, i: i32) -> u8 {
    return str.as_bytes()[i as usize] as u8;
}

#[test]

fn test_quick_sort() {
    let mut arr = vec!["bb", "aa", "cc"];
    let len = arr.len() as i32;
    quick_sort(&mut arr, 0, len - 1, 0);
    println!("{:?}", arr);
}
