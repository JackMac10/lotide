const assertArraysEqual = require(`./assertArraysEqual`)

function middle(array) {

  if ((array.length) < 3) { // if array is smaller than 2, the middle is an empty array
    return [];
  }
  const middleIndex = array.length / 2;
  if (array.length % 2 === 0) { // if array length divided by 2 == 1, array length is even 
    return [array[middleIndex - 1], array[middleIndex],
    ];
  }
  else {  // else, array must be odd in length
    return [Math.floor(middleIndex + 1)]
  }
}

module.exports = middle;