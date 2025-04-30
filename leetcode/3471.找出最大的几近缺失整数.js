/*
 * @lc app=leetcode.cn id=3471 lang=javascript
 *
 * [3471] 找出最大的几近缺失整数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums, k) {
  let obj = {};
  for (let i = 0, ln = nums.length; i < ln; i++) {
    if (i + k > ln) {
      break;
    }

    // console.log(i, nums.slice(i, i + k));
    let arr = nums.slice(i, i + k);
    // let arr = [...new Set(nums.slice(i, i + k))];
    let _map = {}
    for (let j = 0, ln = arr.length; j < ln; j++) {
      if(arr[j] in _map || obj[arr[j]] >=2 ) {
        continue;
      }
      _map[arr[j]] = 1;
      if (arr[j] in obj) {
        obj[arr[j]]++;
      } else {
        obj[arr[j]] = 1;
      }
    }
  }
  // console.log(obj);

  let res = -1;
  for (let key in obj) {
    if (obj[key] === 1) {
      res = Math.max(res, key);
    }
  }
  return res
};
// @lc code=end
console.log(largestInteger([3, 9, 2, 1, 7], 3), "\n\n\n"); // 7
console.log(largestInteger([3, 9, 7, 2, 1, 7], 4), "\n\n\n"); // 3
console.log(largestInteger([0, 0], 1), "\n\n\n"); // -1
console.log(largestInteger([0, 0], 2), "\n\n\n"); // 0
console.log(largestInteger([0, 50], 1), "\n\n\n"); // 50
console.log(largestInteger([8, 1, 8], 3), "\n\n\n"); // 8
