/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  let res = [];
  function tierT(root,key,res){
    if(!root) return ;
    if(!res[key]){
      res[key] = []
    };

    /* res[key].push(root.val); */
    if(key % 2 === 1){
      res[key].unshift(root.val);
    }else{
      res[key].push(root.val);
    };

    tierT(root.left,key+1,res);
    tierT(root.right,key+1,res);
  }
  tierT(root,0,res);

  return res;
};
// @lc code=end

