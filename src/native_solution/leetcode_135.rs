pub fn candy(ratings: Vec<i32>) -> i32 {
    let mut candies = Vec::new();
    let ratings = &ratings;
    for _item in ratings{
        candies.push(1);
    }
    let mut left = 0;
    let mut right = candies.len()-1;
    while left<candies.len()-1 {
        if ratings[left+1]>ratings[left] {
            candies[left]+=1;
        }
        left+=1;
    }
    let  mut result = 0;
    while right>0{
        if ratings[right-1]>ratings[right]&&candies[right-1]<=candies[right] {
            if ratings[right-1]>ratings[right]{
                candies[right-1] = candies[right-1]+1
            }else{ 
                candies[right-1] = candies[right]+1
            }
        }
        right=right-1;
    }
    for item in &candies{
        result+=item
    }
    result
}

#[test]
fn test_candy(){
    let ratings = vec![1,0,2];
    let result = candy(ratings);
    println!("{:?}",result)
}