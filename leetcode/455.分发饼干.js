/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  if (g[0] > s[s.length - 1]) return 0;

  let res = 0,
    i = 0;
  for (let j = 0; j < g.length; j++) {
    while (i < s.length) {
      if (s[i] >= g[j]) {
        res++;
        i++;
        break;
      } else {
        i++;
      }
    }
    if (i === s.length || j === g.length - 1) break;
  }

  // let res = 0;
  // for (let j = 0; j < g.length; j++) {
  //   while (s.length) {
  //     if (s.shift() >= g[j]) {
  //       res++;
  //       break;
  //     }
  //   }
  //   if (!s.length || j === g.length - 1) break;
  // }

  return res;
};
// @lc code=end

// console.log(findContentChildren([1, 2, 3], [1, 1]));
// console.log(findContentChildren([1, 2], [1, 2, 3]));
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
