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

function tierTraversal(root){  
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
console.log(tierTraversal(tree1));

var maxDepth = function(root) {
  let res = [];
  function depT(root,key,res){
    // console.log(root);
    
    if(!root){
      res.push(0);
      return;
    };
    // console.log(key);
    res.push(key);
    
    depT(root.left,key+1,res);
    depT(root.right,key+1,res);
  }
  depT(root,1,res);

  return Math.max(...res);
};
console.log(maxDepth(null));