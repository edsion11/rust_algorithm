/**
 * 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
 *
 * 0 <= i, j, k, l < n
 * nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
// var fourSumCount = function(nums1, nums2, nums3, nums4) {
//   let res = 0;
//   const map = new Map();
//   for(let i = 0; i < nums1.length; i++) {
//     for(let j = 0; j < nums2.length; j++) {
//       for(let k = 0; k < nums3.length; k++) {
//         for(let l = 0; l < nums4.length; l++) {
//           const sum = nums1[i] + nums2[j] + nums3[k] + nums4[l];
//           const key = [i,j,k,l].join(',');
//           if (sum === 0 && !map.has(key)) {
//             res++;
//             map.set(key, true);
//           }
//         }
//       }
//     }
//   }
//   console.log(map)
//   return res;
// };

// 改进
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let res = 0
  const arr1 = [];
  const arr2 = []
  // 这里不应该用数组，因为生成的数组长度是n^2，再次便利的时候时间复杂度还是变成n^4
  // 要灵活运用哈希表，将时间复杂度降低

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      arr1.push(nums1[i]+nums2[j])
      arr2.push(nums3[i]+nums4[j])
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] + arr2[j] === 0) {
        res++
      }
    }
  }
  return res
}

// 优化：使用哈希表
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const map = new Map();
    let count = 0;
    // 第一次遍历，时间复杂度O(n^2)
    for(const n1 of nums1) {
        for(const n2 of nums2) {
            const sum = n1 + n2;
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }
    // 第二次遍历，时间复杂度O(n^2)
    for(const n3 of nums3) {
        for(const n4 of nums4) {
            const sum = -(n3 + n4);
            if(map.has(sum)) {
                count += map.get(sum);
            }
        }
    }
    return count;
};

// test case
console.log(fourSumCount([1,2], [-2,-1], [-1,2], [0,2])); // 2
