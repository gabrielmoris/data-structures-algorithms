const nemo = ["nemo"];
const bigArr = new Array(100000).fill("nemo");
function findNemo(arr) {
  //check the performance
  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("FOUND NEMO!!");
    }
  } // O(n) is linear => each element makes the operation grove only 1 time more
  let t1 = performance.now();
  console.log("The call findNemo took " + (t1 - t0) + "ms");
}
// console.log("1");
// findNemo(nemo);
// console.log("2");
// findNemo(bigArr);
// BIG O to measure the algorithm efficiency (scalability)
