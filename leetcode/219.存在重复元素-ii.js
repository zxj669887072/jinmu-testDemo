/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let ln = nums.length;
  if (ln < 2) return false;

  let obj = {},
    res = false;
  for (var i = 0; i < ln; i++) {
    let num = nums[i];
    if (num in obj) {
      if (i - obj[num] <= k) {
        res = true;
        break;
      } else {
        // 这里不需要删除，直接覆盖就可以了
        obj[num] = i; // 更新索引
      }
    } else {
      obj[num] = i;
    }
  }
  return res;
};
// @lc code=end
