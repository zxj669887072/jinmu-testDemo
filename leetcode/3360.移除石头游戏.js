/*
 * @lc app=leetcode.cn id=3360 lang=javascript
 *
 * [3360] 移除石头游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function (n) {
  if (n < 10) return false;      
  
  let r = 10;
  while(n >0){
    n -= r--; // Alice removes r stones
    if(n < r) return true; // Alice wins
    n -= r--; // Bob removes r stones
    if(n < r) return false; // Bob wins
  }
};
// @lc code=end

for (let i = 1; i <= 50; i++) {
  console.log(i, canAliceWin(i));
}

