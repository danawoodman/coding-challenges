/**
You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer. The digits are 
ordered from most significant to least significant in left-to-right 
order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of 
digits.

https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
*/

import { expect, describe, test } from "vitest";

function recurse(digits: number[], index: number): number[] {
	if (index === -1) digits.unshift(1);
	else if (digits[index] === 9) {
		digits[index] = 0;
		return recurse(digits, --index);
	} else digits[index]++;

	return digits;
}

function loop(digits: number[]): number[] {
	let carry = true;
	for (let i = digits.length - 1; i >= 0 && carry; i--) {
		digits[i]++;
		carry = digits[i] >= 10;
		if (carry) digits[i] = 0;
	}
	carry && digits.unshift(1);
	return digits;
}

function plusOne(digits: number[]): number[] {
	return loop(digits);
	// return recurse(digits, digits.length - 1);
}

describe("plus one", () => {
	const tests: { input: number[]; output: number[] }[] = [
		{
			input: [0],
			output: [1],
		},
		{
			input: [9],
			output: [1, 0],
		},
		{
			input: [1, 2, 3],
			output: [1, 2, 4],
		},
		{
			input: [4, 3, 2, 1],
			output: [4, 3, 2, 2],
		},
		{
			input: [9, 9],
			output: [1, 0, 0],
		},
		{
			input: [4, 9],
			output: [5, 0],
		},
	];

	tests.forEach((t) => {
		test(`"give the digits ${t.input}, the output should be ${t.output}`, () => {
			expect(plusOne(t.input)).toEqual(t.output);
		});
	});
});
