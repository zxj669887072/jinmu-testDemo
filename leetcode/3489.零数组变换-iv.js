/*
 * @lc app=leetcode.cn id=3489 lang=javascript
 *
 * [3489] 零数组变换 IV
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function (nums, queries) {
  if(nums.every(n => n === 0)){
    return 0;
  }

  let ln = nums.length;
  const numsObj = {};
  for (let j = 0; j < ln; j++) {
    numsObj[j + "" + nums[j]] = { [nums[j]]: 1 };
  }  const checkZero = () => Object.keys(numsObj).every((n) => numsObj[n][0]);

  for (let i = 0, ln2 = queries.length; i < ln2; i++) {
    const [l, r, v] = queries[i];
    for (let j = l; j <= r; j++) {
      let numKey = j + "" + nums[j];
      if (!numsObj[numKey][0]) {
        // 当前位，可以变换为零
        if (numsObj[numKey][v] || nums[j] === v) {
          numsObj[numKey][0] = 1;

          if (checkZero()) {
            // console.log("cz--1",i,j, JSON.parse(JSON.stringify(numsObj, null, 2)));
            return i + 1;
          }
          continue;
        }

        Object.keys(numsObj[numKey]).forEach((lastV) => {
          if (lastV >= v) {
            numsObj[numKey][lastV - v] = 1;
          }
        });
        if (nums[j] >= v) {
          numsObj[numKey][nums[j] - v] = 1;
        }
      }
    }
  }
  // console.log("numsObj", numsObj);
  return -1;
};
// @lc code=end

console.log(minZeroArray([1, 2, 3, 2, 1], [[0, 1, 1],[1, 2, 1],[2, 3, 2],[3, 4, 1],[4, 4, 1],]), '\n\n'); // 4
console.log(  minZeroArray( [2,0,2], [[0,2,1],[0,2,1],[1,1,3]]), '\n\n\n' ); // 2
console.log(  minZeroArray(  [4,3,2,1], [[1,3,2],[0,2,1]]), '\n\n' ); // -1
console.log(  minZeroArray( [1,2,3,2,6], [[0,1,1],[0,2,1],[1,4,2],[4,4,4],[3,4,1],[4,4,5]]), '\n\n' ); // 4
console.log(  minZeroArray( [2], [[0,0,6],[0,0,2],[0,0,9],[0,0,5],[0,0,10]]), '\n\n' ); // 2
console.log(  minZeroArray( [10], [[0,0,4],[0,0,8],[0,0,1],[0,0,10],[0,0,10]]), '\n\n\n' ); // 4
console.log(minZeroArray( [9], [[0, 0, 7],[0, 0, 3],[0, 0, 8],[0, 0, 3],[0, 0, 6],[0, 0, 5],]), '\n\n'); // 5

console.log(minZeroArray([3,8], 
  [[0,1,1],[0,1,10],[0,1,3],[1,1,6],[0,1,7],
  [0,0,1],[0,0,10],[1,1,5],[1,1,1]]), '\n\n'
); // 5    1.[3,7]  3.[0, 7]  5.[0,0]

console.log(minZeroArray( [0], [[0, 0, 1]]), '\n\n'); // 5
