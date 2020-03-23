/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/
​
function fastCache(callback) {
  const cache = {};
  function elephant(arg) {
    if (cache.hasOwnProperty(arg)) {
      console.log('VALUE FROM CACHE: ', cache[arg]);
      return cache[arg];
    }
    const result = callback(arg);
    cache[arg] = result;
    return result;
  }
  return elephant;
}
​
function multiplyByTwo(num) {
  return num * 2;
}
​
// const cachedMultiplyByTwo = fastCache(multiplyByTwo);
// console.log(cachedMultiplyByTwo(1));
// console.log(cachedMultiplyByTwo(2));
// console.log(cachedMultiplyByTwo(3));
// console.log(cachedMultiplyByTwo(1));
​
/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/
​
function fastCacheAdvanced(callback) {
  const cache = {};
  function elephantAdvanced(...args) {
    const argsString = JSON.stringify(args);
    // console.log(argsString);
    if (cache.hasOwnProperty(argsString)) {
      console.log('VALUE FROM CACHE: ', cache[argsString]);
      return cache[argsString];
    }
    const result = callback(...args);
    cache[argsString] = result;
    // console.log(cache);
    return result;
  }
  return elephantAdvanced;
}
​
function mapMultiplyByNum(arr, num) {
  return arr.map((elem) => elem * num);
}
​
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const cachedMapMultiplyByNum = fastCacheAdvanced(mapMultiplyByNum);
// console.log(cachedMapMultiplyByNum(nums, 1));
// console.log(cachedMapMultiplyByNum(nums, 2));
// console.log(cachedMapMultiplyByNum(nums, 3));
// console.log(cachedMapMultiplyByNum(nums, 1));
​
module.exports = {fastCache, fastCacheAdvanced};
