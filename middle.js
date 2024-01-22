function middle(array) {
  // incorrect as if number of elements <= 2, it should return []
  if (array.length <= 2) {
    return []
  }
  const middleIndex = Math.floor(array.length / 2)
  if (array.length % 2 === 0) { // if array length divided by 2 == 1, array length is even 
    return [array[middleIndex - 1], array[middleIndex]]

  }
  else {  // else, array must be odd in length
    return array[middleIndex]
  }
}
module.exports = middle;
