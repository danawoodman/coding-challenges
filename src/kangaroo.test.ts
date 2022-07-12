// https://www.hackerrank.com/challenges/kangaroo/problem

import { expect, describe, test } from "vitest";

function kangaroo(x1: number, v1: number, x2: number, v2: number): boolean {
	const sameStart = x1 === x2;
	const x1Ahead = x1 > x2;
	const x2Ahead = !x1Ahead;
	const sameSpeed = v1 === v2;
	const x1Faster = v1 > v2;
	const x2Faster = v1 < v2;

	// If they start at the same position or are the same speed,
	// they have to both be travelling at the same speed and
	// start at the same place or else they will never overlap.
	if (sameStart || sameSpeed) return sameStart && sameSpeed;

	// If one kangaroo starts ahead and travels the same
	// speed or greater than the other, they will never overlap.
	if (x1Ahead && sameSpeed) return false;
	if (x1Ahead && x1Faster) return false;
	if (x2Ahead && sameSpeed) return false;
	if (x2Ahead && x2Faster) return false;

	// Make each move until we either find an overlap
	// or we reach 10,000 moves.
	let move = 0;
	let x1Curr = x1;
	let x2Curr = x2;
	while (true) {
		move += 1;
		x1Curr += v1;
		x2Curr += v2;
		if (x1Curr === x2Curr) return true;
		if (move >= 10000) return false;
	}
}

describe("kangaroos", () => {
	const tests: [[number, number, number, number], boolean][] = [
		// x1 starts before, x1 faster
		[[0, 2, 3, 1], true],
		[[0, 3, 3, 2], true],
		[[0, 6, 3, 3], true],
		[[0, 6, 3, 2], false],

		// x1 starts before, x1 slower
		[[0, 2, 5, 3], false],

		// Same start, same speed
		[[0, 2, 0, 2], true],

		// Same start, different speeds
		[[0, 2, 0, 1], false],
		[[0, 2, 0, 3], false],

		// Different starts, same speed
		[[0, 2, 3, 2], false],

		// Extreme conditions
		[[2932, 7030, 9106, 4840], false],
	];

	tests.map((t) =>
		test(`given ${t[0]} should be ${t[1]}`, async () => {
			const input = t[0];
			const expected = t[1];
			expect(kangaroo(...input)).toStrictEqual(expected);
		})
	);
});
