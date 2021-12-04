function reverseString(string) {
  const stringArray = string.split("");
  reversedStringArray = stringArray.reverse();
  reversedString = reversedStringArray.join("");
  return reversedString;
}
module.exports = reverseString;
