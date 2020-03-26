// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
}
// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}
const linkedListRemove = (ll, val) => {
  // Determine whether the first node value matches the input value
  if (ll.head.val === val) return ll.head.next;
  // or if there is only one value and the head doesn't match
  else if (ll.head.next === null) return 'not found'
  else {
    // Set pointer references to the current and next nodes
    let curNode = ll.head;
    let nextNode = curNode.next;
    while (nextNode) {
      // Determine whether the next node's value matches the input value
      if (nextNode.val === val) {
        // If so: Set the current Node's next property equal to the node that follows the node that matches the input value
        curNode.next = nextNode.next;
        // Return the augmented linked list once the first value is removed
        return ll;
      } else {
        //If not: Iterate the two pointers by one node
        curNode = nextNode;
        nextNode = nextNode.next;
      }
    }
  }
  // if we get here, it means we never found a match
  return 'not found';
};
const ll = new LinkedList();
const nodeList = new Node('a');
nodeList.next = new Node('d');
nodeList.next.next = new Node('b');
nodeList.next.next.next = new Node('c');
nodeList.next.next.next.next= new Node('z');
ll.head = nodeList;
console.log(linkedListRemove(ll, 'z').head.next)
const linkedListRemoveMultiple = (ll, val) => {
  // Determine whether the first node value matches the input value
  if (ll.head.val === val) return ll.head.next;
  // determine whether a future pointer nextNode can exist
  if (ll.head.next === null) return ll;
  else {
    // Set pointer references to the current and next nodes
    let curNode = ll.head;
    let nextNode = curNode.next;
    while (nextNode) {
      // Determine whether the next node's value matches the input value
      if (nextNode.val === val) {
        // If so: Reassign the pointers to ignore the node matching the target value
        curNode.next = nextNode.next;
        // and now we also have to move our 
        nextNode = nextNode.next;
      } else {
        // If not: Iterate the two pointers by one node
        curNode = nextNode;
        nextNode = nextNode.next;
      }
    }
  }
  // Return the (now updated) original linked list
  return ll;
}
