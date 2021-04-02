/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */

// 后序遍历： 左，右，根
var postorderTraversal = function(root) {
  // 判断是否为空
  if(!root) return [];

  // 定义初始栈，和结果数组
  let stack = [root],ans = [];

  
  while(stack.length){
    let curNode = stack.pop();
    ans.unshift(curNode.val);

    curNode.left && stack.push(curNode.left);
    curNode.right && stack.push(curNode.right);
  }
  // let ans = [];
  // function proT(root,ret){
  //   if(root === null) return ;
  //   proT(root.left,ret);        
  //   proT(root.right,ret);
  //   ret.push(root.val);
  // }
  // proT(root,ans);

  return ans;
};
// @lc code=end

