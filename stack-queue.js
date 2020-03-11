// what do we need to keep track of in our stack?
// an object to store an index as a key and our value as the value at that key
// a length to be able to directly insert new data at the end without traversing array
// basically the "length" property on an array
function Stack() {
  this.stack = {};
  this.length = 0;
};
// push functionality - add to end
Stack.prototype.push = function (val) {
  // add the argument value to the object using our length as a key
  this.stack[this.length] = val;
  // increment length
  this.length += 1;
  // we can return length just for good feedback
  return this.length;
};
// pop functionality - remove from end
Stack.prototype.pop = function () {
  // don't run if nothing is in our stack
  if (!this.length) return;
  // because our length is 1 indexed, take the last element and save it
  // to a temp variable
  const popped = this.stack[this.length - 1];
  // delete the k/v pair
  delete this.stack[this.length - 1];
  // decrease the length
  this.length -= 1;
  // return the popped value
  return popped;
};
// shift functionality - remove from beginning
Stack.prototype.shift = function () {
  // don't run if nothing is in stack
  if (!this.length) return;
  // make a temp variable equal to the first value of our object
  const shifted = this.stack[0];
  // iterate through object, reassigning the next element to the current one
  // basically "moving" all the values up one key
  for (let i = 0; i < this.length; i++) {
    this.stack[i] = this.stack[i + 1]
  }
  // last key should now be set to undefined, and we have to remove it
  delete this.stack[this.length - 1];
  // decrement length
  this.length--;
  // return our temp variable
  return shifted;
};
// unshift functionality - add to beginning
Stack.prototype.unshift = function (val) {
  // loop backwards through the loop, creating a new property at the very end
  // and then "moving" all the values down one key
  for (let i = this.length; i > 0; i--) {
    this.stack[i] = this.stack[i - 1];
  }
  // now the stack[0] and stack[1] elements are duplicates,
  // let's overwrite our first one with the value we want to insert
  this.stack[0] = val;
  // increment our length since we added a value
  this.length++;
  // return our length for good practice
  return this.length;
};
// How do we go about making two stacks into a queue?
// Our first stack gets assembled, but we want the element at the 
// BOTTOM of the pile. Because we have two stacks, we can pop all the 
// elements off of one stack and onto the other. Once our first stack
// is empty, we know that the top element of the second stack is 
// the first element we put in (bottom of the first stack). We can pop
// that one off.
function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
};
Queue.prototype.enqueue = function (val) {
  // we are filling our first stack using our push prototype method
  this.stack1.push(val);
}
// when we want to get that bottom element off the first stack
// we flip our stack1 to our stack2 using push, and our order
// "flips"
Queue.prototype.dequeue = function () {
  if (!this.stack1.length && !this.stack2.length) return;
  // if our stack2 is empty, we need to empty stack1 into stack2,
  // otherwise we can keep popping our "flipped" elements in stack2
  // ALTERNATE APPROACH: you can flip stack2 back onto stack1 after each
  // successful dequeue
  if (!this.stack2.length) {
    // push the WHOLE of stack1 onto stack2
    while (this.stack1.length) {
      // remember we are returning the value from the pop method, so we can
      // push that popped value directly onto stack2
      this.stack2.push(this.stack1.pop());
    }
  }
  // return our FIFO'd value
  return this.stack2.pop();
}
