// https://www.hackerrank.com/challenges/the-birthday-bar/problem?h_r=next-challenge&h_v=zen

import { expect, describe, test } from "vitest";

/**
 *
 * Lily has a chocolate bar that she wants to share with Ron
 * for his birthday. Each of the squares has an integer on it.
 * She decides to share a contiguous segment of the bar selected
 * such that the length of the segment matches Ron's birth month
 * and the sum of the integers on the squares is equal to his
 * birth day. You must determine how many ways she can divide
 * the chocolate.
 */

function birthday(squares: number[], sum: number, length: number) {
	let matches = 0;

	// We can't continue if there are no squares or the number
	// of squares available is less than the desired segment
	// length.
	if (!squares.length) return 0;
	if (squares.length < length) return 0;

	squares.forEach((square, i) => {
		// Get the list of segments to count.
		const seg = squares.slice(i, i + length);

		// Segment must match the desired length or it doesn't
		// count against the total
		if (seg.length !== length) return;

		// Total up the value for the segment to see if it matches the
		// desired sum.
		const total: number = seg.reduce((count, x) => count + x, 0);
		if (total === sum) matches += 1;
	});

	return matches;
}

describe("birthday chocolate", () => {
	const tests: [number[], number, number, number][] = [
		[[], 5, 3, 0],
		[[1, 2, 1, 3, 2], 3, 2, 2],
		[[1, 1, 1, 1, 1, 1], 3, 2, 0],
		[[4], 4, 1, 1],
	];

	tests.forEach((t) => {
		const squares = t[0];
		const day = t[1];
		const month = t[2];
		const expected = t[3];
		test(`squares: ${squares} day: ${day} month: ${month} expected: ${expected}`, async () => {
			expect(birthday(squares, day, month)).toStrictEqual(expected);
		});
	});
});
