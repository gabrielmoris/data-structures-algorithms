//Fibonacci
//0,1,1,2,3,5,8,13,21,34...
let calculations = 0;
function fibonacci(n) {
  calculations++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
} // O2^n

// This function is 2^n trying with 50 would be impossible for the computer
console.log("1. Function", fibonacci(30));
console.log("1. Number of Calculations", calculations);

// We solve it with memoization
calculations = 0;
function memoizedFibonacci() {
  let cache = {};
  return function fi(n) {
    calculations++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fi(n - 1) + fi(n - 2);
        return cache[n];
      }
    }
  };
} // On

const fibo = memoizedFibonacci();
console.log("2. Function", fibo(300));
console.log("2. Number of Calculations", calculations);
