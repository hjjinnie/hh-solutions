/** Write a function that calculates x^y, where x is given as the base and y is given as the power.
 *
 * Example:
 * pow(2,4) => 2^4 = 16
 * Rational: 2 * 2 * 2 * 2 = 16
 *
 * Extension: Use recursion
 */
​
function pow(base, power) {
  // any number ^ 0 = 1
  if (power === 0) return 1;
​
  // initialize count to track number of times we've multiplied
  // if power is negative, use absolute value
  let count = power < 0 ? Math.abs(power) : power;
​
  // initialize result to accumulate our result value
  let result = base;
​
  // iterate power - 1 times
  while (count > 1) {
    // multiply result by base and reassign result to that value
    result *= base;
​
    // decrement count
    count -= 1;
  }
​
  // if power is negative, return 1 / result
  return power < 0 ? 1 / result : result;
}
​
// console.log(pow(10, 3));
// console.log(pow(10, -3));
// console.log(pow(10, 0));
​
/**
 * Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
 */
​
// added default param to track result between recursive calls
function powRecurse(base, power, result = base) {
  // any number ^ 0 = 1
  if (power === 0) return 1;
​
  // negative exponent returns 1 / recursive call w/positive exponent
  if (power < 0) return 1 / powRecurse(base, Math.abs(power));
​
  // if power is 1, we've reached our base case and return result
  if (power === 1) return result;
​
  // recursive call, decrementing power and multiplying result by base as our new result arg
  return powRecurse(base, power - 1, result * base);
}
​
// console.log(powRecurse(10, 3));
// console.log(powRecurse(10, -3));
// console.log(powRecurse(10, 0));
Collapse



:fire:
2

