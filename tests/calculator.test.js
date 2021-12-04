const calculator = require("../calculator");

test("Add numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("Add number and char", () => {
  expect(calculator.add("2", 3)).toBe(false);
});

test("Add number and array", () => {
  expect(calculator.add([3], 3)).toBe(false);
});

test("Add number and object", () => {
  expect(calculator.add({ a: 6 }, 3)).toBe(false);
});

test("Divide 2 numbers", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("Divide number and zero", () => {
  expect(calculator.divide(10, 0)).toBe("LOL");
});

test("Multiply 2 numbers", () => {
  expect(calculator.multiply(10, 20)).toBe(200);
});
