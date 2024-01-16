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

const letterPositions = function (arr) {
  const results = {};
  for (let i = 0; i < arr.length; i++) {
    if (results[arr[i]]) {
    results[arr[i]].push(i);
    } else {
      results[arr[i]] = [i];
  }
}
console.log(results)
return results
};

assertArraysEqual(letterPositions("hello").e, [1]);