const assertArraysEqual = function (array, array2) {
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
  else if (assertArraysEqual = false) {
    console.log(`🚫🚫🚫 Assertion Failed: ${array} Is NOT the same as ${array2}`);
  }
};


function middle(array) {

  if ((array.length) < 3) { // if array is smaller than 2, the middle is an empty array
    return [];
  }
  const middleIndex = array.length / 2;
  if (array.length % 2 === 0) { // if array length divided by 2 == 1, array length is even 
    return [array[middleIndex - 1], array[middleIndex],
    ];
  }
  else {  // else, array must be odd in length
    return [Math.floor(middleIndex + 1)]
  }
}


console.log(middle([1]))
