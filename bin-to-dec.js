/* 
​
Given a string that represents a Binary Number, write a function that converts this string into a decimal number. DO NOT use the native parseInt() method. 
​
For example: 
​
binToDec('0')   -> 0
binToDec('11')  -> 3
binToDec('100') -> 4
binToDec('101') -> 5
binToDec('0101') -> 5
​
For more information on how to read binary, check out this article: 
https://m.wikihow.com/Read-Binary
​
A binary number is a number expressed in the base-2 numeral system, or "binary numeral system." The base-2 numeral system is a positional notation with a radix of 2. Each digit is referred to as a bit.
​
The general strategy for converting a binary number into a decimal number is to start with the digit in the right-most (first) position. Multiply whatever value sits in that postion (0 or 1)
  by 2 to the power of the position. 
​
Once you have all the position's values squared, simply add them together. 
​
For example: 0101
​
0 <- 1 <- 0 <- *1* 
0th position. 1(the *binary* number) multiplied by 2 to the power of 0 (the index) is 1.
​
0 <- 1 <- *0* <- 1
1st position. 0 (the *binary* number) multiplied by 2 to the power of 1(the index) is 0.
​
0 <- *1* <- 0 <- 1
2nd position. 1 (the binary number) multiplied by 2 to the power of 2(the index) is 4. 
​
*0* <- 1 <- 0 <- 1
3rd position. 0 (the binary number) multiplied by 2 to the power of 3(the index) is 0. 
​
The evaluated result of each position is 1 + 0 + 4 + 0, which equals 5. 
​
*/
​
function binToDecI(binary) {
  let sum = 0;
​
  for (let i = binary.length - 1; i > -1; i--){
    if (binary[i] == '1'){
      sum += (Math.pow(2, binary.length - i - 1)); 
    };
  };
​
  return sum; 
 }
​
function binToDecII(binary, len = binary.length) {
  return binary.split('').reduceRight((acc, cur, idx) => {
    return cur === '1' ? acc + Math.pow(2, len - 1 - idx) : acc;
  }, 0);
