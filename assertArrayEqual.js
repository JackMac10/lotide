const eqArrays = function (array, array2) {
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
    console.log(`🟢🟢🟢 Assertion Passed: ${array} and ${array2} are the SAME!`)
  }
  else if (eqArrays = false) {
    console.log(`🚫🚫🚫 Assertion Failed: ${array} Is NOT the same as ${array2}`)
  }
}

//console.log(`🚫🚫🚫 Assertion Failed: ${array} Is NOT the same as ${array2}`)
//console.log(`🟢🟢🟢 Assertion Passed: ${array} and ${array2} are the SAME!`)


eqArrays([1, 2, 3], [1, 2, 3])
eqArrays([1, 2, 3], [3, 2, 1])

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false
