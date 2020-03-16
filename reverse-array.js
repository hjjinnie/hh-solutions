/*
​
Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.
​
*/
​
const reverseArray = array => {
  let i = 0, j = array.length - 1;
  while (i < j) {
    swap(array, i++, j--);
  }
  
  return array;
}
​
const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
​
console.log(reverseArray([8,3,7,1]))
