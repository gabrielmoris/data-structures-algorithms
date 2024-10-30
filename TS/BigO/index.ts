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

// BigO Functions
async function getUserInput(): Promise<string> {
  return new Promise((resolve) => {
    rl.question(
      ` Hello! Which bigO do you want to measure?
       n => O(n) Lineal 
       1 => O(1) Constant Time
       n2 => =(n^2) Cuadratic
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
        let l = factorial(2);
      }
    }
    const end = performance.now();
    if (i > 1)
      results.push({ name: inputSizes[i].toLocaleString(), time: end - start });
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
        results = await measureQuadratic([1, 10, 100, 1_000, 10_000, 100_000]);
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
