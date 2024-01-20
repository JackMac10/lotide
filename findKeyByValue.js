const findKeyByValue = function(object, value) {

  for (let val in object) {
    if (object.hasOwnProperty(val)) {
      if (object[val] == value)
      return val
    }
  }
};
module.exports = findKeyByValue;
