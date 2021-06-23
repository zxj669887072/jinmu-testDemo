/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let obj = {},res = [];
  for (var i = 0; i < nums.length; i++){
    let num = nums[i];
    if(num in obj){
      res = [obj[num],i];
      break;
    }else{
      obj[target-num] = i;
    }
  };
  return res;
};
// @lc code=end

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));

