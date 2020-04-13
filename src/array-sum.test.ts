function simpleArraySum(arr: number[]): number {
  return arr.reduce((sum, x) => {
    sum += x;
    return sum;
  }, 0);
}

describe("array sum", () => {
  const tests: [number[], number][] = [
    [[1], 1],
    [[1, 2, 3, 4, 10, 11], 31]
  ];

  tests.forEach(t => {
    const nums = t[0];
    const expected = t[1];
    test(`nums: ${nums} expected: ${expected}`, async () => {
      expect(simpleArraySum(nums)).toBe(expected);
    });
  });
});
