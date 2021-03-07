/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  if(head === null) return head;
  let pre = null,cur = head;
  while(cur){
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
// @lc code=end

/* 1 -> 2 -> 3 -> 4 -> null
①:
  null <- 1 ;                 2 -> 3 -> 4 -> null
②
  null <- 1 <- 2 ;            3 -> 4 -> null
③
  null <- 1 <- 2 <- 3 ;       4 -> null
④
  null <- 1 <- 2 <- 3 <- 4 ;  null */
  
