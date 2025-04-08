/*
 * @lc app=leetcode.cn id=2706 lang=javascript
 *
 * [2706] 购买两块巧克力
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  // prices.sort((a, b) => a - b);
  // let total = prices[0] + prices[1];
  // return money >= total ? money - total : money;

  let res = -1;
  for (let i = 0, ln = prices.length; i < ln - 1; i++) {
    if (prices[i] >= money) {
      continue;
    }

    for (let j = i + 1; j < ln; j++) {
      let total = prices[i] + prices[j];
      if (total <= money) {
        res = Math.max(res, money - total);
      }
    }
  }
  return res === -1 ? money : res;
};
// @lc code=end
console.log(buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62)); // 22
console.log(buyChoco([3, 2, 3], 3)); // 3
console.log(buyChoco([1, 2, 2], 3)); // 0
