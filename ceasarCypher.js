const shiftLowerCase = (char, shift) => {
  let charCode = char.charCodeAt(char);

  if (shift > 25) {
    shift = shift % 26;
  }

  if (char.match(/[A-Z]/g)) {
    if (charCode + shift > 90) {
      charCode = charCode + shift - 26;
      return String.fromCharCode(charCode);
    }
  } else if (charCode + shift > 122) {
    charCode = charCode + shift - 26;
    return String.fromCharCode(charCode);
  }

  return String.fromCharCode(charCode + shift);
};

const ceasarCypher = (string, shift) => {
  const stringArray = string.split("");
  const shiftedArr = [];
  let shiftedString;
  let shiftedChar;

  stringArray.map((char) => {
    if (char.match(/[a-zA-Z]/g)) {
      shiftedChar = shiftLowerCase(char, shift);
      shiftedArr.push(shiftedChar);
    } else {
      shiftedArr.push(char);
    }
  });

  shiftedString = shiftedArr.join("");
  return shiftedString;
};

module.exports = ceasarCypher;
