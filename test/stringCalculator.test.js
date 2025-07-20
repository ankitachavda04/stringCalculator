import add from '../src/stringCalculator';

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns 0 for an empty string with space", () => {
  expect(add(" ")).toBe(0);
});

test("returns number itself when single number is passed", () => {
    expect(add("1")).toBe(1);
});

test("returns addition of two comma separated numbers", () => {
  expect(add("1,1")).toBe(2);
});

test("returns addition of multiple comma separated numbers", () => {
  expect(add("1,1,2,3,5,8")).toBe(20);
});

test("allow new line between numbers as delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
});

test("negative numbers to throw exception", () => {
  expect(() => add("-1,2")).toThrow("Negatives are not allowed: -1");
});