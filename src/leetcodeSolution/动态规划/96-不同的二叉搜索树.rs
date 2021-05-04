pub fn num_trees(n: i32) -> i32 {
    let mut arr = vec![0;n as usize +1];
    arr[0] = 1;
    arr[1] = 1;
    for _i in 2..n+1{
        for _j in 1.._i+1{
            arr[_i as usize] = arr[_j as usize-1] * arr[_i as usize-_j as usize];
        }
    }
    println!("{:?}",arr);
    return arr[n as usize];
}