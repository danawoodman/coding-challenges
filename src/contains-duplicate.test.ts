/**
Given an integer array nums, return true if any value appears 
at least twice in the array, and return false if every element 
is distinct.

https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
*/

import { expect, describe, test } from 'vitest'

function containsDuplicate(nums: number[]): boolean {
  // Runtime: 102 ms
  // Memory Usage: 51.1 MB
  const set = new Set<number>()
  for (const num of nums) {
    if (set.has(num)) return true
    set.add(num)
  }
  return false

  // Runtime: 127 ms
  // Memory Usage: 51.7 MB
  // const set = new Set(nums)
  // return nums.length !== set.size

  // Runtime: 171 ms
  // Memory Usage: 51.3 MB
  // const map = {}
  // for (const num of nums) {
  //   if (map[num]) return true
  //   map[num] = true
  // }
  // return false

  // Runtime: 264 ms
  // Memory Usage: 51.6 MB
  // const sorted = nums.sort()
  // for (let i = 0; i < sorted.length; i++) {
  //   if (nums[i] === nums[i + 1]) return true
  // }
  // return false
}

describe('contains duplicate', () => {
  const tests: { nums: number[]; output: boolean }[] = [
    {
      nums: [1, 2, 3, 1],
      output: true,
    },
    {
      nums: [1, 2, 3, 4],
      output: false,
    },
    {
      nums: [1, 2, 0, 3, 4, 0],
      output: true,
    },
    {
      nums: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
      output: true,
    },
  ]
  tests.forEach((t) => {
    test(`${t.output ? 'does' : 'does not'} ${
      t.nums
    } contain duplicates `, () => {
      expect(containsDuplicate(t.nums)).toBe(t.output)
    })
  })
})
