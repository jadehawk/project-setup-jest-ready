const functions = require("./project");

test("Compares hi to hi should return equal", () => {
  expect(functions.compare("hi", "hi")).toBe("Equal");
});

test("Compares hi to hi should return equal", () => {
  expect(functions.compare("hi", "bye")).toBe("Not  Equal");
});

test("adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});