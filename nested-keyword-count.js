/*
Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.
keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0
*/
​
const keywordCount = (array, keyword) => {
  let total = 0;
​
  array.forEach((el) => {
    // check if we are dealing with an array
    if (Array.isArray(el)) {
      // call recursively to add to total
      total += keywordCount(el, keyword);
    } else if (el === keyword) {
      // increment total when the element is the same as the keyword
      total += 1;
    }
  });
​
  return total;
};
