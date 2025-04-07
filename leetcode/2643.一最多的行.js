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
    max = 0,
    ln = mat.length;
  for (let i = 0; i < ln; i++) {
    let count = mat[i].reduce((a, b) => {
      b === 1 && a++;
      return a;
    }, 0);
    if (count > max) {
      max = count;
      index = i;
    }
  }

  return [index, max];
};
// @lc code=end
console.log(rowAndMaximumOnes([[0,1],[1,0]]));
console.log(rowAndMaximumOnes([[0,0,0],[0,1,1]]));
console.log(rowAndMaximumOnes([[0,0],[1,1],[0,0]]));