/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let ln = nums.length;
  if (ln === 0) return 0;

  let removeIndexList = [], leftIndexList = [];
  for (let i = 0; i < ln; i++) {
    const v = nums[i];
    if (v === val) {
      removeIndexList.push(i);
    }else{
      leftIndexList.unshift(i)
    }
  }

  // 删除的数量
  let removeElementCount = removeIndexList.length;

  // 无删除，返回
  if (removeElementCount === 0) return ln;

  // 剩余的元素数
  let res = ln - removeElementCount;

  // 可移动的元素次数
  let moveNum = Math.min(res, removeElementCount);


  if (moveNum > 0) {
    for (let i = 0; i < moveNum; i++) {
      let moveIndex = leftIndexList.shift(), removeIndex = removeIndexList[i];
      if (moveIndex < removeIndex) {
        break;
      }
      nums[removeIndex] = nums[moveIndex];
    }
  }

  // console.log("nums", nums);
  return res;
};
// @lc code=end
let nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;
console.log(removeElement(nums, val));
