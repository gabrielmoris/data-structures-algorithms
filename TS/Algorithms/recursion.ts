/*
EXAMPLE 1:
Function that find a factorial of any number:
*/

import chalk from "chalk";

const findFactorial = (n: number): number => {
  if (n === 1) return n;

  return n * findFactorial(n - 1);
};

console.log(findFactorial(5));

/*
EXAMPLE 1:
Function that returns the value of the Fibonacci sequence being N this index
//  1, 1, 2, 3, 5, 8, 13...

Input: 7 
Output: 8
*/
// The recutsive solution has O(2^n), a very bad Time complexity
const fibonacci = (n: number): number => {
  if (n < 2) return n;

  return fibonacci(n - 2) + fibonacci(n - 1);
};

console.log(chalk.red(fibonacci(7)));

// The Iterative Solution would be O(n):

const fibonacciIter = (n: number): number => {
  let arr = [0, 1];
  if (n === 0) return 0;
  for (let i = 1; i < n; i++) {
    arr.push(arr[i - 1] + arr[i]);
  }
  return arr[arr.length - 1];
};

console.log(chalk.blue(fibonacciIter(7)));
