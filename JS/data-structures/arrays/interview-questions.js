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
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
  //O(n)
  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));

//Much better
function mergeSortedArraysBetter(arr1 = [], arr2 = []) {
  return [...arr1, ...arr2].sort(); //O(1)
}
console.log(mergeSortedArraysBetter([1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1]));
