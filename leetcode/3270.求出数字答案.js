/*
 * @lc app=leetcode.cn id=3270 lang=javascript
 *
 * [3270] 求出数字答案
 */

// @lc code=start
/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
  let key = "";
  /* let numList = [num1, num2, num3].map((n) => (n + "").padStart(4, "0"));
  for (let i = 0; i < 4; i++) {
    key += Math.min(numList[0][i], numList[1][i], numList[2][i]);
  }
  */

  // for (let i = 0; i < 4; i++) {
  //   key += Math.min(
  //     num1.toString().padStart(4, "0")[i],
  //     num2.toString().padStart(4, "0")[i],
  //     num3.toString().padStart(4, "0")[i]
  //   );
  // }

  for (let i = 0; i < 4; i++) {
    key += Math.min(
      Math.floor(num1 / Math.pow(10, 3 - i)) % 10,
      Math.floor(num2 / Math.pow(10, 3 - i)) % 10,
      Math.floor(num3 / Math.pow(10, 3 - i)) % 10
    );
  }

  return +key;
};
// @lc code=end

console.log(generateKey(1, 10, 1000));
console.log(generateKey(987, 879, 798));
console.log(generateKey(1, 2, 3));
