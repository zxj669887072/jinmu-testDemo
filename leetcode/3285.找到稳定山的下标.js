/*
 * @lc app=leetcode.cn id=3285 lang=javascript
 *
 * [3285] 找到稳定山的下标
 */

// @lc code=start
/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function (height, threshold) {
  let res = [];
  let ln = height.length;
  for (let i = 0; i < ln - 1; i++) {
    const h = height[i];
    if (h > threshold) {
      res.push(i + 1);
    }
  }

  return res;
};
// @lc code=end

console.log(stableMountains([1, 2, 3, 4, 5], 2));
console.log(stableMountains([10, 1, 10, 1, 10], 3));
console.log(stableMountains([10, 1, 10, 1, 10], 10));
