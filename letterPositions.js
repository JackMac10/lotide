const letterPositions = function (input) {
  const results = {};
  let index = 0;
  for (const char of input) {
    if (results[char]) {
      results[char].push(index);
    } else {
      results[char] = [index];
    }
    index++;
  }
return results;
}

module.exports = letterPositions;
