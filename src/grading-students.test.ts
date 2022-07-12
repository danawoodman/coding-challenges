// https://www.hackerrank.com/challenges/grading/problem

import { test, describe, expect } from "vitest";

function gradingStudents(grades: number[]): number[] {
	return grades.map((grade) => {
		if (grade < 38) return grade;
		const rounded = Math.ceil(grade / 5) * 5;
		const roundUp = rounded - grade < 3;
		return roundUp ? rounded : grade;
	});
}

describe("grade students", () => {
	const tests: [number[], number[]][] = [
		[
			[0, 37, 100],
			[0, 37, 100],
		],
		[
			[50, 54, 55, 56, 57, 58, 59, 60],
			[50, 55, 55, 56, 57, 60, 60, 60],
		],
	];

	tests.forEach((t) => {
		const grades = t[0];
		const expected = t[1];
		test(`grades: ${grades} expected: ${expected}`, async () => {
			expect(gradingStudents(grades)).toStrictEqual(expected);
		});
	});
});
