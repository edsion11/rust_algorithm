pub fn leetcode435(intervals: Vec<Vec<i32>>) -> i32{
    if intervals.len()==0{
        return 0
    }
    let len:usize = intervals.len();
    let mut intervals = intervals;
    intervals.sort_by(|a,b| a[1].cmp(&b[1]));
    let mut total = 0;
    let mut prev = intervals[0][1];
    let _i =0;
    println!("{:#?}",intervals);
    for _i in 1..len{
        if intervals[_i][0]<prev{
            total+=1;
        }else{
            prev = intervals[_i][1];
        }
    }
    return total
}