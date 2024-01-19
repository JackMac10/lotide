const assertArraysEqual = function(array, array2) {
  let result = null;
  if (array.length !== array2.length); {
    result == false;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array2[i]) {

      return false & console.log(`🚫🚫🚫 Assertion Failed: ${array} Is NOT the same as ${array2}`);

    }
    else {
      result == true;
    }
  }
  if (result = true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${array} and ${array2} are the SAME!`);
  }
  else if (asssertArraysEqual = false) {
    console.log(`🚫🚫🚫 Assertion Failed: ${array} Is NOT the same as ${array2}`);
  }
};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
  results.push(callback(item));
  }
return results;
}
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1)
