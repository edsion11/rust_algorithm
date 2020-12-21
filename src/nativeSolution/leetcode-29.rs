pub fn spiral_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
    if matrix.len()==0||matrix[0].len()==0{
        return Vec::new();
    }
    let high = matrix.len();
    let width = matrix[0].len();
    let mut result:Vec<i32> = Vec::new();
    let (mut left,mut right,mut top,mut bottom) = (0,width-1,0,high-1);
    while left<=right&&top<=bottom{
        for _i in left..right+1{
            result.push(matrix[top][_i]);
        }
        for _i in top+1..bottom+1{
            result.push(matrix[_i][right])
        }
        if left<right&&top<bottom{
            let mut _right = right-1;
            let mut _bottom = bottom;
            while _right>left{
                result.push(matrix[bottom][_right]);
                _right-=1;
            }
            while _bottom>top{
                result.push(matrix[_bottom][left]);
                _bottom-=1;
            }
        }
        left+=1;
        right-=1;
        top+=1;
        bottom-=1;
    }
    return result
}
