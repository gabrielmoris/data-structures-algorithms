//Reverse a string
const inputStr = "leirbaG omall em ,aloH";
function reverse(str) {
  if (typeof str !== "string" || !str || str.lengthz2) {
    return "Send a string longer than 2 letters.";
  }
  const arr = [];
  for (let i = str.length; i >= 0; i--) {
    arr.push(str[i]);
  } //O(n)

  return arr.join(""); //O(n)
}

console.log(reverse(inputStr));
//Better Solution
function reverse2(str) {
  if (typeof str !== "string" || !str || str.lengthz2) {
    return "Send a string longer than 2 letters.";
  }
  return str.split("").reverse().join("");
}
console.log(reverse2(inputStr));
//Even cleaner
const reverse3 = (str) => [...str].reverse().join("");
console.log(reverse3(inputStr));

// Merge sorted Arrays
function mergeSortedArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort(); //O(1)
}
console.log(mergeSortedArrays([1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1]));
