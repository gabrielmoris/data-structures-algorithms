// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = [1, 3, 4, 2];

function insertionSort(array: number[]): void {
  for (let i = 1; i < array.length; i++) {
    let currentElement = array[i];
    let comparingElementIndex = i - 1;

    while (
      comparingElementIndex >= 0 &&
      array[comparingElementIndex] > currentElement
    ) {
      array[comparingElementIndex + 1] = array[comparingElementIndex];
      comparingElementIndex--;
    }
    array[comparingElementIndex + 1] = currentElement;
  }
}

insertionSort(numbers);
console.log(numbers);
