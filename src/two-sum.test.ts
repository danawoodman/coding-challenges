/**
Given an array of integers, return indices of the two 
numbers such that they add up to a specific target.

You may assume that each input would have exactly 
one solution, and you may not use the same element twice.
*/

import { expect, describe, test } from "vitest";

// time: O(n)
// space: O(n)
function hash_map_compare(nums: number[], target: number): number[] {
	let map = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const diff = target - num;

		// If `num2` is in the map, we can create a pair of numbers
		// that equal `target`
		if (map.get(diff) !== undefined) return [map.get(diff)!, i];

		// If we cannot create a pair, add the current number to the map.
		map.set(num, i);
	}

	return [];
}

function two_sum(nums: number[], target: number): number[] {
	return hash_map_compare(nums, target);
}

describe("two sum", () => {
	const tests: { input: { nums: number[]; target: number }; output: number[] }[] = [
		{
			input: { nums: [2, 7, 11, 15], target: 9 },
			output: [0, 1],
		},
		{
			input: { nums: [2, 1, 5, 3], target: 4 },
			output: [1, 3],
		},
	];

	tests.forEach((t) => {
		test(`"numbers at indexes ${t.output} summed equals target ${t.input.target}`, () => {
			const result = two_sum(t.input.nums, t.input.target);
			expect(result).toContain(t.output[0]);
			expect(result).toContain(t.output[1]);
		});
	});
});
