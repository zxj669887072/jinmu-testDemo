/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let res = [0];
  function depT(root,key,res){
    if(!root) return;
    res.push(key);
    
    depT(root.left,key+1,res);
    depT(root.right,key+1,res);
  }
  depT(root,1,res);

  return Math.max(...res);
};
// @lc code=end

