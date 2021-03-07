/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if(n === 1){return true};

  function getNext(x){
    let z = 0;
    while(x){
      z += (x%10) * (x%10);
      x = Math.floor(x/10)
    }
    return z;
  }

  let p = n,q = getNext(n);
  while(q !==1 && q != p){
    p = getNext(p);
    q = getNext(getNext(q))
  };
  return q == 1
  
};
// @lc code=end
console.log(isHappy(100))
let sum = 0;
for(let i = 0;i<= 100000;i++){
  if(isHappy(i)){
    sum += i
  }
};
console.log(sum);
