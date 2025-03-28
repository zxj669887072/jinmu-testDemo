/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let ln = nums.length;
  if (ln < 2) return false;
  
  let obj = {},
    res = false;
  for (var i = 0; i < ln; i++) {
    let num = nums[i];
    if (num in obj) {
      res = true;
      break;
    } else {
      obj[num] = i;
    }
  }
  return res;
};
// @lc code=end
