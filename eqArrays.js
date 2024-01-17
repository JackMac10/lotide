// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
//   }
//   else if (actual !== expected) {
//     console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
//   }

// };


const eqArrays = function (array, array2) {
  let result = undefined;
  let badTally = []
  if (array.length != array2.length) {
    badTally.push(1)
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array2[i]) {
      badTally.push(1)
    }
  }
  if (badTally.length == 0) {
    (result = true)
    return result;
  } else {
    (result = false)
    return result;
  }
};


console.log(eqArrays(["1", 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false
