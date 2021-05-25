/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const arr = Array(1001).fill(0);
  for (let i = 0; i < arr1.length; i++){
    arr[arr1[i]] ++;
  };
  let res = [];
  for (let i = 0; i < arr2.length; i++){
    if(arr[arr2[i]] >0){
      while(arr[arr2[i]]--){
        res.push(arr2[i]);
      }
    }
  };

  for (let i = 0; i < arr.length; i++){
    if(arr[i]>0){ //console.log(i,arr[i]);
      while(arr[i]--){
        res.push(i);
      }
    }
  };
  return res;
};
// @lc code=end

