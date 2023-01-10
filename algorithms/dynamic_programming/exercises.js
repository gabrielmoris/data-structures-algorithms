/**
 * @param {number[]} nums
 * @return {number}
 */

// This should be with cache...
nums = [1, 2, 3, 1];
var rob = function () {
  return function r(nums) {
    let pairs = 0;
    let odds = 0;
    const pair = nums.reduce((accumulator, currentValue, i) => {
      if (currentValue % 2 === 0) {
        pairs = pairs + currentValue;
      }
    });
    const odd = nums.reduce((accumulator, currentValue, i) => {
      if (currentValue % 2 !== 0) {
        odds = odds + currentValue;
      }
    });

    let result = pairs > odds ? pairs : odds;
    return result;
  };
};

const robbinHood = rob();

console.log(robbinHood([1, 2, 3, 1]));
