/* 
Notice how the kth row inside of the transposed array will contain all the kth elements
in each of the inner arrays from the input array (pushed in order).
​
Big O Analysis (where n is length of input array and m is length of each inner array)
Time Complexity: O(n * m)
Space Complexity: O(n * m)
*/
​
const matrixTranspose = matrix => {
  if (!matrix.length) return matrix;
​
  const transposed = [];
​
  for (let i = 0; i < matrix[0].length; i += 1) {
    const innerArr = [];
    for (let j = 0; j < matrix.length; j += 1) {
      innerArr.push(matrix[j][i]);
    }
    transposed.push(innerArr);
  }
  return transposed;
};
​
/*
Big O Analysis (where n is length of input array)
Time Complexity: O(n²)
Space Complexity: O(n²)
*/
​
// EXTENSION
const matrixRotate = matrix => {
  if (!matrix.length) return matrix;
  if (matrix.length !== matrix[0].length) return undefined;
​
  const rotated = [];
  const n = matrix.length;
​
  for (let i = 0; i < n; i += 1) {
    const row = [];
    for (let j = 0; j < n; j += 1) {
      row.push(matrix[n - j - 1][i]);
    }
    rotated.push(row);
  }
​
  return rotated;
};
​
// ALTERNATE SOLUTION (same time complexity but O(1) time complexity)
​
const matrixRotate = matrix => {
  if (!matrix.length) return matrix;
  if (matrix.length !== matrix[0].length) return undefined;
​
  const n = matrix.length;
​
  for (let i = 0; i < Math.floor(n / 2); i += 1) {
    const first = i;
    const last = n - i - 1;
​
    for (let j = first; j < last; j += 1) {
      const adjust = j - first;
      const top = matrix[first][j];
​
      // left -> top
      matrix[first][j] = matrix[last - adjust][first];
​
      // bottom -> left
      matrix[last - adjust][first] = matrix[last][last - adjust];
​
      // right -> bottom
      matrix[last][last - adjust] = matrix[j][last];
​
      // top -> right
      matrix[j][last] = top;
    }
  }
​
  return matrix;
};
