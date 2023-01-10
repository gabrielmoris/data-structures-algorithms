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

// Best solution
function closureRob() {
  const cache = {};

  return function (nums) {
    console.log("cache: ===>>", cache);

    if (nums in cache) {
      return cache[nums];
    } else {
    }
    let housesGroup1 = [];
    let housesGroup2 = [];
    let totalHousesGroup1 = 0;
    let totalHousesGroup2 = 0;

    if (nums.length <= 2) {
      cache[nums] = { Houses: false, amount: false };
      return cache[nums];
    }
    for (let i = 0; i < nums.length; i += 2) {
      totalHousesGroup1 += nums[i];
      housesGroup1.push(nums[i]);
    }
    for (let i = 1; i < nums.length; i += 2) {
      totalHousesGroup2 += nums[i];
      housesGroup2.push(nums[i]);
    }

    if (totalHousesGroup2 < totalHousesGroup1) {
      cache[nums] = { Houses: housesGroup1, amount: totalHousesGroup1 };
      return cache[nums];
    } else {
      cache[nums] = { Houses: housesGroup2, amount: totalHousesGroup2 };
      return cache[nums];
    }
  };
}
const robber = closureRob();

const amountHouses2 = [1, 2, 3, 1];

const amountHouses4 = [2, 7, 9, 3, 1, 2, 4, 1, 8, 12];

console.log("-------------------");
console.log("Houses to robber: ", robber(amountHouses2).Houses);
console.log("Amount to robber: ", robber(amountHouses2).amount);
console.log("-------------------");
console.log("Houses to robber: ", robber(amountHouses4).Houses);
console.log("Amount to robber: ", robber(amountHouses4).amount);
console.log("-------------------");
