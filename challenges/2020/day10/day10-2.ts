import { sortNumbers } from '../../../lib/array-helpers'
import { asNumbers } from '../../../lib/input-parsing'

const combinations = (jolts: number[]): number => {
  if (jolts.length === 1) return 1
  let result = 0
  let branches = 0
  if (jolts.length > 1 && jolts[1] <= jolts[0] + 3) {
    result += combinations(jolts.slice(1))
    branches += 1
  }
  if (jolts.length > 2 && jolts[2] <= jolts[0] + 3) {
    result += combinations(jolts.slice(2))
    branches += 1
  }
  if (jolts.length > 3 && jolts[3] <= jolts[0] + 3) {
    result += combinations(jolts.slice(3))
    branches += 1
  }
  if (branches === 0) return combinations(jolts.slice(1))
  return result
}

export const possibleCombinations = (jolts: number[]): number => {
  const sortedJolts = jolts.concat([0]).sort(sortNumbers)
  return combinations(sortedJolts)
}

const findAllCombinations = (input: string) => {
  const jolts = asNumbers(input)
  return possibleCombinations(jolts)
}

export default findAllCombinations
