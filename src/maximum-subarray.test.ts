/**
https://www.youtube.com/watch?v=5WZl3MMT0Eg&list=PLot-Xpze53lfQmTEztbgdp8ALEoydvnRQ&index=3
*/

import { expect, describe, test } from "vitest";

function pickMax(a: number, b: number): number {
	return a > b ? a : b;
}

// time: O(n)
// space: 0(n)
function max_subarray(nums: number[]): number {
	let max = 0;
	let curr = 0;

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		if (curr < 0) curr = 0;
		curr += num;
		max = pickMax(max, curr);
	}

	return max;
}

describe("maximum subarray", () => {
	const tests: { input: number[]; output: number }[] = [
		{
			input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
			output: 6,
		},
	];

	tests.forEach((t) => {
		test(``, () => {
			const result = expect(max_subarray(t.input)).toEqual(t.output);
		});
	});
});
