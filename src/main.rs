mod native_solution;

fn main() {
    let grid = vec![vec![1, 3, 1], vec![1, 5, 1], vec![4, 2, 1]];
    let result = native_solution::min_path_sum(grid);
    println!("{}", result);
}
