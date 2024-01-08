// const without = function (array, [itemsToRemove]) { // map the 2nd list, search array for (itemsToremove)
//   var removedNum = []
//   for (let i = 0; i < array.length; i++) { // loop through
//     if (array[i] == [itemsToRemove]) { // if array position/index equals number to remove
//       let removedNum = array.splice(array[i], [itemsToRemove]); // remove minus num from takeaway array + add removed nums to removed list
//     } //
//   }
//   console.log(removedNum)
//   console.log(array)
//};

// => ["1", "2"]
const log = function (item) {
  if (item == "spray") {
    console.log(item)
  }
  return item === "fun" || item === "elite"
}

// const result = words.filter((word) => word.length > 6);
const without = function (originalArray, itemsToRemove) {
  const checkWordToRemove = function (word) {
    return !itemsToRemove.includes(word)
  }
  let output = originalArray.filter(checkWordToRemove)
  return output
}
// console.log(without(words, oldWords))

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"]))
//console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]