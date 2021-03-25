/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let list = [],obj = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  for(const key of s){
    if(!obj.hasOwnProperty(key)){
      list.push(key);
    }else{
      // if(list.length === 0){return false}
      if(list.pop() !== obj[key]) return false;
    }
  }
  return list.length === 0;
};
// @lc code=end

console.log((isValid('()')));       //true
console.log((isValid(']()')));      // false
console.log((isValid('(]')));       //false
console.log((isValid('()[]{}')));   //true
console.log((isValid('([)]')));     // false
console.log((isValid('{[]}')));     // true

