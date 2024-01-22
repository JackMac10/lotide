const countLetters = function(inputString) {
  const results = {};
  for (const item of inputString) {
    if (item !== ' ') {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;




