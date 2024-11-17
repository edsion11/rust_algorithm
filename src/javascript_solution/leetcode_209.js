var minSubArrayLen = function(target, nums) {
    var start = 0,end = 0,sum=0;
    var ans = Number.MAX_SAFE_INTEGER;
    while(end<=nums.length-1){
        sum+=nums[end]
        while(sum>=target){
            ans = Math.min(ans,end-start+1)
            sum = sum-nums[start]
            start++
        }
        end++
    }
    return ans===Number.MAX_SAFE_INTEGER?0:ans
}