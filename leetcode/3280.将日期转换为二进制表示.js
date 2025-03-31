/*
 * @lc app=leetcode.cn id=3280 lang=javascript
 *
 * [3280] 将日期转换为二进制表示
 */

// @lc code=start
/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  return date
    .split("-")
    .map((d) => (+d).toString(2))
    .join("-");
};
// @lc code=end
