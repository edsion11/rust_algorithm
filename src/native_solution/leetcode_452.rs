#[allow(dead_code)]
pub fn find_min_arrow_shots(points: Vec<Vec<i32>>) -> i32 {
    let mut points = points;
    points.sort_by(|a,b| a[1].cmp(&b[1]));
    let mut cache_end:i32 = points[0][1];
    let mut result:i32 = 1;
    for _i in 1..points.len(){
        if points[_i][0]>cache_end{
            result+=1;
            cache_end = points[_i][1]
        }
    }
    return result
}