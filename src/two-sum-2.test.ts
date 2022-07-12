/**
https://www.youtube.com/watch?v=cQ1Oz4ckceM&list=PLot-Xpze53lfQmTEztbgdp8ALEoydvnRQ&index=4
*/

import { expect, describe, test } from "vitest";

function hash_map_compare(nums: number[], target: number): number[] {
	for (let i = nums.length - 1; i > 0; i--) {
		const num = nums[i];
		const next = nums[i - 1];

		if (next < 0) return [i + 1, i + 2];
		if (next + num === target) return [i, i + 1];
	}

	return [];
}

function two_sum(nums: number[], target: number): number[] {
	return hash_map_compare(nums, target);
}

describe("two sum 2", () => {
	const tests: { input: { nums: number[]; target: number }; output: number[] }[] = [
		{
			input: { nums: [1, 3, 4, 5, 7, 10, 11], target: 9 },
			output: [3, 4],
		},
		{
			input: { nums: [2, 7, 11, 15], target: 9 },
			output: [1, 2],
		},
		{
			input: { nums: [], target: 9 },
			output: [],
		},
		{
			input: { nums: [1], target: 9 },
			output: [],
		},
		{
			input: { nums: [1, 2, 3], target: 9 },
			output: [],
		},
	];

	tests.forEach((t) => {
		test(`"numbers at indexes ${t.output} summed equals target ${t.input.target}`, () => {
			expect(two_sum(t.input.nums, t.input.target)).toEqual(t.output);
		});
	});
});
