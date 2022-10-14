//Big o is also used to measure memory scalability (not only time)

function booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("HI!");
  }
}

booo([1, 2, 3, 4, 5]); //O(1) for memory

function arrayOfNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n.length; i++) {
    hiArray[i] = "BOO!";
  }
  return hiArray;
}

arrayOfNTimes([1, 2, 3, 4, 5]); //O(n)
