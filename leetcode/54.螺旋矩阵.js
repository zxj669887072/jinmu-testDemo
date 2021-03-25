/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let ret = [];
  if(matrix.length === 0) return ret;
  let row = matrix.length,col = matrix[0].length,i = 0, j = 0, l = 1;

  while(ret.length < row*col){
    while(j >= l -1 && j <= col - l){
      // console.log(`top:${i}-${j}`);
      ret.push(matrix[i][j]);
      j++;      
    };
    // console.log(`i=${i};j=${j}\n`);

    i++;
    j--;
    while(i >= l && i <= row- l && ret.length < row*col){
      // console.log(`right:${i}-${j}`);
      ret.push(matrix[i][j]);
      i++;      
    }
    // console.log(`i=${i};j=${j}\n`);

    i--;
    j--;
    while(j >= l -1 && j <= col -l-1 && ret.length < row*col){
      // console.log(`bottom:${i}-${j}`);
      ret.push(matrix[i][j]);
      j--;
    }
    // console.log(`bottom--i=${i};j=${j}\n`);

    i--;
    j++;
    while(i >= l && i <= row-l && ret.length < row*col){
      // console.log(`left:${i}-${j}`);
      ret.push(matrix[i][j]);
      i--;
    }
    // console.log(`i=${i};j=${j}\n`);

    i++;
    j++;
    l++;
    // console.log(ret);
  }
  return ret;
};
// @lc code=end

