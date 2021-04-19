/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 */
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  
  /* let ans = [];
  function proT(root,ret){
    // console.log(root,ret);
    if(root === null) return ;
    ret.push(root);
    proT(root.left,ret);
    proT(root.right,ret);
  }
  proT(root,ans);

  const size = ans.length;
  for (let i = 1; i < size; i++) {
      const prev = ans[i - 1], curr = ans[i];
      prev.left = null;
      prev.right = curr;
  } */
  
  
  // 注意到前序遍历访问各节点的顺序是根节点、左子树、右子树。如果一个节点的左子节点为空，则该节点不需要进行展开操作。
  // 如果一个节点的左子节点不为空，则该节点的左子树中的最后一个节点被访问之后，该节点的右子节点被访问。
  // 该节点的左子树中最后一个被访问的节点是左子树中的最右边的节点，也是该节点的前驱节点。
  // 因此，问题转化成寻找当前节点的前驱节点。

  // 具体做法是，对于当前节点，如果其左子节点不为空，则在其左子树中找到最右边的节点，作为前驱节点，
  // 将当前节点的右子节点赋给前驱节点的右子节点，然后将当前节点的左子节点赋给当前节点的右子节点，并将当前节点的左子节点设为空。
  // 对当前节点处理结束后，继续处理链表中的下一个节点，直到所有节点都处理结束。


  let curr = root;
  while (curr !== null) {
      if (curr.left !== null) {
          const next = curr.left;
          let predecessor = next;
          while (predecessor.right !== null) {
              predecessor = predecessor.right;
          }
          predecessor.right = curr.right;
          curr.left = null;
          curr.right = next;
      }
      curr = curr.right;
  }
};
// @lc code=end

// console.log('结果',flatten(new TreeNode(0)));
// console.log('结果',flatten(null));

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
// console.log('结果',flatten(tree1));
