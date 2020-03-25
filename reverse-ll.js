// not in place solution, O(n) time, O(n) space
 const reverseLinkedList = head => {
   // create a stack with all the values in the linked list
   const stack = [];
   // traverse linked list and push values into stack
   while(head){
     stack.push(head.value);
     head = head.next;
   }
   // create a new head with the last element as the value
   const newHead = new Node(stack.pop());
   let current = newHead;
   // once the length is 0, condition will elavaluate to false which will break out of the loop
   while(stack.length){
     current.next = new Node(stack.pop());
     current = current.next;
   }
   return newHead;
 };
​
​
// iterative, in place solution, O(n) time, O(1) space
const reverseLinkedList = head => {
  
  if (!head || !head.next) return head;
​
  // set pointer variables
  let previous = null;
  let current = head;
  let next;
​
  // rearrange pointers while traversing linked list until end is reached
  while(current){
    // assign next to the next node in the list
    next = current.next;
    // move current.next to point to the previous node
    current.next = previous;
    // reassign previous to be equaled to the current node for the next loop
    previous = current;
    // traverse to the next node in the linked list;
    current = next;
​
  }
  // set head to be the last node visited
  head = previous;
  // return new head
  return head;
