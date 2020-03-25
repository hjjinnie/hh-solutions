/**
 Write a function that takes two parameters (an integer, and the head of a
 * singly linked list) and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 *
 * Additional Information:
 *  - invalid inputs should return undefined
 *  - should find the last node by passing in 1
 */
​
function Node(val) {
  this.value = val;
  this.next = null;
}
​
// ! Two traversals of the linked list
// Traverse the linked list, counting its length as you go
// Return to the head and traverse the linked list again, stopping at count length - k
function kthToLastNode(k, head) {
  let length = 0;
  let curr = head;
​
  while (curr) {
    length += 1;
    curr = curr.next;
  }
  let i = length - k;
  curr = head;
​
  if (i < 0) {
    return undefined;
  }
​
  while (i--) {
    curr = curr.next;
  }
  return curr ? curr.value : undefined;
}
​
// ! Only one traversal of the linked list, but the creation of a new object in memory
// Traverse the linked list, pushing each node into an array
// Return the value of the node at the length - k index
function kthToLastNode(k, head) {
  const cacheArr = [];
  while (head) {
    cacheArr.push(head.value);
    head = head.next;
  }
  return cacheArr[cacheArr.length - k];
}
​
// ! Only one traversal of the linked list without the creation of any new objects in memory
// Create a LEAD and a FOLLOW counter. 
// The first loop sets the value of LEAD K nodes ahead of FOLLOW. 
// Then, if we don't have enough values to be k nodes ahead, return undefined.
// Otherwise, The while loop traverses the linked list with the two counters.
// Once the LEAD reaches the end, since FOLLOW is K nodes behind it, we return FOLLOW.VALUE
​
function kthToLastNode(k, head) {
  let lead = head;
  let follow = head;
  let i = 0;
  while (i < k && lead) {
    lead = lead.next;
    i += 1;
  }
  if (i !== k) return;
​
  while (lead && follow) {
    lead = lead.next;
    follow = follow.next;
  }
  return follow ? follow.value : undefined;
}; 
​
// Do not delete!
module.exports = { Node, kthToLastNode };
