const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// 1. Split

function mergeSort(array: number[]): number[] {
  if (array.length === 1) {
    return array;
  }

  const right = array.slice(array.length / 2);
  const left = array.slice(0, array.length / 2);

  return merge(mergeSort(left), mergeSort(right));
}

// 2. Merge

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Choose the smallest side always

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add the untouched indexes to the result and return

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

console.log(mergeSort(numbers));
