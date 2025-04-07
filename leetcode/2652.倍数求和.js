/*
 * @lc app=leetcode.cn id=2652 lang=javascript
 *
 * [2652] 倍数求和
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  // return new Array(n)
  //   .fill(0)
  //   .reduce(
  //     (a, b, idx) =>
  //       [3, 5, 7].some((i) => (idx + 1) % i === 0) ? a + idx + 1 : a,
  //     0
  //   );
  let res = 0;
  for(let i = 1; i <= n; i++) {
    if(i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      res += i;
    }
  }
  return res;
  
};
// @lc code=end
