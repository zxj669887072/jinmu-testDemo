/*
 * @lc app=leetcode.cn id=3264 lang=javascript
 *
 * [3264] K 次乘运算后的最终数组 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  const findMin = (nums) => {
    let index = 0;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[index]) {
        index = i;
      }
    }
    return index;
  };

  for (let i = 0; i < k; i++) {
    let minIndex = findMin(nums);
    nums[minIndex] *= multiplier;
  }

  return nums;
};
// @lc code=end

console.log(getFinalState([1, 2, 3, 4, 5], 2, 3)); 
console.log(getFinalState([10, 1, 10, 1, 10], 3, 2)); 
console.log(getFinalState([2, 1, 3, 5, 6], 5, 2));
console.log(getFinalState([1, 2], 3, 4));
