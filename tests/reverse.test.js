const reverse = require("../reverseString");

test("Simple reverse String", () => {
  expect(reverse("abcd")).toBe("dcba");
});

test("Reverse string with symbols, number and capital letters and spaces", () => {
  expect(reverse("Odin Project 2021  .")).toBe(".  1202 tcejorP nidO");
});
