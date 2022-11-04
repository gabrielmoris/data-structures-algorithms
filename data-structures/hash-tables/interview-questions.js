// Return first recursive character

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4]; //should return 2
const arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4]; //should return 1
const arr3 = [2, 3, 4, 5]; //should return undefined

function firstRecChar(arr) {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      return arr[i];
    } else {
      //   hash.arr[i] = 1;
      hash[arr[i]] = 1;
    }
  }
  return;
}

console.log(firstRecChar(arr1)); //2
console.log(firstRecChar(arr2)); //1
console.log(firstRecChar(arr3)); //undefined
