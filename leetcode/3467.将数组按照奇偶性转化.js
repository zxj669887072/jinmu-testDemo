/*
 * @lc app=leetcode.cn id=3467 lang=javascript
 *
 * [3467] 将数组按照奇偶性转化
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
  return nums.map((n) => n % 2).sort((a, b) => a - b);
};
// @lc code=end

console.log(transformArray([4, 3, 2, 1]), "\n\n"); // [0,0,1,1]
console.log(transformArray([1, 5, 1, 4, 2]), "\n\n"); // [0,0,1,1,1]
