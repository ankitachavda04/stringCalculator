import add from '../src/stringCalculator';

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns 0 for an empty string with space', () => {
  expect(add(" ")).toBe(0);
});

test("returns number itself when single number is passed", () => {
    expect(add("1")).toBe(1);
});