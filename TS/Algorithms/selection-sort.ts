const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array: number[]): void {
  let currentPosition = 0;

  while (currentPosition < array.length - 1) {
    let minIndex = currentPosition;

    // I iterate finding the index of the smallest element
    for (let i = currentPosition + 1; i < array.length; i++) {
      if (array[i] < array[minIndex]) {
        minIndex = i;
      }
    }

    // I swap the selected element with the smallest element
    if (minIndex !== currentPosition) {
      let bkp = array[currentPosition];
      array[currentPosition] = array[minIndex];
      array[minIndex] = bkp;
    }

    currentPosition++;
  }
}

selectionSort(numbers);
console.log(numbers);
