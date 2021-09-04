pub fn spiral_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
    if matrix.len() == 0 {
        return vec![];
    }
    let mut left = 0 as i32;
    let mut right = matrix[0].len() as i32 - 1;
    let mut top = 0 as i32;
    let mut bottom = matrix.len() as i32 - 1;
    let mut ans: Vec<i32> = Vec::new();
    loop {
        for i in left..right + 1 {
            ans.push(matrix[top as usize][i as usize]);
        }
        top += 1;
        if top > bottom {
            break;
        }
        for i in top..bottom + 1 {
            ans.push(matrix[i as usize][right as usize]);
        }
        right -= 1;
        if right < left {
            break;
        }
        for i in (left..right + 1).rev() {
            ans.push(matrix[bottom as usize][i as usize]);
        }
        bottom -= 1;
        if bottom < top {
            break;
        }
        for i in (top..bottom + 1).rev() {
            ans.push(matrix[i as usize][left as usize]);
        }
        left += 1;
        if left > right {
            break;
        }
    }
    ans
}
