/* 
Write a function to find the largest number in an arbitrarily nested array. 
The function should return the largest number contained anywhere in the array, 
regardless of how deeply nested it is.
Assume all elements in each array are numbers.
*/
const nestedArrMax = arrs => {
    // just a edge case catch
    if (arrs.length === 0) return 'add some values';
    // max always going to be overwritten by any value, neg or pos
    let max = -Infinity;
    // recursive helper function - I use these often to be able to
    // persist data outside of the function that will not be overwritten
    // by our recursive calls
    const traverseArray = arr => {
        // we must traverse the array and check two cases
        // 1. if our element in our array is itself an array
        // 2. if it is not, it is a number, and is the number 
        //    greater than our max pointer? if so, reassign
        arr.forEach(el => {
            if (Array.isArray(el)) traverseArray(el);
            if (el > max) max = el;
        });
    };
    // kick off our recursive traversal
    // all of our work will be resolved in this line before
    // going to the next line (call stack must resolve all
    // execution contexts opened up on top of it)
    traverseArray(arrs);
    // return our max pointer
    return max;
};
const arrNested = [2, 3, 5, 20];
console.log("Nested array max value:", nestedArrMax(arrNested));
/*
Extension:
Write a function to find the largest number in a nested array, up to and including a given level. 
Return the largest number without going deeper in the nested array than the specified level.
Assume all elements in each array are numbers.
*/
const nestedArrMaxLevel = (arrs, level) => {
    // just a edge case catch
    if (arrs.length === 0) return 'add some values';
    // max always going to be overwritten by any value, neg or pos
    let max = -Infinity;
    // another recursive helper function, with similar setup except this time
    // we are going to keep track of our level with a count and check that against level
    const traverseArray = (arr, count) => {
        // now we have to check, in addition to if our element is an array,
        // is it less than the level? we don't want it equal to the level because we are going
        // to dive in one more level with count + 1.
        // we also have to update our other if case, because now we can get arrays AND numbers
        // hitting our max pointer check, and we only want to look at numbers
        arr.forEach(el => {
            if (Array.isArray(el) && count < level) traverseArray(el, count + 1);
            if (typeof el === 'number' && el > max) max = el;
        });
    };
    // invoke our recursive helper but also initiate our level counter
    traverseArray(arrs, 1);
    return max;
};
const arrNested2 = [1, [3, [10], 6]];
const level = 2;
console.log("Max level", level, "nested array:", nestedArrMaxLevel(arrNested2, level));
