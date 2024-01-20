const findKey = function (object, callback) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (callback(object[key])) {
        return key;
      }
    }
  }
  return undefined;
};
module.exports = findKey;

