/*
 * @lc app=leetcode.cn id=1276 lang=javascript
 *
 * [1276] 不浪费原料的汉堡制作方案
 */

// @lc code=start
/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
  if(tomatoSlices === 0 && cheeseSlices === 0) return [0,0];

  if(tomatoSlices === 0 || cheeseSlices === 0) return [];

  if(tomatoSlices <= cheeseSlices) return [];

  if(tomatoSlices % 2)  return [];

  let total_jumbo = 0, total_small = 0;
  total_small = 2*cheeseSlices - tomatoSlices /2;
  total_jumbo = cheeseSlices - total_small;
  if(total_jumbo >=0 && total_small >= 0){
    return [total_jumbo, total_small];
  }else{
    return []
  }
};
// @lc code=end

console.log(numOfBurgers(7,3));
console.log(numOfBurgers(0,0));
console.log(numOfBurgers(10,0));

console.log(numOfBurgers(16,7));
console.log(numOfBurgers(2,1));

