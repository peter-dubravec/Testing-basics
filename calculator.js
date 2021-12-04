function checkIfNumber(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return false;
  }
  return true;
}

const calculator = (() => {
  const add = (a, b) => {
    if (checkIfNumber(a, b)) {
      return a + b;
    }
    return false;
  };

  const substract = (a, b) => {
    if (checkIfNumber(a, b)) {
      return a - b;
    }
    return false;
  };

  const divide = (a, b) => {
    if (checkIfNumber(a, b)) {
      return b == 0 ? "LOL" : a / b;
    }
    return false;
  };

  const multiply = (a, b) => {
    if (checkIfNumber(a, b)) {
      return a * b;
    }
    return false;
  };

  return { add, substract, divide, multiply };
})();

module.exports = calculator;
