const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      // I take out the target element (1 means take 1 out)
      let target = array.splice(i, 1)[0];
      // I put it at the very beginning
      array.unshift(target);
    } else {
      // I have to check where to put it, starting from the 2nd element until where is the i
      // checking until array.length also works but I ad extra non necessary steps
      for (let j = 1; j < i; j++) {
        if (array[i] < array[j] && array[i] > array[j - 1]) {
          // I extract again the targeted array (1 means take 1 out)
          let target = array.splice(i, 1)[0];
          // I put it in the middle
          array.splice(j, 0, target);
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);
