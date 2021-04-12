/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if(inorder.length === 0) return null;
  let root = new TreeNode(postorder[postorder.length-1]);
  let left_p = [],left_i = [], right_p = [],right_i = [];

  // root在中序的下标位置
  let rootIndexAtIn = inorder.indexOf(postorder[postorder.length-1]);
  left_i = inorder.slice(0,rootIndexAtIn);
  right_i = inorder.slice(rootIndexAtIn+1);

  left_p = postorder.slice(0,left_i.length);
  right_p = postorder.slice(left_i.length,postorder.length-1);

  root.left = buildTree(left_i,left_p);
  root.right = buildTree(right_i,right_p);
  return root;
};
// @lc code=end

