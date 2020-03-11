/*
​
Write a function that logs to the console an nxn representation of a staircase for any
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of
asterisks without any leading spaces.
​
For example:
drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******
​
*/
​
​
const drawStairs = (n) => {
  // initialize stair index
  let stair = 1;
​
  // iterate n times
  while (stair <= n) {
    // for each iteration
    // print n - stair spaces and stair asterisks to the console
    console.log(' '.repeat(n - stair).concat('*'.repeat(stair)));
​
    // increment stair
    stair += 1;
  }
};
​
// drawStairs(-100);
// drawStairs(0);
// drawStairs(10);
// drawStairs(100);
​
/*
​
Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.
​
Examples:
drawStar(1) ->
+
​
drawStar(3) ->
\|/
-+-
/|\
​
drawStar(5) ->
\ | /
 \|/
--+--
 /|\
/ | \
​
*/
​
const drawStar = (n) => {
  // account for even numbers and n < 1
  // account for n === 1
  if (n % 2 === 0 || n < 1) return;
  if (n === 1) console.log('+');
  else {
    // initialize chars to push
    const backSlash = '\\';
    const forwardSlash = '/';
    const pipe = '|';
    const plus = '+';
    const minus = '-';
    const space = ' ';
​
    // initialize pointers
    let index = 0;
    const midPoint = Math.floor(n / 2);
​
    while (index < n) {
      if (index === midPoint) {
        console.log(minus.repeat((n - 1) / 2).concat(plus).concat(minus.repeat((n - 1) / 2)));
      } else {
        let currentRow = '';
​
        while (currentRow.length < n) {
          // backslash is always at position index
          if (currentRow.length === index) currentRow += backSlash;
​
          // forwardslash is always index spaces from the end of the row (n - 1)
          else if (currentRow.length === n - 1 - index) currentRow += forwardSlash;
​
          // pipe is always the middle char of the row
          else if (currentRow.length === midPoint) currentRow += pipe;
​
          // every other char in the row is a space
          else currentRow += space;
        }
        console.log(currentRow);
      }
      index += 1;
    }
  }
};
​
// drawStar(-11);
// drawStar(40);
// drawStar(1);
// drawStar(3);
// drawStar(5);
// drawStar(11);
