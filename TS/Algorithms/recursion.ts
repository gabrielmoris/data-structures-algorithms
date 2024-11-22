/*
EXAMPLE 1:
Function that find a factorial of any number:
*/

const findFactorial = (n: number): number => {
  if (n === 1) return n;

  return n * findFactorial(n - 1);
};

console.log(findFactorial(10));
