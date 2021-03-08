/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(head === null || head.next === null){return head};
  let tail= head,newHead = head,len = 1;
  do {
    tail = tail.next;
    len ++;
    if(!tail.next){
      break
    }
  } while (1);
  tail.next = head;

  let step = len - k % len; 
  tail = head;
  while(--step){
    tail = tail.next;
  }
  newHead = tail.next;
  tail.next = null;

  return newHead;

};
// @lc code=end

// let step = len - k % len;  
//   while(--step){
//     newHead = newHead.next;
//   }
//   let pre = newHead.next;
//   newHead.next = null;
//   return pre;

