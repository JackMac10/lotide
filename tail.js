
const tail = function (array) {
  if (array.length === 0) {
    return undefined
  }
  let tails = []
  for (let i = 1; i < array.length; i++) {
    tails.push(array[i])
  }
  return tails;
};

module.exports = tail


/*
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }
  else if (actual !== expected) {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }

};

*/