use std::fs;

// include!("./bin/nativeSolution/leetcode-64.rs");

mod native_solution;

fn main() {
    let paths = fs::read_dir("./src/native_solution")
    .unwrap();
    for path in paths{
        let s = path.unwrap().path().display().to_string();
        let name = &s.to_string()[..];
        let next = name.replace("-", "_");
        fs::rename(s,next).unwrap();
        println!("Ok")
    }
    // let grid = vec![vec![1,3,1],vec![1,5,1],vec![4,2,1]];
    // let result = native_solution::min_path_sum(grid);
    // println!("{}",result);
}
 