



const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const eqObjects = require(`./eqObjects`)

  if ((eqObjects(actual, expected)) === true){
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} and ${inspect(expected)} are the SAME!!`);
  } else if ((eqObjects(actual, expected)) === false) {
    console.log(`🚫🚫🚫 Assertion Failed: ${inspect(actual)} is NOT equal to ${inspect(expected)}`);
  } else {
    console.log("**eqObjectsErr**")
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