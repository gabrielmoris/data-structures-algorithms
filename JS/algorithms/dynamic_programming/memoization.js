function addTo80(n) {
  //   long calculations
  return n + 80;
}
// Because it is not cached It will run the function each time
addTo80(5);
addTo80(5);
addTo80(5);

let cache = {};

function memoizedAddTo80(n) {
  if (n in cache) {
    console.log("From cache");
    return cache[n];
  } else {
    console.log("From calculation");
    cache[n] = n + 80;
    return cache[n];
  }
}
// It is cached. It will run only the first time
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));

// To improve the function: We shouldnt save the cache in global scope
// In javaScript we do it by using clousures

function memoization() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      console.log("From clousure cache");
      return cache[n];
    } else {
      console.log("From clousure calculation");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const clousure = memoization();

console.log(clousure(5));
console.log(clousure(5));
console.log(clousure(5));
