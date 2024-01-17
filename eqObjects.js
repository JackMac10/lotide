const { boolean } = require("yargs");

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqObjects = function(object1, object2) {
  const objectArr1 = Object.keys(object1);
  const objectArr2 = Object.keys(object2);
  let answer = boolean;
  if (objectArr1.length !== objectArr2.length) {
    answer = false;
  } else {
    if ((Object.keys(object1).includes(Object.keys(object2)[0])) && (Object.keys(object1).includes(Object.keys(object2)[1]))) {
      answer = true;

    } else {
      answer = false;
      return answer;
    }
    answer = true;
    return answer;

  }
  return answer;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject, longSleeveShirtObject);

assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

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