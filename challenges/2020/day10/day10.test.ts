import { findDifferences } from './day10-1'
import { possibleCombinations } from './day10-2'

describe('Adapting joltages', () => {
  it('shoudl find difference in basic example', () => {
    const input = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4, 0, 22]
    const result = findDifferences(input)
    expect(result.one).toBe(7)
    expect(result.three).toBe(5)
  })
  it('should find right differences', () => {
    const input = [
      0,
      28,
      33,
      18,
      42,
      31,
      14,
      46,
      20,
      48,
      47,
      24,
      23,
      49,
      45,
      19,
      38,
      39,
      11,
      1,
      32,
      25,
      35,
      8,
      17,
      7,
      9,
      4,
      2,
      34,
      10,
      3,
      52,
    ]
    const result = findDifferences(input)
    expect(result.one).toBe(22)
    expect(result.three).toBe(10)
  })

  it('Should find combinations for basic example', () => {
    const input = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4]
    expect(possibleCombinations(input)).toBe(8)
  })

  it('should find all combinations', () => {
    const input = [
      28,
      33,
      18,
      42,
      31,
      14,
      46,
      20,
      48,
      47,
      24,
      23,
      49,
      45,
      19,
      38,
      39,
      11,
      1,
      32,
      25,
      35,
      8,
      17,
      7,
      9,
      4,
      2,
      34,
      10,
      3,
    ]
    expect(possibleCombinations(input)).toBe(19208)
  })
})
