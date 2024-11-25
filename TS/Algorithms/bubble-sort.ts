const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array: number[]): void {
  let swaped = true;
  while (swaped) {
    swaped = false;
    for (let i = 0; i < array.length; i++) {
      if (i < array.length - 1 && array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swaped = true;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
