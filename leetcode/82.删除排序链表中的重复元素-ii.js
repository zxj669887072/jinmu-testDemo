/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
  let hail = new ListNode(0,head),prev = hail,cur = head,repeat = new ListNode(hail,null);
  while(cur && cur.next){ 
    if(cur.val === cur.next.val){
      if(!cur.next.next){
        prev.next = null;
        break;
      }else{
        repeat = cur;
        cur = cur.next;
        prev.next = cur;
      }      
    }else{
      if(cur.val === repeat.val){
        cur = cur.next;
        prev.next = cur;
      }else{
        prev = prev.next;
        repeat = cur;
        cur = cur.next;
      }
    }     
  }
  return hail.next;
};
// @lc code=end

