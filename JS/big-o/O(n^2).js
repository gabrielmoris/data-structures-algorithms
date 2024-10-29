// Log all Pairs of Array
const boxes = ["a", "b", "c", "d", "e", "f"];

function logPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

logPairs(boxes); //O(n*n) => O(n^2)
