const capitalize = require("../capitalize");

test("Capialize first character in a string", () => {
  expect(capitalize("random string")).toBe("Random string");
});

test("First character already capitalized", () => {
  expect(capitalize("Hello world!")).toBe("Hello world!");
});

test("First character missing", () => {
  expect(capitalize(" try me!")).toBe(" try me!");
});

test("First symbol is not a character", () => {
  expect(capitalize(".'/,haha")).toBe(".'/,haha");
});
