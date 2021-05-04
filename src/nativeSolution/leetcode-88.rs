pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
    let mut left = 0;
    let mut right = 0;
    while right<nums2.len()&&left<nums1.len(){
        if nums1[left]<=nums2[right] {
            if left==nums1.len()-1{
                nums1.push(nums2[right]);
                right+=1;
            }
            left+=1;
        }else{
            if left!=0{
                nums1.insert(left-1, nums2[right]);
            }else{
                let array = nums1.clone();
                for _i in 0..array.len()-1{
                    nums1[_i+1] = array[_i]
                }
                nums1.push(array[array.len()-1])
            }
            right+=1
        }
    }
}
