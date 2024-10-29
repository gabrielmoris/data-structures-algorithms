const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  // I am comparin in the inner loop, if i loop only once, it will change only
  // 1 time and wont be completely sorted, doing nested for loop
  // will check as many times as the array length from begginning ensuring that everything
  // is sorted
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        //swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
} //On2

bubbleSort(numbers);
console.log(numbers);
