/*
 * @lc app=leetcode.cn id=2717 lang=javascript
 *
 * [2717] 半有序排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
  let n = nums.length;
  let startSort = nums[0] === 1,
    endSort = nums[n - 1] === n;
  if (startSort && endSort) return 0;

  let res = 0;
  for (let i = 0; i < n - 1; i++) {
    if (!endSort && nums[i] === n) {
      let j = i;
      while (j < n - 1) {
        nums[j] = nums[j + 1];
        nums[j + 1] = n;
        j++;
        res++;
      }
      if (startSort) return res;
      endSort = true;
    }

    if (!startSort && nums[i] === 1) {
      let j = i;
      while (j > 0) {
        nums[j] = nums[j - 1];
        nums[j - 1] = 1;
        j--;
        res++;
      }
      if (endSort) return res;
      startSort = true;
    }
  }

  // return res;
};
// @lc code=end
console.log(semiOrderedPermutation([2, 1, 4, 3]), "\n\n"); // 2
console.log(semiOrderedPermutation([2, 4, 1, 3]), "\n\n"); // 3
console.log(semiOrderedPermutation([1, 3, 4, 2, 5]), "\n\n"); // 0
