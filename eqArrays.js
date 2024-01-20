
const eqArrays = function (array, array2) {
  let result = undefined;
  let badTally = []
  if (array.length != array2.length) {
    badTally.push(1)
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array2[i]) {
      badTally.push(1)
    }
  }
  if (badTally.length == 0) {
    (result = true)
    return result;
  } else {
    (result = false)
    return result;
  }
};

module.exports = eqArrays;

