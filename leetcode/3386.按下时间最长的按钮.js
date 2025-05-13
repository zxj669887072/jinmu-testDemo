/*
 * @lc app=leetcode.cn id=3386 lang=javascript
 *
 * [3386] 按下时间最长的按钮
 */

// @lc code=start
/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function (events) {
  /* // let obj = {};
  let maxTime = 0,
    res = 0;
  for (let i = 0, ln = events.length; i < ln; i++) {
    const [index, time] = events[i];
    if (i === 0) {
      // obj[index] = time;
      maxTime = time;
      res = index;
    } else {
      let curTime = time - events[i - 1][1];
      // obj[index] = curTime;
      if (curTime > maxTime) {
        maxTime = curTime;
        res = index;
      } else if (curTime === maxTime) {
        // res = Math.min(res, index);
        index < res && (res = index);
      }
    }
  }
  // console.log(obj, maxTime, res);
  return res; */


  let maxTime = events[0][1],
    res = events[0][0];
  for (let i = 1, ln = events.length; i < ln; i++) {
    const [index, time] = events[i];
    let curTime = time - events[i - 1][1];
    if (curTime > maxTime) {
      maxTime = curTime;
      res = index;
    } else if (curTime === maxTime) {
      index < res && (res = index);
    }
  }
  return res;
};
// @lc code=end
console.log(buttonWithLongestTime([[1, 2],[2, 5],[3, 9],[1, 15],]),"\n\n");
console.log(buttonWithLongestTime([[10, 5],[1, 7],]),"\n\n");
console.log(buttonWithLongestTime([[10, 5],[1, 7],[4, 14],[3, 15],[2, 22],]),"\n\n");
