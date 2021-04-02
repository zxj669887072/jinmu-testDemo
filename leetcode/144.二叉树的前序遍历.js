/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
  let ans = [];
  function proT(root,ret){
    // console.log(root,ret);
    if(root === null) return ;
    ret.push(root.val);
    proT(root.left,ret);
    proT(root.right,ret);
  }
  proT(root,ans);

  return ans;
};
// @lc code=end

var tree1 = {
  val: 1,
  left:{
    val: 2,
    left:{
      val: 4,
      left: null,
      right: null
    },
    right:{
      val: 5,
      left: {
        val: 7,
        left: null,
        right:{
          val: 8,
          left: null,
          right: null
        }
      },
      right: null
    }
  },
  right:{
    val: 3,
    left: null,
    right:{
      val: 6,
      left: null,
      right: null
    }
  }
};

console.log(preorderTraversal(tree1));