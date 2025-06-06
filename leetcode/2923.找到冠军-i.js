/*
 * @lc app=leetcode.cn id=2923 lang=javascript
 *
 * [2923] 找到冠军 I
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

/* let obj = {},n = grid.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !obj[j]) {
        obj[j] = 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!obj[i]) {
      return i;
    }
  } */

/* let obj = {},n = grid.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    res += i;
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !obj[j]) {
        obj[j] = 1;
        res -= j;
      }
    }
  }
  return res; */

var findChampion = function (grid) {
  let n = grid.length, res = 0;
  for (let i = 0; i < n; i++) {
    res += i;
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !grid[j].f) {
        grid[j].f = 1;
        res -= j;
      }
    }
  }
  return res;
};
// @lc code=end

console.log(
  findChampion([
    [0, 1],
    [0, 0],
  ])
); // 0
console.log(
  findChampion([
    [0, 0, 1],
    [1, 0, 1],
    [0, 0, 0],
  ])
); // 1

// [0][1],[0][2],[0][3], [1][4],[2][5],[3][6], [4][7],[5][8],[6][9]
console.log(
  findChampion([
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
); // 0

console.log(
  findChampion([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  ])
); // 9
