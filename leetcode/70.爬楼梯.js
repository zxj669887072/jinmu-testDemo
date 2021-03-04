/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

//  第n个台阶只能从第n-1或者n-2个上来。到第n-1个台阶的走法 + 第n-2个台阶的走法 = 到第n个台阶的走法，已经知道了第1个和第2个台阶的走法，一路加上去。
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }
  let i1 = 1,i2 = 2;
  for (var i = 3; i <= n; i++) {
    let temp = i1 + i2;
    i1 = i2;
    i2 = temp;
  }
  return i2;
};
// @lc code=end

var climbStairs__ = function (n) {
  if (n === 1) {
    return 1;
  }
  let result = 0,
    tree = {
      val: 0,
      parentTotal: 0,
    };
  function order(root, cb) {
    if (root !== null) {
      let { val, parentTotal } = root;

      if (val + parentTotal === n) {
        result++;
        // console.log(root);
      } else {
        if (n - parentTotal === 1) {
          Object.assign(root, {
            val: 1,
            left: null,
            right: null,
          });
        }
        if (n - parentTotal >= 2) {
          Object.assign(root, {
            left: {
              val: 1,
              parentTotal: parentTotal + val,
            },
            right: {
              val: 2,
              parentTotal: parentTotal + val,
            },
          });
        }
        order(root.left, cb);
        order(root.right, cb);
      }
    }
  }
  order(tree);
  return result;
};

// 递归-前序遍历
var order = (root, cb) => {
  // console.log(root,cb);
  if (root !== null) {
    if (!root.left && !root.right) {
      console.log("leaf", root);
      cb(root.val);
    }
    // cb(root.val);
    order(root.left, cb);
    order(root.right, cb);
  }
};

o = {
  val: 0,
  parentTotal: 0,
};

o = {
  val: 0,
  parentTotal: 0,
  left: {
    val: 1,
    parentTotal: 0,
  },
  right: {
    val: 2,
    parentTotal: 0,
  },
};

o = {
  val: 0,
  parentTotal: 0,
  left: {
    val: 1,
    parentTotal: 0,
    left: {
      val: 1,
      parentTotal: 1,
    },
    right: {
      val: 2,
      parentTotal: 1,
    },
  },
  right: {
    val: 2,
    parentTotal: 0,
  },
};
