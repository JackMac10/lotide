const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }
  else if (actual !== expected) {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }

};
module.exports = assertEqual;

const findKey = function(object, callback) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (callback(object[key])) {
        return key;
      }
    }
  }
  return undefined;
};
const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3);

console.log(result);
assertEqual((result), "Akaleri")