// https://www.hackerrank.com/challenges/between-two-sets/problem

/**
You will be given two arrays of integers and asked to determine 
all integers that satisfy the following two conditions:

The elements of the first array are all factors of the integer 
being considered. The integer being considered is a factor of all 
elements of the second array. These numbers are referred to as 
being between the two arrays. You must determine how many such 
numbers exist.

For example, given the arrays "a = [2, 6]" and "b = [24, 36]", there are two numbers 
between them: "6" and "12". "6%2=0", "6%6=0", "24%6" and "36%6=0" for the 
first value. Similarly, "12%2=0", "12%6=0" and "24%12=0", "36%6=0".
 */
function getTotalX(factors: number[], elements: number[]): number {
  // Order lowest to highest
  factors = factors.sort();
  elements = elements.sort();
  const start = factors[factors.length - 1];
  const stop = elements[0];

  let choices = [start];

  // Fill in the range between.
  let curr = start;
  while (curr < stop) {
    curr += 1;
    choices.push(curr);
  }

  const between: number[] = choices.reduce((matches, choice) => {
    // See if the choice can be evently divided the factors.
    const factorRemainders = factors.reduce((all, f) => {
      const remainder = choice % f;
      all += remainder;
      return all;
    }, 0);

    // See if the choice can evently divide the elements.
    const elementsRemainders = elements.reduce((all, f) => {
      const remainder = f % choice;
      all += remainder;
      return all;
    }, 0);

    // If all the factors and elements can be evenly divided
    // by this choice, it is considered a match.
    if (factorRemainders === 0 && elementsRemainders === 0) {
      matches.push(choice);
    }

    return matches;
  }, [] as number[]);

  return between.length;
}

describe("between two sets", () => {
  const tests: [number[], number[], number][] = [
    [[1], [100], 9],
    [[2, 4], [16, 32, 96], 3], // 4, 8, 16
    [[2, 6], [24, 36], 2] // 6, 12
  ];

  tests.map(t =>
    test(`given ${t[0]} and ${t[1]} should be ${t[2]}`, async () => {
      const a = t[0];
      const b = t[1];
      const expected = t[2];
      expect(getTotalX(a, b)).toBe(expected);
    })
  );
});
