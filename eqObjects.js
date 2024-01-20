const eqObjects = function (object1, object2) {
  const objectArr1 = Object.keys(object1);
  const objectArr2 = Object.keys(object2);
  const obj1Val = (object1?.colors)
  const obj2Val = (object2?.colors)


  for (const keys in object1) {
    if ((Array.isArray(obj1Val)) && (Array.isArray(obj2Val))) {
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