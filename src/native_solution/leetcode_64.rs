pub fn min_path_sum(grid: Vec<Vec<i32>>) -> i32 {
    use std::cmp::min;
    let m = grid.len();
    let n = grid[0].len();
    let mut dp = vec![vec![0;n];m];
    for _i in 0..m{
        for _j in 0..n{
            if _i==0&&_j==0{
                dp[_i][_j] = grid[_i][_j];
            }else if _i==0 {
                dp[_i][_j] = grid[_i][_j] + dp[_i][_j-1];
            }else if _j==0{
                dp[_i][_j] = grid[_i][_j] + dp[_i-1][_j];
            }else{
                dp[_i][_j] = grid[_i][_j] + min(dp[_i][_j-1],dp[_i-1][_j]);
            }
        }
    }
    dp[m-1][n-1]
}
