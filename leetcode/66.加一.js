/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let ln = digits.length;

  if (ln === 1) {
    if (digits[0] === 9) {
      return [1, 0];
    } else {
      digits[0]++;
      return digits;
    }
  }

  let add = 1;
  for (let i = ln - 1; i >= 0; i--) {
    digits[i] += add;
    if (digits[i] === 10) {
      digits[i] = 0;
      add = 1;
    } else {
      add = 0;
      break;
    }
  }

  if (add === 1) {
    digits.unshift(1);
  }
  return digits;
};
// @lc code=end

console.log(plusOne([1, 2, 4]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));
