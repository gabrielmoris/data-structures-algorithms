const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  // 1. We choose a pivot
  const pivot = array[array.length - 1];
  let compareIndex = 0;
  const left: number[] = [];
  const right: number[] = [];

  // 2. We Compare the rest of the values, saving them in different arrays
  while (compareIndex < array.length - 1) {
    if (pivot < array[compareIndex]) {
      right.push(array[compareIndex]);
    } else {
      left.push(array[compareIndex]);
    }
    compareIndex++;
  }

  // 3. We return a more sorted array that will recursively sort the left and the right
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(numbers));
