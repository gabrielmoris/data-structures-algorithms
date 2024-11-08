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
   - Write Down the steps I will follow (modularize from beginning)
3. Execute:
   - Start Writting the code
   - Think about error handling
   - Name the variables properly
4. Testing:
   - Test the code
   - Tell where Could I improve the code
   - Answer possible questions

# Data structures

It determines the way we organize a collection of values. Each Data structure is specialized for different purposes.

[It is important to understand how the computers allocate the memory and stores Data](https://statmath.wu.ac.at/courses/data-analysis/itdtHTML/node55.html)

The most used **Data structures** are:

| Data Structure   | Insertion                                   | Deletion                                    | Traversal | Searching                      | Sorting    |
| ---------------- | ------------------------------------------- | ------------------------------------------- | --------- | ------------------------------ | ---------- |
| Arrays           | **O(1)** at end, O(n) at arbitrary position | **O(1)** at end, O(n) at arbitrary position | O(n)      | O(n) unsorted, O(log n) sorted | O(n log n) |
| Stacks           | **O(1)**                                    | **O(1)**                                    | O(n)      | O(n)                           | N/A        |
| Queues           | **O(1)**                                    | **O(1)**                                    | O(n)      | O(n)                           | N/A        |
| Linked Lists     | **O(1)**                                    | **O(1)** if position known, otherwise O(n)  | O(n)      | O(n)                           | O(n log n) |
| Trees (balanced) | O(log n)                                    | O(log n)                                    | O(n)      | O(log n)                       | O(n log n) |
| Tries            | O(k), where k is key length                 | O(k), where k is key length                 | O(n)      | O(k), where k is key length    | O(n)       |
| Graphs           | **O(1)** for vertex, **O(1)** for edge      | O(V+E) for vertex, O(E) for edge            | O(V+E)    | O(V+E)                         | N/A        |
| Hash Tables      | **O(1)** average, O(n) worst                | **O(1)** average, O(n) worst                | O(n)      | **O(1)** average, O(n) worst   | N/A        |

**Note:**

- "N/A" indicates that the operation is not applicable for that data structure.

The most used Algorithms are:

- Sorting
- Dynamic PRogramming
- BFS + DFS (Search)
- Recursion

## Arrays

[Array Implementation](TS/DataStructures/arrays.ts)
They are stored in contiguos memory making them to have a small footprint. There are 2 types of arrays

1. Static: they are specific in size
1. Dynamic: the size changes. In background copies the array and allocates the array with the new size in another block of memory.

**How a Dynamic array is adapted each time we add new elements**:

```cpp
// Create STATIC array
int a[5] = {1, 2, 3, 4, 5};
// Change size
int newSize = 6;
int* newArray = new int[newSize];

// Copy existing elements
for (int i = 0; i < 5; i++) {
    newArray[i] = a[i];
}

// Add new element
newArray[5] = 6;

// Don't forget to delete the dynamically allocated array when done
delete[] newArray;
```

**Good for:** Lockup, push/pop, Sorting
**Not good for:** Inserts, Deletion, If they are static they have fixed size

**Performance:**

- pop() => O(1)
- push() => Normally O(1), but if it has to allocate it in another block of memory it becomes O(n)
- unshift() => O(n)
- splice() => O(n)

<a style="font-size: 0.6rem; font-weight: bold;" href="TS/DataStructures/classes-explanation.ts">\* Note about classes </a>

<p style="font-size: 0.6rem; font-weight: bold;">* Strings can be treated as Arrays</p>

## Hash Tables (Objects in JS)

[Hash Table Implementation](TS/DataStructures/hash-tables.ts)
Hash tables are data structures that store key-value pairs, allowing for efficient retrieval and insertion of data. In JavaScript, objects essentially function as hash tables.

**How Hash Tables Work**

- Hashing Function: When you create a key-value pair in a JavaScript object, the key is passed through a hashing function. This function converts the key into a numeric hash code.
- Array Index: The hash code is then used to determine the index in an underlying array where the value will be stored.
- Storage: The value is stored at this calculated index in the array.
- Retrieval: When you access a value using its key, the same hashing process occurs to find the correct array index.

**Collision Handling**
Sometimes, different keys may produce the same hash code, leading to collisions. JavaScript engines handle this internally, often using techniques like:

- Chaining: Multiple values at the same index are stored in a linked list.
- Open Addressing: If a collision occurs, the engine looks for the next available slot.

**In JavaScript, this process is abstracted away, but conceptually:**

```javascript
let obj = {};

// When you do this:
obj["name"] = "Pepe";

// JavaScript internally does something like:
let hashCode = hashFunction("name");
let index = hashCode % arraySize;
internalArray[index] = "Pepe";
```

**Good for:** Most of the cases is O(1)
**Not good for:** When It handles collisions It becomes O(n) because it stores the data using a Linked List in the memory address

**Performance:**

- Insert => O(1)
- Lookup => O(1)
- Delete => O(1)
- Search => O(1)

**Javascript has:**
Map => It can use any data type as a _key_ and it mantains _Insertion Order_
Sets => It only stores Keys. No values.
