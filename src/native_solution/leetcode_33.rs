pub fn search(nums: Vec<i32>, target: i32) -> i32 {
    let size = nums.len();
    if size==0{
        return -1;
    }
    match target==nums[0] {
        true=>0,
        false=> -1
    }; 
    let mut l = 0;
    let mut r = size as i32-1;
    while l<=r{
        let mid = (l+r)/2;
        if nums[mid as usize]==target{
            return mid
        } 
        if nums[0]<=nums[mid as usize]{
            if target<nums[mid as usize]&&target>=nums[0]{
                r = mid-1;
            }else{
                l = mid+1;
            }
        }else{
            if target>nums[mid as usize]&&target<=nums[r as usize]{
                l = mid+1;
            }else{
                r=mid-1;
            }
        }
    }
    -1
}

#[test]
pub fn test_search(){
    let res = search(vec![4,5,6,7,0,1,2], 0); 
    assert_eq!(4,res)
}