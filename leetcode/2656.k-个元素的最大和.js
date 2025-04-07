/*
 * @lc app=leetcode.cn id=2656 lang=javascript
 *
 * [2656] K 个元素的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  return Math.max(...nums) * k + (k * (k - 1)) / 2;
};
// @lc code=end
