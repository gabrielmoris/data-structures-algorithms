//Recursion is not an algorithm, but it is an important topic because is used in a lot of them.

//example
function stackOverflow() {
  stackOverflow();
}

//To avoid the stackOverflow we can finish the function, but here is the tricky thing:

let counter = 0;
function recursive() {
  if (counter > 10) {
    return "done";
  }
  counter++;
  recursive();
}
//the last call returns "done", but when in the call stack pops up to the last call, the done is lost
//and the function ends up returnin Undefined. It is solve returning the recursive function
let counter2 = 0;
function recursive2() {
  if (counter > 10) {
    return "done";
  }
  counter++;
  return recursive2();
}

//here is the difference:
console.log(recursive()); //undefined
console.log(recursive2()); //done
