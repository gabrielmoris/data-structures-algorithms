// Write two functions that finds the factorial of any number. 5! = 5*4*3*2*1
//One should use recursive, the other should just use a for loop

let answer;
function findFactorialRecursive(number) {
  if (number === 1) {
    return answer;
  }
  if (!answer) {
    answer = number;
  } else {
    number--;
    answer *= number;
  }
  return findFactorialRecursive(number);
}
// Better version

function findFactorialRecursive2(number) {
  if (number === 1) {
    return number;
  }
  return number * findFactorialRecursive2(number - 1);
} //On

function findFactorialIterative(number) {
  let answer2;
  for (let i = number; i > 1; i--) {
    if (!answer2) {
      answer2 = i;
    } else {
      answer2 *= i;
    }
  }

  return answer2;
} //On

// console.log(findFactorialRecursive(5)); //120
// console.log(findFactorialRecursive2(5)); //120
// console.log(findFactorialIterative(5)); //120
// 0 1 1 2 3 5 8 13 21

function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
} //On

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
} //O2^n

// console.log(fibonacciIterative(8));
// console.log(fibonacciRecursive(8));

//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringIterative(str) {
  arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.unshift(str[i]);
  }
  return arr.join("");
}

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

// console.log(reverseStringIterative("yoyo mastery"));
console.log(reverseStringRecursive("yoyo mastery"));
//should return: 'yretsam oyoy'
