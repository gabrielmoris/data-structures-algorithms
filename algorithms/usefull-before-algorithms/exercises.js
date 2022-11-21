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
}

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
}

console.log(findFactorialRecursive(5)); //120
console.log(findFactorialRecursive2(5)); //120
console.log(findFactorialIterative(5)); //120
