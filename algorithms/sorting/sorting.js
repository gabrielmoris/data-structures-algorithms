const letters = ["a", "b", "z", "d", "l"];
const basket = [2, 65, 55, 34, 2, 43, 7, 8];
//for small inputs there is a native method
//but in large data, this would be too slow
console.log(letters.sort());

//And in JavaScript the numbers are transformed to strings before it sorts
// making it not a good way to sort numbers
console.log(basket.sort());

// the sort method depends on the browser and the engine.
// in node it sorts by unicode.

//to sort more propperly

console.log(basket.sort((a, b) => a - b));
