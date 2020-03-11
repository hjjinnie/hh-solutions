function retrieveDepth(arr, depth) {
  const results = [];
  function checkForDepth(currentArr, currentDepth) {
    if (currentDepth === 0) return;
    for (let i = 0; i < currentArr.length; i += 1) {
      const currentElement = currentArr[i];
      if (!Array.isArray(currentElement)) {
        results.push(currentElement);
      } else {
        checkForDepth(currentElement, currentDepth - 1);
      }
    }
  }
  checkForDepth(arr, depth);
  return results;
}
***************************************************************
function flattenDepth (arr, depth) {
  if (depth === 0) return arr.slice();
  let results = [];
  for (let i = 0; i < arr.length; i += 1) {
    const currentElement = arr[i];
    if (!Array.isArray(currentElement)) {
      results.push(currentElement);
    } else {
      results = results.concat(flattenDepth(currentElement, depth - 1));
    }
  }
  return results;
}
