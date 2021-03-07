/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null) return false;
  let p = head,
    q = head.next;
  while (p !== q && q && q.next) {
    p = p.next;
    q = q.next.next;
  }
  // console.log(p,q)
  return q && q.next;
};
// @lc code=end

function a(head) {
  if (head == null || head.next == null) {
    return false;
  }
  let fast = head.next;
  let slow = head;
  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}
