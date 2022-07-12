/**
Given two strings `s` and `t`, return `true` if `t` is an 
anagram of `s`, and `false` otherwise.

Time: O(s+t)
*/

import { expect, describe, test } from "vitest";

function mapOfChars(s: string): Map<string, number> {
	let charMap = new Map<string, number>();

	for (const char of s.split("")) {
		const prev = charMap.get(char) ?? 0;
		charMap.set(char, prev + 1);
	}

	return charMap;
}

function sortCompare(s: string, t: string): boolean {
	s = s.split("").sort().toString();
	t = t.split("").sort().toString();
	return s === t;
}

function reduceCounter(s: string, t: string): boolean {
	// If `s` and `t` are not the same length, they can't be
	// anagrams.
	if (s.length !== t.length) return false;

	// Count up the total of each character in `s`
	const charMap = mapOfChars(s);

	// Check if each character from `t` exists in the `s`
	// character map. If it does, reduce the count of chars
	// in the map, otherwise return `false`.
	for (const char of t.split("")) {
		if (!charMap.get(char)) return false;
		charMap.set(char, charMap.get(char)! - 1);
	}

	return true;
}

function compareCounts(s: string, t: string): boolean {
	// If `s` and `t` are not the same length, they can't be
	// anagrams.
	if (s.length !== t.length) return false;

	// Count up the total of each character in `s`
	const mapS = mapOfChars(s);
	const mapT = mapOfChars(t);

	// For each character count in map `s`, see if the character
	// account in `t` is the same length.
	for (const [key] of mapS) {
		if (mapS.get(key) !== mapT.get(key)) return false;
	}

	return true;
}

function anagram(s: string, t: string): boolean {
	// return reduceCounter(s, t);
	// return compareCounts(s, t);
	return sortCompare(s, t);
}

describe("anagram", () => {
	const tests: { input: { s: string; t: string }; output: boolean }[] = [
		{
			input: { s: "anagram", t: "nagaram" },
			output: true,
		},
		{
			input: { s: "rat", t: "car" },
			output: false,
		},
	];

	tests.forEach((t) => {
		test(`"${t.input.s} is an anagram of ${t.input.t}: ${t.output}`, () => {
			expect(anagram(t.input.s, t.input.t)).toBe(t.output);
		});
	});
});
