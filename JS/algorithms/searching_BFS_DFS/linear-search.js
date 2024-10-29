// also called sequenctial search
let nums = [1, 5, 4, 67, 345, 87, 2, 3, 789, 1];

// Ways to do linear search in JavaScript
const first = nums.indexOf(3);

const second = nums.findIndex(function (item) {
  return item === 3;
});

const third = nums.find(function (item) {
  return item === 3;
});

const forth = nums.includes(3);

console.log(first, second, third, forth); //7 7 3 true
