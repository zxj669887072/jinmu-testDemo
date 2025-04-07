/*
 * @lc app=leetcode.cn id=2670 lang=javascript
 *
 * [2670] 找出不同元素数目差数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
  /* const n = nums.length;
  let res = [];
  const findListDifferenceCount = (list) => {
    let set = new Set(list);
    return set.size;
  };

  for (let i = 0; i < n; i++) {
    let left = nums.slice(0, i + 1);
    let right = nums.slice(i + 1, n);
    res.push(findListDifferenceCount(left) - findListDifferenceCount(right));
  }
  return res; */

  const n = nums.length;
  if(n === 1) return [1]; // 特例处理，只有一个元素时

  const pre = new Array(n); // 前缀不同元素数目数组
  const suf = new Array(n); // 后缀不同元素数目数组
  const diff = new Array(n); // 结果数组

  // 计算前缀数组 pre[i] = [0..i] 的不同元素数
  const setPre = new Set();
  for (let i = 0; i < n; i++) {
    setPre.add(nums[i]);
    pre[i] = setPre.size;
  }

  // 计算后缀数组 suf[i] = [i..n-1] 的不同元素数
  const setSuf = new Set();
  for (let i = n - 1; i >= 0; i--) {
    suf[i] = setSuf.size;
    i !== 0 && setSuf.add(nums[i]);
  }

  // 计算每个位置的差值
  for (let i = 0; i < n; i++) {
    // const suffix = i + 1 < n ? suf[i + 1] : 0; // 处理越界情况
    const suffix = suf[i];
    diff[i] = pre[i] - suffix;
  }

  return diff;
};
// @lc code=end
// console.log(distinctDifferenceArray([1, 2, 3, 4, 5])); // [-3,-1,1,3,5]
console.log(distinctDifferenceArray([3, 2, 3, 4, 2])); // [-2,-1,0,2,3]
// console.log(distinctDifferenceArray([3])); // 1
// console.log(distinctDifferenceArray([39])); // 1
// console.log(distinctDifferenceArray([3,9])); // [0,2]
// console.log(distinctDifferenceArray([3,3])); // [0,1]
