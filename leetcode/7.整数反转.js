/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let result = 0,isLt0 = false;
  if(x === 0){result = 0};
  if(x < 0){
    isLt0 = true;
    x *= -1;
  };
  result = Number((x+'').split('').reverse().join(""));
  if(isLt0){
    result *= -1;
  }
  if(result > Math.pow(2,31) -1 || result < Math.pow(2,31) * -1){
    return 0
  }
  return result
};
console.log(reverse(-123));
// @lc code=end

