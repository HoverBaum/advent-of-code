import { groupCount, sumUp } from './day6-1'

const groupToEveryonesLetter = (group: string) => {
  const letterCount = group.split('\n').reduce((acc, line) => {
    line
      .split('')
      .forEach((letter) => (acc[letter] = !acc[letter] ? 1 : acc[letter] + 1))
    return acc
  }, {})
  const target = group.split('\n').length
  const result = {}
  Object.keys(letterCount).forEach((key) => {
    if (letterCount[key] === target) result[key] = true
  })
  return result
}

const countOfGroupAnswers = (input: string) =>
  input
    .split(/\n\s*\n/)
    .map(groupToEveryonesLetter)
    .map(groupCount)
    .reduce(sumUp, 0)

export default countOfGroupAnswers
