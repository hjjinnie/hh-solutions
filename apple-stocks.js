// Time complexity: O(n^2)
// Space complexity O(1);
// Iterative: nested for-loops --> Brute force solution;
const highestProfit = (apple_stock) => {
  // initialize profit to zero
  let profit = 0;
  // check if input is an array
  if (!Array.isArray(apple_stock)) return profit;
  // iterate through the stocks array
  for (let i = 0; i < apple_stock.length; i++) {
    // save the value of the bought stock (buy first then you sell)
    const buyStock = apple_stock[i];
    // check if element is valid
    if (typeof buyStock !== 'number') return 0;
    // for each element of the array iterate through the rest of the array
    for (let j = i + 1; j < apple_stock.length; j++) {
      // save the value of the sold stock
      const sellStock = apple_stock[j];
      // update the profit value with the maximum difference in that loop between
      // current profit value and profit generate between the sold and bought stocks
      profit = Math.max(profit, sellStock - buyStock);
    }
  }
  // if the profit is a positive number, return profit, else return zero
  return profit > 0 ? profit : 0;
};
​
// Time complexity: O(n)
// Space complexity O(1);
// Iterative: One single loop
const highestProfitLinear = (apple_stock) => {
  // check if input is an array
  if (!Array.isArray(apple_stock)) return 0;
  // initialize profit to zero (min)
  let profit = 0;
  // initialize the bought stock value to the first element of the array
  let buyStock = apple_stock[0];
  // loop through the stocks values
  for (let i = 1; i < apple_stock.length; i++) {
    // save the value of selling the stock in that current time
    const sellStock = apple_stock[i];
    // check if element is valid
    if (typeof sellStock !== 'number') return 0;
    // if the bought price is larger than the selling price, update
    // the bought price to that value
    if (buyStock > sellStock) buyStock = sellStock;
    // else set profit with the maximum value between current profit and
    // difference between current sold and bought stocks
    else profit = Math.max(profit, sellStock - buyStock);
  }
  // return the profit
  return profit;
};
​
// Time complexity: O(n)
// Space complexity O(1);
// Iterative: One single loop (using reduce)
function highestProfitLinearTwo(apple_stock) {
  // initialize the position on the lowest value to buy stock
  let minIndex = 0;
  // check if input is an array
  if (!Array.isArray(apple_stock)) return 0;
  // accumulate the highest profit by iterating through the array
  // and saving the index of the lowest value
  return apple_stock.reduce((acc, curr, index) => {
    // if the current stock is smaller than the smallest saved,
    // update the index position of the lowest value
    if (curr < apple_stock[minIndex]) minIndex = index;
    // save the value of selling the stock at this index
    const sellStock = apple_stock[index];
    // save the value of buying the stock at the minIndex saved
    const buyStock = apple_stock[minIndex];
    // calculate the current profit for the minimum value saved
    const profit = sellStock - buyStock;
    // if the current profit greater than the profit saved, update accumulator
    if (profit > acc) acc = profit;
    // return the accumulated value
    return acc;
  }, 0);
