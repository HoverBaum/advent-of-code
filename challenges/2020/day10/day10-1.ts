import { sortNumbers } from '../../../lib/array-helpers'
import { asNumbers } from '../../../lib/input-parsing'

export type JoltageDifferences = {
  one: number
  two: number
  three: number
}

export const findDifferences = (joltages: number[]): JoltageDifferences => {
  const result = {
    one: 0,
    two: 0,
    three: 0,
  }
  const sortedJolts = joltages.sort(sortNumbers)
  for (let i = 1; i < sortedJolts.length; i++) {
    switch (sortedJolts[i] - sortedJolts[i - 1]) {
      case 1:
        result.one += 1
        break
      case 2:
        result.two += 1
        break
      default:
        result.three += 1
        break
    }
  }
  return result
}

const diffTheJolts = (input: string) => {
  const data = asNumbers(input).sort(sortNumbers)
  const largest = data[data.length - 1]
  // Remember to add 3 and our own device.
  const diffs = findDifferences(data.concat([0, largest + 3]))
  return diffs.one * diffs.three
}

export default diffTheJolts
