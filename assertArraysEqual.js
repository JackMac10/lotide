const asssertArraysEqual = function(array, array2) {
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
    }Z
  }
  if (result = true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${array} and ${array2} are the SAME!`);
  }
  else if (eqArrays = false) {
    console.log(`🚫🚫🚫 Assertion Failed: ${array} Is NOT the same as ${array2}`);
  }
};

//console.log(`🚫🚫🚫 Assertion Failed: ${array} Is NOT the same as ${array2}`)
//console.log(`🟢🟢🟢 Assertion Passed: ${array} and ${array2} are the SAME!`)



