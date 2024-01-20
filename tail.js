
const tail = function (array) {
  const result = [];
  for (let i = ((array.length) - 1); i < array.length; i++) { // for(const item of array ){
    const item = array[i];
    result.push(item);
  }
  console.log(result)
  return result;
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