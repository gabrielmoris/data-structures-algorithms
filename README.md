# Data Structures and Algorithms

[Data Structures and Algorithms Diagram](https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link)

## **Big O**

To see the Big O examples run `bun TS/BigO/index.ts`

### Big Os (Time Complexity)

- **O(1)**: Constant – no loops
- **O(log N)**: Logarithmic – usually searching algorithms have log n if they are sorted (Binary Search)
- **O(n)**: Linear – for loops, while loops through n items
- **O(n log(n))**: Log Linear – usually sorting operations
- **O(n^2)**: Quadratic – every element in a collection needs to be compared to ever other element. Two nested loops
- **O(2^n)**: Exponential – recursive algorithms that solves a problem of size N
- **O(n!)**: Factorial – you are adding a loop for every element

- **Iterating through half a collection is still O(n)**
- **Two separate collections: O(a \* b)**

[![image](image.png)](https://www.bigocheatsheet.com/)

<a style="color:gray; font-size: 0.5rem;" href="https://www.bigocheatsheet.com/" target="_blank">Click in the image to see more</a>

### Rule Book

1. Always worst Case
2. Remove Constants => If i have O(2n + 100) at the end is same as O(n)
3. Different inputs => Different variables or args. A & B variables nested would be O(a+b)
4. Drop non Dominant terms

### What causes Space Complexity?

- Variables
- Data Structures
- Function Call
- Allocations

### Big Os (Space Complexity)

**Heap**: Variables, Values
**Stack**: Keep Track of functions

#### What Causes Space Complexity?

Variables, Data Structures, Function Calls, Allocations

The Space Complexity follows the same pattern as Time. For example On would be a function that adds data in memory as the number of input grows.

```javascript
//O(n) => bigger n, bigger arr
function createArray(input) {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    arr.push(i);
  }
  return arr;
}
```

## **Good Code**

["Premature optimization can be the root of all evil"](https://stackify.com/premature-optimization-evil/)

- Readability: DRY, Clear Naming, avoid "Cleverness", self-documenting, consistent
- Scalability:
  - Design: Modular, Separation of Concern, extensible, SOLID principles
  - Speed: Time Complexity
  - Memory: Space Complexity
- Maintainability: Version Control, Clear Deendency Management, Well organized (folder structure)
- Reliability: Error Handling, Input validations, Defensive program Techniques, Tests (TDD, Unit, Integration...)

## Solve a Coding Problem Sep by Step

This steps will ensure the proper approach for any Interview Question

1. Understand:
   - Write down the key points
   - Double check (what are inputs, outputs...)
   - Know what it is the most impotant value of the problem
   - Ask as many questions as I need
2. Prepare:
   - Start by brute force approach. **First make it work** Just speaking and no coding.
   - Evaluate the approach (Big O, Constraints, bottlenecks...)
   - Write Down the steps I will follow (modularize from beggining)
3. Execute:
   - Start Writting the code
   - Think about error handling
   - Name the variables properly
4. Testing:
   - Test the code
   - Tell where Could I improve the code
   - Answer possible questions
