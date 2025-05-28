/*
 * @lc app=leetcode.cn id=3356 lang=javascript
 *
 * [3356] 零数组变换 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
  /* if(nums.every(n => n === 0)){
    return 0;
  }
   */

  console.time("isZeroArray");
  function isPossible(nums, queries, k) {
    const n = nums.length;
    let diff = new Array(n + 1).fill(0);

    for (let i = 0; i < k; i++) {
      const [l, r, val] = queries[i];
      diff[l] += val;
      if (r + 1 < n) {
        diff[r + 1] -= val;
      }
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += diff[i];
      if (sum < nums[i]) {
        return false;
      }
    }

    return true;
  }

  function allZero(arr) {
    for (let num of arr) {
      if (num !== 0) return false;
    }
    return true;
  }

  if (allZero(nums)) {
    console.timeEnd("isZeroArray");
    return 0
  };

  let left = 0,
    right = queries.length,
    ans = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log('mid',mid,left,right)
    if (isPossible(nums, queries, mid)) {
      console.log('isPossible',mid)
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  console.timeEnd("isZeroArray");
  return ans;

};
// @lc code=end
console.log(minZeroArray([2,0,2], [[0,2,1],[0,2,1],[1,1,3]]),'\n\n'); // 2
console.log(minZeroArray([4,3,2,1], [[1,3,2],[0,2,1]]),'\n\n'); // -1
console.log(minZeroArray([0,0,0,0], [[1,3,2],[0,2,1]]),'\n\n'); // 0
console.log(minZeroArray( new Array(100000).fill(100000), new Array(100000).fill([0,99999,1])), '\n\n'); // 
console.log(minZeroArray( new Array(100000).fill(0).map((n,i) => i === 99999 ? 500000 : n), 
  new Array(100000).fill([1,3,2])), '\n\n'
); // 