/*
 * @lc app=leetcode.cn id=2678 lang=javascript
 *
 * [2678] 老人的数目
 */

// @lc code=start
/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    return details.filter(item => item.slice(11, 13) > 60).length;
};
// @lc code=end

