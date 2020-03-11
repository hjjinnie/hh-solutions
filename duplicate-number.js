/*
You have an unsorted array of n + 1 numbers, with the numbers from 1 to n.
One number is duplicated. Find it.
ex: [1,5,4,3,6,2,4,7] should return 4
*/
const duplicateNumber = array => {
    // populate our tally object
    const tally = array.reduce((acc, cur) => {
        acc[cur] = acc[cur] + 1 || 1;
        return acc;
    }, {});
    // iterate through tally object and see which key has a value of 2, return that key
    for (let key in tally) {
        if (tally[key] === 2) return key;
    }
};
// console.log(duplicateNumber([1,5,4,3,6,2,4,7]));
/* EXTENSION:
You have an unsorted array of n + 1 numbers, with the range of k to k + n - 1, with an extra number that is a duplicate.
(k is not necessarily 1) Find the duplicate. Do this in O(n) time and O(1) space complexity.
ex: [3, 4, 7, 6, 8, 5, 6] should return 6
*/
const duplicateNumberAdvanced = array => {
  // initialize min, max, and sum
  let min = Infinity, max = -Infinity, sum = 0;
  for(let i = 0; i < array.length; i++){
    // reset our min and max pointers if we encounter a min or max
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
    sum += array[i];
  }
  // calculate expected sum
  const expected = (min + max) * (array.length - 1) / 2;
  console.log((array.length - 1) / 2)
  return sum - expected;
};
console.log(duplicateNumberAdvanced([5, 4, 4, 2, 3, 6]));
