/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let list1 = [],list2 = [], bit = 0, hail = new ListNode(-1),cur = hail;
  while(l1 || l2){
    if(l1 && l2){
      list1.unshift(l1.val);
      l1 = l1.next;
      list2.unshift(l2.val);
      l2 = l2.next;
    }else if(l1){
      list1.unshift(l1.val);
      l1 = l1.next;
    }else{
      list2.unshift(l2.val);
      l2 = l2.next;
    };
  };

  while(list1.length || list2.length){
    let sum = 0;
    if(list1.length && list2.length){
      sum = list1.pop() + list2.pop() + bit;
    }else if(list1.length){
        sum = list1.pop() + bit;
    }else{
        sum = list2.pop() + bit;
    };
    
    if(sum > 9){
      sum = sum - 10;
      bit = 1;
    }else{
      bit = 0;
    };
    
    cur.next = new ListNode(sum);
    cur = cur.next;
    
    if(!list1.length && !list2.length && bit){
      cur.next = new ListNode(bit);
      cur = cur.next;
    }; 
  };
  return hail.next;
};
// @lc code=end

