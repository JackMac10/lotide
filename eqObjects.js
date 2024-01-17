const { boolean } = require("yargs");

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

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }

};



const eqObjects = function (object1, object2) {
  const objectArr1 = Object.keys(object1);
  const objectArr2 = Object.keys(object2);
  const obj1Val = (object1?.colors)
  const obj2Val = (object2?.colors)


  for (const keys in object1) {
    if ((Array.isArray(object1?.colors)) && (Array.isArray(object2?.colors))) {
      if (eqArrays(obj1Val, obj2Val) == false) {
        console.log("stop1")
        let answer = false
        return answer
      }
    }
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
  }
}




const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)

assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

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


const eqObjects = function(object1, object2) {
  const objectArr1 = Object.keys(object1);
  const objectArr2 = Object.keys(object2);
  const valueArr = Object.values(object1)
  console.log(valueArr)
  let answer = undefined;
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
*/