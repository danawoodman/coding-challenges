// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

import { expect, describe, test } from "vitest";

function breakingRecords(scores: number[]) {
	let leastCount = 0;
	let mostCount = 0;

	// Initialize the min/max scores as the score
	// from the first game of the season.
	let min = scores[0];
	let max = scores[0];

	scores.forEach((score) => {
		if (score < min) {
			leastCount += 1;
			min = score;
		}
		if (score > max) {
			mostCount += 1;
			max = score;
		}
	});

	return [mostCount, leastCount];
}

describe("breaking worst and best records", () => {
	const tests: [number[], [number, number]][] = [
		[
			[10, 5, 20, 20, 4, 5, 2, 25, 1],
			[2, 4],
		],
		[
			[3, 4, 21, 36, 10, 28, 35, 5, 24, 42],
			[4, 0],
		],
	];

	tests.forEach((t) => {
		const scores = t[0];
		const expected = t[1];
		test(`scores: ${scores} expected: ${expected}`, async () => {
			expect(breakingRecords(scores)).toStrictEqual(expected);
		});
	});
});
