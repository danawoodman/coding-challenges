/**
Given an array, rotate the array to the right by k steps, where k is non-negative.

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

Follow up:

- Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
- Could you do it in-place with O(1) extra space?

https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
 */

import { expect, describe, test } from 'vitest'

function rotate(nums: number[], k: number): void {
  // for (let i = 0; i < k; i++) {
  //   nums.unshift(nums.pop() as number)
  // }

  while (k--) {
    nums.unshift(nums.pop() as number)
  }
}

describe('rotate array', () => {
  const tests: { nums: number[]; k: number; output: number[] }[] = [
    {
      nums: [1, 2, 3, 4, 5, 6, 7],
      k: 3,
      output: [5, 6, 7, 1, 2, 3, 4],
    },
    {
      nums: [-1, -100, 3, 99],
      k: 2,
      output: [3, 99, -1, -100],
    },
    {
      nums: [1, 2],
      k: 5,
      output: [2, 1],
    },
  ]
  tests.forEach((t) => {
    test(`should rotate array ${t.nums} ${t.k} steps`, () => {
      rotate(t.nums, t.k)
      expect(t.nums).toStrictEqual(t.output)
    })
  })
})
