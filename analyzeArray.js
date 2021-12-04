function analyzeArray(array) {
  const containsNaN = array.some((element) => typeof element != "number");
  if (containsNaN) {
    return false;
  }

  const returnObj = {};
  returnObj.min = array.reduce((prev, curr) => (prev < curr ? prev : curr));
  returnObj.max = array.reduce((prev, curr) => (prev > curr ? prev : curr));
  returnObj.average = array.reduce((prev, curr) => prev + curr) / array.length;
  returnObj.length = array.length;
  return returnObj;
}

module.exports = analyzeArray;
