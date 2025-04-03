/*
 * @lc app=leetcode.cn id=3248 lang=javascript
 *
 * [3248] 矩阵中的蛇
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
  let x = 0,
    y = 0;
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];
    switch (command) {
      case "UP":
        y -= 1;
        break;

      case "DOWN":
        y += 1;
        break;

      case "LEFT":
        x -= 1;
        break;

      case "RIGHT":
        x += 1;
        break;

      default:
        break;
    }
  }
  return y * n + x;
};
// @lc code=end

console.log(finalPositionOfSnake(2, ["RIGHT", "DOWN"]));
console.log(finalPositionOfSnake(3, ["DOWN", "RIGHT", "UP"]));
// console.log(finalPositionOfSnake(2,[]))
