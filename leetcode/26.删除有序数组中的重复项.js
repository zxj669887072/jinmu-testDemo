/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let ln = nums.length;
  if (ln === 1) return 1;

  let lastI = 0,
    lastVal = nums[0];
  for (let i = 1; i < ln; i++) {
    let val = nums[i];
    if (val !== lastVal) {
      lastI++;
      nums[lastI] = val;
      lastVal = val;
    }
  }

  return lastI + 1;
};
// @lc code=end
