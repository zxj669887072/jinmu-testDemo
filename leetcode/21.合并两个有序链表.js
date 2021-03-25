/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function(l1, l2) {
  // if(!l1 && !l2) return null;
  if(l1 && !l2) return l1;
  if(!l1 && l2) return l2;
  let hail = new ListNode(0,null),cur = hail,l1head = l1,l2head = l2;
  while(l1head && l2head){
    if(l1head.val <= l2head.val){
      cur.next = l1head;
      cur = l1head;
      l1head = l1head.next;
    }else{
      cur.next = l2head;
      cur = l2head;
      l2head = l2head.next;
    };

    if(!l1head){cur.next = l2head};
    if(!l2head){cur.next = l1head};
  };
  return hail.next;

};
// @lc code=end

function sort (A, B) {
  var i = 0, j = 0, p = 0, m = A.length, n = B.length, C = []
  while (i < m || j < n) {
    console.log(`start:i=${i},j=${j},p=${p}`,C)
    if (i < m && j < n) {
        C[p++] = A[i] < B[j] ? A[i++] : B[j++]
    }else if (i < m) {
        C[p++] = A[i++]
    }else {
        C[p++] = B[j++]
    }
    console.log('end',C,'\n');
  }
  return C
}
console.log(__dirname,sort([1,3,5],[4,5,6,7,8]));
console.log(sort([],[1]));

