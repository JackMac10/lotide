
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


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  const keys1 = Object.keys(actual);
  const keys2 = Object.keys(expected);
  let badTally = 0;

  if (keys1.length !== keys2.length) {
    badTally += 1;
  }

  for (let key of keys1) {
    const value1 = actual[key];
    const value2 = expected[key];
    const isObject = (object) => {
      return object !== null && typeof object === "object";
    };
    if ((Array.isArray(keys1)) && (Array.isArray(keys2))) {
      if (eqArrays(keys1, keys2) == false) {
        badTally += 1;
      }
    }
    const isObjects = isObject(value1) && isObject(value2);

    if ((isObjects && !isDeepEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      badTally += 1;
    }
  }
  badTally += 0;

  if (badTally === 0) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} and ${inspect(expected)} are the SAME!!`);
  } else if (badTally !== 0) {
    console.log(`🚫🚫🚫 Assertion Failed: ${inspect(actual)} is NOT equal to ${inspect(expected)}`);
  }

  //console.log(`Example label: ${inspect(actual)}`);

};

module.exports = assertObjectsEqual


/*the jail

const isObject = (object) => {
    return object != null && typeof object === "object";
  };
    
    const answer = undefined
 
    
 
    for (const key of keys1) {
        if (actual[key] !== expected[key]) {
            let (answer = false);
        }
    }
 
   let (answer = true);


   
for (let i = 0; i < j; i++) {
      if (Object.keys(expected).includes(Object.keys(actual)[i]) && Object.values(expected).includes(Object.values(actual)[i])) {
        if ((Object.keys(actual)[i] == Object.keys(expected)[i]) && (Object.values(actual)[i] == Object.values(expected)[i])) {
          pass += 1
        } else {
          pass = 0

        }
        pass += 1
      } else {

        pass = 0
      }

      //Object.values(actual)[key] !== Object.values(expected)[key]) {
      // result = false
    }
  }
  //console.log(Object.keys(actual), Object.values(actual), Object.keys(expected), Object.values(expected))


  //if ((Object.keys(actual).includes(Object.keys(expected)[0])) && (Object.keys(actual).includes(Object.keys(expected)[1])) && (Object.keys(actual).includes(Object.keys(expected)[2]))) {


  let result = true
  let j = objectKeys1.length
  pass = 0

  const hasKeySetTo = function (obj,key,value) {
    if (obj.hasOwnProperty(key) && obj[key]==value);
}
  
  if (objectKeys1.length !== objectKeys2.length) {
    result = false
  } else {

    


  console.log(pass)
*/