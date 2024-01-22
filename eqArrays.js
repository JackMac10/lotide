
const eqArrays = function (array, array2) {
  let result = undefined;

  if (array.length !== array2.length) {
    result = false
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array2[i]) {
      result = false
    } else {
      result = true
    }
    return result
  }
};


module.exports = eqArrays;

