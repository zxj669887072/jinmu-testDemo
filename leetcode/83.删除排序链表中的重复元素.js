/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
  if(head === null) return head;
  let cur = head.next,prev = head;
  while(cur){
    if(cur.val === prev.val ){
      if(cur.next){
        prev.next = cur.next;
        cur = cur.next;
      }else{
        prev.next = null;
        break;
      } 
    }else{
      prev = cur;
      cur = cur.next;
    }    
    
  }
  return head;
};
// @lc code=end

