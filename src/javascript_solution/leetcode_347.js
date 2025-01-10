/**
给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    if (!map.get(cur)) {
      map.set(cur, 1);
    } else {
      map.set(cur, map.get(cur) + 1);
    }
  }
  nums.sort((a,b)=>map.get(b)-map.get(a))
  return [...new Set(nums)].slice(0, k);
};

var topKFrequent = function (nums, k) {
  // 使用数组存储频率
  // 由于频率最大为nums.length，所以数组长度为nums.length+1
  // 由于频率最小为1，所以数组下标从1开始
  // 数组下标为频率，数组值为频率对应的元素
  const freq = new Array(nums.length + 1).fill(0).map(() => []);
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    if (!map.get(cur)) {
      map.set(cur, 1);
    } else {
      map.set(cur, map.get(cur) + 1);
    }
  }
  for (let [key, value] of map) {
    freq[value].push(key);
  }
  const res = [];
  for (let i = nums.length; i > 0; i--) {
    if (freq[i].length > 0) {
      res.push(...freq[i]);
    }
    if (res.length >= k) {
      break;
    }
  }
  return res;
}

console.log(topKFrequent([1,1,1,2,2,3], 2)) // [1, 2]
console.log(topKFrequent([1], 1)) // [1]
console.log(topKFrequent([-1,-1], 1)) // [-1]
console.log(topKFrequent([1,2], 2)) // [1, 2]
console.log(topKFrequent([4,1,-1,2,-1,2,3], 2)) // [-1, 2]
