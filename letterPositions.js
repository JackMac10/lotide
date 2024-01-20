const letterPositions = function (arr) {
  const results = {};
  for (let i = 0; i < arr.length; i++) {
    if (results[arr[i]]) {
    results[arr[i]].push(i);
    } else {
      results[arr[i]] = [i];
  }
}
}
module.exports = letterPositions;
