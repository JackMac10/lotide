const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }
  else if (actual !== expected) {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countLetters = function (inputString) {
  const results = {};
  for (const item of inputString) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;

    }
  }
  return results
}
module.exports = countLetters;





/*
const iterable = "boo";

for (const value of iterable) {
  console.log(value);
  */


