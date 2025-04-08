/*
 * @lc app=leetcode.cn id=2682 lang=javascript
 *
 * [2682] 找出转圈游戏输家
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n, k) {
  if(n === 1) return [];

  let curr = 1,
    round = 1,
    obj = { 1: 1 };
  while (1) {
    // console.log(curr, round, k * round);
    let next = curr + ((k * round) % n);
    next = next > n ? next - n : next;
    if (!obj[next]) {
      obj[next] = 1;
      round++;
      curr = next;
    } else {
      break;
    }
  }
  // console.log(obj);

  let res = [];
  for (let i = 1; i <= n; i++) {
    if (!obj[i]) {
      res.push(i);
    }
  }
  return res;
};
// @lc code=end
console.log(circularGameLosers(5, 2)); // [4,5]
console.log(circularGameLosers(4, 4)); // [2, 3, 4]
console.log(circularGameLosers(1,1)); // []
console.log(circularGameLosers(50,18)); // []
