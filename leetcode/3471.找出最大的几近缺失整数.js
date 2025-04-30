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
  let ln = nums.length,
    filterObj = {};

  if (k === 1) {
    let res = -1;
    for (let i = 0; i < ln; i++) {
      if (filterObj[nums[i]] === 2) {
        continue;
      }
      if (nums[i] in filterObj) {
        filterObj[nums[i]]++;
      } else {
        filterObj[nums[i]] = 1;
      }
    }
    for (let key in filterObj) {
      if (filterObj[key] === 1) {
        res = Math.max(res, key);
      }
    }
    return res;
  }

  if (k === ln) {
    return Math.max(...nums);
  }

  if (nums[0] === nums[ln - 1]) {
    return -1;
  }

  for (let i = 1; i < ln - 1; i++) {
    filterObj[nums[i]] = 1;
  }
  // console.log(filterObj,filterObj[nums[0]],filterObj[nums[ln - 1]]);
  

  if (filterObj[nums[0]] && filterObj[nums[ln - 1]]) {
    return -1;
  }

  if (!filterObj[nums[0]] && !filterObj[nums[ln - 1]]) {
    return Math.max(nums[0], nums[ln - 1]);
  }

  return filterObj[nums[0]] ? nums[ln - 1] : nums[0];
};
// @lc code=end
console.log(largestInteger([3, 9, 2, 1, 7], 3), "\n\n"); // 7
console.log(largestInteger([3, 9, 7, 2, 1, 7], 4), "\n\n"); // 3
console.log(largestInteger([0, 0], 1), "\n\n"); // -1
console.log(largestInteger([0, 0], 2), "\n\n"); // 0
console.log(largestInteger([0, 50], 1), "\n\n"); // 50
console.log(largestInteger([8, 1, 8], 3), "\n\n"); // 8
console.log(largestInteger([8, 1, 8, 1], 1), "\n\n"); //
console.log(largestInteger([8, 1, 8, 1, 0], 1), "\n\n"); //
console.log(largestInteger([8, 1, 8, 1, 8, 9], 1), "\n\n"); //
console.log(largestInteger([10, 12, 9, 7, 10], 3), "\n\n"); // -1
