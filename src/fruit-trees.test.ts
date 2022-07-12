// https://www.hackerrank.com/challenges/apple-and-orange/problem

import { expect, describe, test } from "vitest";

function countHits(treeLocation: number, start: number, end: number, positions: number[]): number {
	return positions.reduce((sum, p) => {
		const pos = treeLocation + p;
		if (pos >= start && pos <= end) sum += 1;
		return sum;
	}, 0);
}

function countApplesAndOranges(
	houseStart: number,
	houseEnd: number,
	appleTree: number,
	orangeTree: number,
	apples: number[],
	oranges: number[]
): [number, number] {
	const appleHits = countHits(appleTree, houseStart, houseEnd, apples);
	const orangeHits = countHits(orangeTree, houseStart, houseEnd, oranges);
	return [appleHits, orangeHits];
}

describe("fruit trees", () => {
	test("does stuff", async () => {
		expect(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])).toStrictEqual([1, 1]);
	});
});
