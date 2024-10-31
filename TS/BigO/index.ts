import * as readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to make the machine slower
const factorial: any = (n: any) => {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

// Function to create nested loops
function createNestedLoops(n: number): void {
  if (n <= 1) return;
  for (let i = 0; i < n; i++) {
    factorial(n);
    createNestedLoops(n - 1);
  }
}

async function measureOnTime(
  inputSizes: number[]
): Promise<{ name: string; time: number }[]> {
  const results = [];

  for (let i = 0; i < inputSizes.length; i++) {
    const arr = new Array(inputSizes[i]).fill(0);
    const start = performance.now();
    for (let j = 0; j < arr.length; j++) {
      let k = factorial(5);
    }
    const end = performance.now();
    // Because of the Nature of performance method,
    // I need to make the resolution of the method higher to measure a more consistent time.
    // I show only the last 10 Items that have more consistent time.
    if (i > 1) {
      results.push({ name: inputSizes[i].toLocaleString(), time: end - start });
    }
  }

  return results;
}

async function measureConstantTime(): Promise<
  { name: string; time: number }[]
> {
  const results = [];
  const iterations = 1000;
  for (let i = 0; i < iterations; i++) {
    const start = performance.now();
    let j = i;
    const end = performance.now();
    // Because of the Nature of performance method,
    // I need to make the resolution of the method higher to measure a more consistent time.
    // I show only the last 10 Items that have more consistent time.
    if (i > 989)
      results.push({ name: (i - 989).toString(), time: end - start });
  }
  return results;
}

async function measureQuadratic(
  inputSizes: number[]
): Promise<{ name: string; time: number }[]> {
  const results = [];

  for (let i = 0; i < inputSizes.length; i++) {
    const arr = new Array(inputSizes[i]).fill(0);
    const start = performance.now();
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        // Perform a more intensive operation to increase the runtime
        let l = factorial(5);
      }
    }
    const end = performance.now();
    if (i > 1)
      results.push({ name: inputSizes[i].toLocaleString(), time: end - start });
  }

  return results;
}

async function measureFactorial(
  inputSizes: number[]
): Promise<{ name: string; time: number }[]> {
  const results: { name: string; time: number }[] = [];

  for (let i = 0; i < inputSizes.length; i++) {
    const size = inputSizes[i];
    const start = performance.now();
    createNestedLoops(size);
    const end = performance.now();

    // Only add results for inputs > 1 to avoid skewing
    if (size > 1) {
      results.push({
        name: size.toLocaleString(),
        time: end - start,
      });
    }
  }

  return results;
}

async function measureLogarithmicTime(
  inputSizes: number[]
): Promise<{ name: string; time: number }[]> {
  const results: { name: string; time: number }[] = [];
  // Binary Search for O(log n)
  for (let i = 0; i < inputSizes.length; i++) {
    const size = inputSizes[i];

    const sortedArray = Array.from({ length: size }, (_, index) => index);

    const start = performance.now();

    function binarySearch(arr: number[], target: number): number {
      let left = 0;
      let right = arr.length - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        if (arr[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }

      return -1;
    }

    // Perform multiple binary searches to increase measurement precision
    for (let j = 0; j < sortedArray.length; j++) {
      binarySearch(sortedArray, j);
    }

    const end = performance.now();

    // Only add results for inputs > 1 to avoid skewing
    if (size > 1) {
      results.push({
        name: size.toLocaleString(),
        time: end - start,
      });
    }
  }

  return results;
}

async function measureNLogNTime(
  inputSizes: number[]
): Promise<{ name: string; time: number }[]> {
  const results: { name: string; time: number }[] = [];

  // Merge sort implementation with O(n log(n)) complexity
  function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  for (let i = 0; i < inputSizes.length; i++) {
    const size = inputSizes[i];
    const unsortedArray = Array.from({ length: size }, () =>
      Math.floor(Math.random() * size)
    );

    const start = performance.now();
    mergeSort(unsortedArray);

    const end = performance.now();

    // Only add results for inputs > 1 to avoid skewing
    if (size > 1) {
      results.push({
        name: size.toLocaleString(),
        time: end - start,
      });
    }
  }

  return results;
}

async function measureExponentialTime(
  inputSizes: number[]
): Promise<{ name: string; time: number }[]> {
  const results: { name: string; time: number }[] = [];

  // Recursive Fibonacci implementation with O(2^n) complexity
  function fibonacciExponential(n: number): number {
    // Base cases
    if (n <= 1) return n;

    // Recursive calls create exponential time complexity
    return fibonacciExponential(n - 1) + fibonacciExponential(n - 2);
  }

  for (let i = 0; i < inputSizes.length; i++) {
    const size = inputSizes[i];
    const start = performance.now();

    // Calculate Fibonacci number using exponential recursive method
    fibonacciExponential(size);

    const end = performance.now();

    // Only add results for inputs > 1 to avoid skewing
    if (size > 1) {
      results.push({
        name: size.toLocaleString(),
        time: end - start,
      });
    }
  }

  return results;
}

// BigO Functions
function visualizeComplexity(
  results: { name: string; time: number }[],
  complexityType: string
) {
  console.log(
    chalk.bold.blue(`\n🔍 Time Complexity Analysis: ${complexityType}\n`)
  );

  // Create a simple bar graph representation
  const maxTime = Math.max(...results.map((r) => r.time));

  results.forEach((result) => {
    const barLength = Math.floor((result.time / maxTime) * 50);
    const bar = "█".repeat(barLength);

    let colorBar;
    if (barLength < 10) colorBar = chalk.green(bar);
    else if (barLength < 30) colorBar = chalk.yellow(bar);
    else colorBar = chalk.red(bar);

    console.log(
      `${chalk.cyan(result.name.padStart(10))} | ${colorBar} ${chalk.gray(
        result.time.toFixed(2)
      )} ms`
    );
  });

  // Additional insights
  console.log(chalk.bold("\n📊 Complexity Characteristics:"));
  switch (complexityType) {
    case "O(1) Constant Time":
      console.log(
        chalk.green(
          "✓ Execution time remains consistent regardless of input size"
        )
      );
      break;
    case "O(n) Linear Time":
      console.log(
        chalk.yellow("⚠️ Time increases proportionally with input size")
      );
      break;
    case "O(n²) Quadratic Time":
      console.log(
        chalk.red("⚠️ Performance degrades quickly with larger inputs")
      );
      break;
    case "O(log n) Logarithmic Time":
      console.log(chalk.green("✓ Efficiently handles large datasets"));
      break;
    case "O(n log n) Merge Sort":
      console.log(chalk.yellow("⚠️ Efficient for sorting large datasets"));
      break;
    case "O(2ⁿ) Exponential Time":
      console.log(
        chalk.red("⚠️ EXTREMELY inefficient - avoid for large inputs!")
      );
      break;
    case "O(n!) Factorial Time":
      console.log(
        chalk.red("⚠️ SEVERELY inefficient - impractical for most inputs!")
      );
      break;
  }
}

async function main() {
  console.log(
    chalk.bold.blue("\n🚀 Big O Complexity Time Measurement Tool 🕒\n")
  );
  console.log(chalk.cyan("Choose a complexity to measure:"));
  console.log(chalk.green("n   - O(n) Linear Time"));
  console.log(chalk.green("1   - O(1) Constant Time"));
  console.log(chalk.green("n2  - O(n²) Quadratic Time"));
  console.log(chalk.green("n!  - O(n!) Factorial Time"));
  console.log(chalk.green("log - O(log n) Logarithmic Time"));
  console.log(chalk.green("nlogn - O(n log n) Merge Sort"));
  console.log(chalk.green("2n  - O(2ⁿ) Exponential Time"));
  console.log(chalk.yellow("\nType 'stop' to exit the program.\n"));

  while (true) {
    try {
      const userChoice = await new Promise<string>((resolve) => {
        rl.question(chalk.yellow("Enter your choice: "), (answer) => {
          resolve(answer.trim());
        });
      });

      // Check for exit condition
      if (userChoice.toLowerCase() === "stop") {
        console.log(
          chalk.green(
            "\nThank you for using the Big O Complexity Tool. Goodbye! 👋"
          )
        );
        break;
      }

      let results: { name: string; time: number }[];
      let complexityType: string;

      switch (userChoice) {
        case "n":
          results = await measureOnTime([
            100, 1_000, 10_000, 100_000, 1_000_000, 10_000_000,
          ]);
          complexityType = "O(n) Linear Time";
          break;
        case "1":
          results = await measureConstantTime();
          complexityType = "O(1) Constant Time";
          break;
        case "n2":
          results = await measureQuadratic([
            1, 2, 4, 8, 10, 100, 1_000, 10_000,
          ]);
          complexityType = "O(n²) Quadratic Time";
          break;
        case "n!":
          results = await measureFactorial([1, 2, 4, 8, 9, 10, 11, 12]);
          complexityType = "O(n!) Factorial Time";
          break;
        case "log":
          results = await measureLogarithmicTime([
            10, 100, 1_000, 10_000, 100_000, 1_000_000,
          ]);
          complexityType = "O(log n) Logarithmic Time";
          break;
        case "nlogn":
          results = await measureNLogNTime([
            1, 10, 100, 1_000, 10_000, 100_000,
          ]);
          complexityType = "O(n log n) Merge Sort";
          break;
        case "2n":
          results = await measureExponentialTime([10, 15, 20, 25, 30]);
          complexityType = "O(2ⁿ) Exponential Time";
          break;
        default:
          console.log(chalk.red("Invalid input. Please try again."));
          continue;
      }
      visualizeComplexity(results, complexityType);
    } catch (error) {
      console.error(chalk.red("An error occurred:"), error);
    }
  }

  rl.close();
}

main().catch(console.error);
