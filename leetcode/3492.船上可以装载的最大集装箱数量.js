/*
 * @lc app=leetcode.cn id=3492 lang=javascript
 *
 * [3492] 船上可以装载的最大集装箱数量
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
var maxContainers = function (n, w, maxWeight) {
  return Math.min(n * n, Math.floor(maxWeight / w));
};
// @lc code=end
