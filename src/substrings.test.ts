import { assert, describe, it } from "vitest";

function countSubstrings(s: string, queries: [[number, number]]) {
	return queries.map((q) => countSubstring(s, q));
}

function countSubstring(str: string, range: [number, number]) {
	const subs = new Set();

	for (let x = range[0]; x < range[1] + 1; x++) {
		for (let y = x; y < range[1] + 1; y++) {
			subs.add(str.slice(x, y + 1));
		}
	}

	return subs.size;
}

describe("countSubstring", () => {
	const tests: [string, [number, number], number][] = [
		["aabaa", [0, 0], 1],
		["aabaa", [0, 1], 2],
		["aabaa", [1, 2], 3],
		["aabaa", [0, 2], 5],
		["aabaa", [1, 3], 5],
		["aabaa", [0, 3], 8],
		["aabaa", [0, 4], 11],
		// ["aabaabbbabbaaabbaaaabba", 211],
		// ["aabaaabbnnnwkmmmmannammannabbbabbaaabbaaaabba", 922]
	];

	tests.forEach((t) => {
		const word = t[0];
		const range = t[1];
		const expected = t[2];
		it(`word: ${word} range: ${range}`, async () => {
			assert.equal(countSubstring(word, range), expected);
		});
	});
});
