/*
​
Given an arbitrarily nested array of arrays, return the maximum depth.
​
For example:
​
​
maxDepth([3, 2]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([7, 8, 0, 9]) -> 1 (non-nested array, so maximum depth is 1 level)
maxDepth([]) -> 1 (array may be empty)
​
maxDepth([3, [6, 7], 2]) -> 2 (maximum depth is 2 levels)
maxDepth([[2, 1], 8, 3, [4], 5]) -> 2 (maximum depth is 2 levels)
maxDepth([3, [], 2]) -> 2 (inner arrays may be empty, but still count towards depth)
​
maxDepth([3, [6, [7]], 2]) -> 3 (maximum depth is 3 levels)
​
maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]) -> 4 (maximum depth is 4 levels)
​
*/
​
const maxDepth = (arr) => {
// ? WHAT IS THE NON-RECURSIVE CASE?
  // ? THE CASE WHERE WE WON'T ITERATE OVER THE INPUT CHECKING TO SEE IF EACH ELEMENT IS AN ARRAY?
​
  // If it's not an array, its depth is 0
​
  if (!Array.isArray(arr)) return 0;
​
  // ? IS THERE ANOTHER NON-RECURSIVE CASE?
​
  if (arr.length === 0) return 1;
​
  // ? WHAT IS THE RECURSIVE CASE?
  // ? THE CASE WHERE WE WILL ITERATE OVER THE INPUT CHECKING TO SEE IF EACH ELEMENT IS AN ARRAY?
​
  // if it is an array, we want to know the depth of every element
​
  const depths = arr.map((element) => 1 + maxDepth(element));
​
  // and we want to return the maxDepth
​
  return Math.max(...depths);
};
​
console.log(maxDepth([3, [6, 7], 2]));
// console.log(maxDepth('hello'));
// console.log(maxDepth([3, 2]));
// console.log(maxDepth([7, 8, 0, 9]));
// console.log(maxDepth([]));
// console.log(maxDepth([[2, 1], 8, 3, [4], 5]));
// console.log(maxDepth([3, [], 2]));
// console.log(maxDepth([3, [6, [7]], 2]));
// console.log(maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]));
​
module.exports = { maxDepth };
