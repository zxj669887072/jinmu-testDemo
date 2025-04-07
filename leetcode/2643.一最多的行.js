/*
 * @lc app=leetcode.cn id=2643 lang=javascript
 *
 * [2643] 一最多的行
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let index = 0,
    max = 0;
  for (let i = 0, ln = mat.length; i < ln; i++) {
    let count = 0;
    for (let j = 0, l = mat[i].length; j < l; j++) {
      mat[i][j] === 1 && count++;
    }
    if (count > max) {
      max = count;
      index = i;
    }
  }

  return [index, max];
};
// @lc code=end
console.log(
  rowAndMaximumOnes([[0, 1],[1, 0],])
);
console.log(
  rowAndMaximumOnes([[0, 0, 0],[0, 1, 1],])
);
console.log(
  rowAndMaximumOnes([[0, 0],[1, 1],[0, 0],])
);
