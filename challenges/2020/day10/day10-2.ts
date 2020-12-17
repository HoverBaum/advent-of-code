import { sortNumbers } from '../../../lib/array-helpers'
import { asNumbers } from '../../../lib/input-parsing'

const findCombinations = (jolts: number[]): number => {
  const elements = jolts.map((jolt) => ({ jolt, combinations: 0 }))
  elements[elements.length - 1].combinations = 1
  for (let i = jolts.length - 1; i >= 0; i--) {
    const joltage = elements[i].jolt
    if (i + 1 < elements.length && elements[i + 1].jolt <= joltage + 3) {
      elements[i].combinations += elements[i + 1].combinations
    }
    if (i + 2 < elements.length && elements[i + 2].jolt <= joltage + 3) {
      elements[i].combinations += elements[i + 2].combinations
    }
    if (i + 3 < elements.length && elements[i + 3].jolt <= joltage + 3) {
      elements[i].combinations += elements[i + 3].combinations
    }
  }
  return elements[0].combinations
}

export const possibleCombinations = (jolts: number[]): number => {
  const sortedJolts = jolts.concat([0]).sort(sortNumbers)
  return findCombinations(sortedJolts)
}

const findAllCombinations = (input: string) => {
  const jolts = asNumbers(input)
  return possibleCombinations(jolts)
}

export default findAllCombinations
