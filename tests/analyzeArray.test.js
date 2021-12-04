const analyzeArray = require("../analyzeArray");

test("Analyze Array simple", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Analyze Array incorrect", () => {
  expect(analyzeArray([1, [7], 3, 4, 2, 6])).toBe(false);
});
