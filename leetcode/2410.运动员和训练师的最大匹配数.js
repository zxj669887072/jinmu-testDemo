/*
 * @lc app=leetcode.cn id=2410 lang=javascript
 *
 * [2410] 运动员和训练师的最大匹配数
 */

// @lc code=start
/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);
  if (players[0] > trainers[trainers.length - 1]) return 0;

  let res = 0,
    i = 0;
  for (let j = 0; j < players.length; j++) {
    while (i < trainers.length) {
      if (trainers[i] >= players[j]) {
        res++;
        i++;
        break;
      } else {
        i++;
      }
    }
    if (i === trainers.length || j === players.length - 1) break;
  }

  return res
};
// @lc code=end

// console.log(matchPlayersAndTrainers([4,7,9], [8,2,5,8]));
// console.log(matchPlayersAndTrainers([1,1,1], [10,2,3,4]));
// console.log(matchPlayersAndTrainers([1,1,1], [10]));
console.log(matchPlayersAndTrainers([1,1,1], [2,2,2]));

