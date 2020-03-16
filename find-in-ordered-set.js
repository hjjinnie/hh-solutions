/*
Write a function findInOrderedSet that determines if a given number exists within an array of numbers.
​
Assuming that the array is sorted in ascending order, can you accomplish this with time complexity better than O(n)?
​
ex:
const nums = [-3, 0, 8, 13, 37]
findInOrderedSet(nums, 0);  -> true
findInOrderedSet(nums, 2);  -> false
*/
​
const findInOrderedSet = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return true;
  }
  return false;
}
​
const findInOrderedSet2 = (array, target, startIndex = 0, endIndex = array.length - 1) => {
  let midIndex;
​
  while (startIndex <= endIndex) {
    midIndex = Math.floor((startIndex + endIndex) / 2);
​
    if (array[midIndex] === target) return true;
    
    if (array[midIndex] > target) endIndex = midIndex - 1;
    
    if (array[midIndex] < target) startIndex = midIndex + 1;
  }
​
  return false;
}
