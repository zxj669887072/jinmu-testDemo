/*
 * @lc app=leetcode.cn id=3274 lang=javascript
 *
 * [3274] 检查棋盘方格颜色是否相同
 */

// @lc code=start
/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
  /* let l1 = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let curColor = "black";
  let obj = {
    [coordinate1]: "",
    [coordinate2]: "",
  };

  for (let i = 0; i < l1.length; i++) {
    for (let j = 1; j < 9; j++) {
      let key = `${l1[i]}${j}`;
      if (key in obj) {
        obj[key] = curColor;
      }
      if (obj[coordinate1] && obj[coordinate2]) {
        return obj[coordinate1] === obj[coordinate2];
      }

      if (j !== 8) {
        curColor = curColor === "black" ? "white" : "black";
      }
    }
  } */

  /*  */
  const calcPointColor = (coordinate) => {
    const [x,y] = coordinate.split("");
    const xIndex = (x.charCodeAt(0) - "a".charCodeAt(0)) % 2;
    const yIndex = (y - 1) % 2;
    return (xIndex + yIndex) % 2 === 0 ? "black" : "white";
  }

  return calcPointColor(coordinate1) === calcPointColor(coordinate2);
};
// @lc code=end
console.log(checkTwoChessboards("a1", "c3"), "\n\n");
console.log(checkTwoChessboards("a1", "h3"), "\n\n");
