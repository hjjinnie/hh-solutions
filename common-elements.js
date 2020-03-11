/*
Write a function called commonElements that takes in any number of arrays in the
argument. The arrays may contain both numbers and strings. It should return a new array
with all the common elements (both numbers and/or strings) from the given input.
If there are no common numbers/strings, return "Nothing in Common!"
Assume there are no duplicates within the array.
ex:
arr1 = [2, 10,'cat', 3, 99, 2000, 'dog', 'lion'];
arr2 = [3, 7, 2, 2000, 1, 'dog', 'cat'];
arr3 = [2, 100, 2000, 'dog', 3, 'lion'];
commonElements(arr1, arr2, arr3) -> [2, 3, 2000, 'dog']
*/
// Time Complexity: O(n) - even though there are multiple loops, none of them are nested
const commonElementsOptimized = (...arrays) => {
  // concat all elements from all arrays together into one array
  const allElements = arrays.reduce((accumulatorArray, currentArray) => ([...accumulatorArray, ...currentArray]), []);
  // create a cache counter of how many times each element exists in the concatenated array
  const allElementsCache = allElements.reduce((accumulatorCache, currentElement) => {
    if (!accumulatorCache[currentElement]) accumulatorCache[currentElement] = 0;
    accumulatorCache[currentElement] += 1;
    return accumulatorCache;
  }, {});
    // find all the common elements by:
    //  1. filtering for only ones we've seen n number of times
    //     (where n is equal to number of input arrays)
    //  2. mapping over common elements and converting number elements
    //     back into number data types since they were stored in the
    //     cache as a string (because all object keys are stored as strings)
  const common = Object.keys(allElementsCache)
    .filter((key) => allElementsCache[key] === arrays.length)
    .map((key) => (isNaN(Number(key)) ? key : Number(key)));
  // return the common elements in their proper data type
  return common.length ? common : 'Nothing in Common!';
}
