const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array: number[]): number[] {
  if (array.length === 1) {
    return array;
  }

  const right = array.slice(array.length / 2);
  const left = array.slice(0, array.length / 2);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left: number[], right: number[]): number[] => {
  return left;
};

mergeSort(numbers);
console.log(numbers);
