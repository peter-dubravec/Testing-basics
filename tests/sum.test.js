const sum = require("../sum");

test("Sum positive numbers", () => {
  expect(sum(2, 3)).toBe(5);
});

test("Sum negative numbers", () => {
  expect(sum(-1, -1)).toBe(-2);
});

test("Sum string and number", () => {
  expect(sum("1", 1)).toBe(false);
});

test("Sum array and number", () => {
  expect(sum([5], 4)).toBe(false);
});

test("Sum object and number", () => {
  expect(sum({ a: 7 }, 4)).toBe(false);
});
