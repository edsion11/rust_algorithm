/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const matrixLong = []
    for(let i = 0; i < matrix.length; i++) {
        matrixLong.push(...matrix[i])
    }
    let left = 0, right = matrixLong.length - 1;
    while(left<right){
        let mid = Math.floor((left + right) / 2);
        console.log(mid)
        if(target>matrixLong[mid]){
            left = mid + 1;
        }else{
            right = mid;
        }
    }
    if(target === matrixLong[left]||target === matrixLong[right]){
        return true;
    }
    return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))