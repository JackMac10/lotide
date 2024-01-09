const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }
  else if (actual !== expected) {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }

};
module.exports = assertEqual;

/*
const iterable = "boo";

for (const value of iterable) {
  console.log(value);
  */



const inputString = "lllllllighthousewwwww";
const results = {};
for (const item of inputString) {

  if (results[item]) {
    results[item] += 1;
  } else {
    results[item] = 1;

  }
  
}

console.log(results);



