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
  if (nums.length === 1) return nums[0];

  /* let obj = {};
  for (let i = 0; i < ln; i++) {
    let num = nums[i];
    if (num in obj) {
      delete obj[num];
    } else {
      obj[num] = i;
    }
  }
  return +Object.keys(obj)[0]; */

  /* nums.sort((a, b) => a - b);
  for (let i = 0; i < ln; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
  return nums[ln - 1]; */

  return nums.reduce((a, b) => a ^ b, 0);

  // let result = 0;
  // for (const num of nums) {
  //   result ^= num; // 异或运算消去重复项
  // }
  // return result;
};
// @lc code=end

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
