/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ln = nums.length;
  if (ln === 1) return nums[0];

  let obj = {};
  for (let i = 0; i < ln; i++) {
    let num = nums[i];
    if (num in obj) {
      delete obj[num];
    } else {
      obj[num] = i;
    }
  }
  return +Object.keys(obj)[0];
};
// @lc code=end

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4,1,2,1,2]));