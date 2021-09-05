/**
 * 
 */
#[allow(dead_code)]
pub fn two_sum(numbers: Vec<i32>, target: i32) -> Vec<i32> {
    let mut left = 0;
    let mut right = numbers.len()-1;
    while left<right{
        let sum = numbers[left]+numbers[right];
        if sum==target{
            return vec![left as i32,right as i32]
        }else{
            if sum<target{
                left+=1;
            }else{
                right-=1;
            }
        }
    }
    vec![]
}

#[test]
fn test_two_sum(){
    let numbers = vec![2,7,11,15];
    let target = 9;
    println!("{:?}",two_sum(numbers,target))
}