/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if(head === null) return head;
  let list = [],hair = new ListNode(0,head) ,cur = head;
  while(cur){
    list.push(cur);
    cur = cur.next;
  }
  let index = list.length - n;
  if(index === 0){
    hair.next = head.next
  }else{
    list[index-1].next = list[index].next;
  }
  return hair.next;
};
// @lc code=end

