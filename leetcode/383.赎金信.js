/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let ln1 = ransomNote.length,
    ln2 = magazine.length;
  if (ln1 > ln2) return false;

  const letterObj = [...magazine].reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  for (let i = 0; i < ln1; i++) {
    if (letterObj[ransomNote[i]]) {
      letterObj[ransomNote[i]]--;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end
