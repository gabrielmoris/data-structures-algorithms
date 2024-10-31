import * as readline from "readline";

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
    createNestedLoops(n - 1);
  }
}

// BigO Functions
async function getUserInput(): Promise<string> {
  return new Promise((resolve) => {
    rl.question(
      ` Hello! Which bigO do you want to measure?
       n => O(n) Lineal 
       1 => O(1) Constant Time
       n2 => =(n^2) Quadratic
       n! => =(n!) Factorial
       `,
      (answer: string) => {
        resolve(answer.trim());
      }
    );
  });
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

async function main() {
  try {
    const userChoice = await getUserInput();
    let results: { name: string; time: number }[];

    switch (userChoice) {
      case "n":
        results = await measureOnTime([
          100, 1_000, 10_000, 100_000, 1_000_000, 10_000_000, 100_000_000,
        ]);
        break;
      case "1":
        results = await measureConstantTime();
        break;
      case "n2":
        results = await measureQuadratic([
          1, 1, 2, 4, 8, 10, 100, 1_000, 10_000,
        ]);
        break;
      case "n!":
        results = await measureFactorial([1, 1, 1, 2, 4, 8, 9, 10, 11, 12]);
        break;
      default:
        console.log("Invalid input. Please try again.");
        return;
    }

    console.log("Results:");
    console.table(results);
  } finally {
    rl.close();
  }
}

main();
