/*
 * @lc app=leetcode.cn id=3289 lang=javascript
 *
 * [3289] 数字小镇中的捣蛋鬼
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  let obj = {},
    res = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num in obj) {
      res.push(num);
    } else {
      obj[num] = i;
    }
  }
  return res;
};
// @lc code=end
