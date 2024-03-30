const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test("return an array", () => {
    const result = shuffle([1, 2, 3, 4, 5]);
    expect(Array.isArray(result)).toBe(true);
  });

  test("shuffles", () => {
    const arr = ([1, 2, 3, 4, 5]);
    const result = shuffle(arr);
    expect(result).not.toBe(arr);
  })
});
