# Data Structures and Algorithms

[Data Structures and Algorithms Diagram](https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link)

## Big O

### Big Os

- **O(1)**: Constant – no loops
- **O(log N)**: Logarithmic – usually searching algorithms have log n if they are sorted (Binary Search)
- **O(n)**: Linear – for loops, while loops through n items
- **O(n log(n))**: Log Linear – usually sorting operations
- **O(n^2)**: Quadratic – every element in a collection needs to be compared to ever other element. Two nested loops
- **O(2^n)**: Exponential – recursive algorithms that solves a problem of size N
- **O(n!)**: Factorial – you are adding a loop for every element

- **Iterating through half a collection is still O(n)**
- **Two separate collections: O(a \* b)**

### Rule Book

1. Always worst Case
2. Remove Constantsç
3. Different inputs => Different variables. A & B variables nested would be =(a\*b)
4. Drop`non Dominant terms

### What causes Space Complexity?

- Variables
- Data Structures
- Function Call
- Allocations
