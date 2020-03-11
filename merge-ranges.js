const mergeRanges = (intervals) => {
  // sort array by start times
  const sortedArr = intervals.sort((a, b) => a[0] - b[0]);
​
  const result = [];
​
  // keep a reference to the first sub-array to begin with
  let prev = sortedArr[0];
​
  // go through the sorted array
  for (let i = 1; i < sortedArr.length; i += 1) {
	  
    // capture the current sub-array from the loop
    const curr = sortedArr[i];
​
    // compare the second element in the first array to the first element in the array from the loop
    if (prev[1] >= curr[0]) {
      // merged case
      // use math.max and compare the second elements to make sure you are grabbing the right end element for the merged array
      const merged = [prev[0], Math.max(prev[1], curr[1])];
​
      // reassign previous to now be our merged array
      prev = merged;
		
    } else {
		
      result.push(prev);
      // reassign previous to now be the current sub-array
      prev = curr;
    }
  }
​
  result.push(prev);
​
  return result;
