/*
 * @lc app=leetcode.cn id=3477 lang=javascript
 *
 * [3477] 将水果放入篮子 II
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    // console.time("n");
  let maxBasket = Math.max(...baskets),minBasket = Math.min(...baskets);
  let maxFruit = Math.max(...fruits),minFruit = Math.min(...fruits);
  if(maxBasket < minFruit) return fruits.length;
  if(minBasket >= maxFruit) return 0;

  let res = 0;
  let minNoMatchFruit = -1;
  for (let i = 0, fn = fruits.length; i < fn; i++) {
    let fruit = fruits[i];

    // 当前水果不小于 最小未匹配水果
    if (minNoMatchFruit !== -1 && fruit >= minNoMatchFruit) {
      res++;
      continue;
    }

    for (let j = 0, bn = baskets.length; j < bn; j++) {
      // let basket = baskets[j];
      if (baskets[j] >= fruit) {
        // baskets[j] = -1;
        baskets.splice(j, 1);
        break;
      }

      if (j === bn - 1) {
        // 更新最小的未匹配水果
        minNoMatchFruit = Math.min(minNoMatchFruit, fruit);
        res++;
      }
    }
  }

  // console.timeEnd("n");
  return res;
};
// @lc code=end

