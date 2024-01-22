const eqArrays  = require(`./eqArrays`)


const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];

    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }

    } else if (typeof val1 === 'object' && typeof val2 === 'object') {
      if (!eqObjects(val1, val2)) {
        return false;
      }

    } else {
      if (val1 !== val2) {
        return false;
      }
    }
  }

  return true;
};
module.exports = eqObjects;



/*
const eqObjects = function (object1, object2) {
  const objectArr1 = Object.keys(object1);
  const objectArr2 = Object.keys(object2);
  let answer = (boolean);
  if (objectArr1.length !== objectArr2.length) {
    answer = false;
  } else {
    if (Object.keys(object1).includes(Object.keys(object2)[0])) {

      if (Object.keys(object1).includes(Object.keys(object2)[1])) {
        answer = true;
        
      } else {
        answer = false;
        return answer;
      }
      answer = true;
      return answer;
    }
  }
  return answer;
};


*/