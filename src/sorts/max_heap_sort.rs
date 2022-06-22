pub fn max_heap_sort<T: Ord>(arr: &mut [T]) {
    if arr.len() <= 1 {
        return;
    }

    let last_parent = (arr.len() - 2) / 2;
    for i in (0..=last_parent).rev() {
        move_down(arr, i);
    }

    for end in (1..arr.len()).rev() {
        // 循环提取根节点, 直到全部提取完
        // 每次交换根节点和最后一个节点的值，并删除最后一个节点
        arr.swap(0, end);
        move_down(&mut arr[..end], 0);
    }
}

fn move_down<T: Ord>(arr: &mut [T], mut root: usize) {
    let last = arr.len() - 1; // last: 最后一位的下标
    loop {
        let left = 2 * root + 1; // root的左节点
        if left > last {
            break;
        }
        let right = left + 1;

        // 找到左右字节点的较大者下标child

        let child = if right <= last && arr[right] > arr[left] {
            right
        } else {
            left
        };

        // 调整树满足大小关系
        if arr[child] > arr[root] {
            arr.swap(root, child);
        }
        root = child;
    }
}

#[test]
pub fn test_heap_sort() {
    println!("Sort numbers ascending");
    let mut numbers = [4, 65, 2, -31, 0, 99, 2, 83, 782, 1];
    println!("Before: {:?}", numbers);
    max_heap_sort(&mut numbers);
    println!("After:  {:?}\n", numbers);

    println!("Sort strings alphabetically");
    let mut strings = ["beach", "hotel", "airplane", "car", "house", "art"];
    println!("Before: {:?}", strings);
    max_heap_sort(&mut strings);
    println!("After:  {:?}\n", strings);
}