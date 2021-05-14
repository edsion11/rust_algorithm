pub fn find_min_arrow_shots(points: Vec<Vec<i32>>) -> i32 {
    let mut points = points;
    points.sort_by(|a,b| a[1].cmp(&b[1]));
    let mut cacheEnd:i32 = points[0][1];
    let mut result:i32 = 1;
    for _i in 1..points.len(){
        if points[_i][0]>cacheEnd{
            result+=1;
            cacheEnd = points[_i][1]
        }
    }
    return result
}