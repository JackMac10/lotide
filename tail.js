
const tail = function (array) {
  if (array.length === 0) {
    return undefined
  }

  return array[array.length - 1];

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