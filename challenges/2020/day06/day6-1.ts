export const groupToAllLetter = (group: string): string[] =>
  group
    .split('\n')
    .map((line) => line.trim())
    .reduce((acc, line) => acc.concat(line.split('')), [])

export const onlyUniqueLetter = (group: string[]) =>
  group.reduce((acc, letter) => ({ ...acc, [letter]: true }), {})

export const groupCount = (group: object): number => Object.keys(group).length

export const sumUp = (acc: number, cur: number): number => acc + cur

const countOfGroupAnswers = (input: string) =>
  input
    .split(/\n\s*\n/)
    .map(groupToAllLetter)
    .map(onlyUniqueLetter)
    .map(groupCount)
    .reduce(sumUp, 0)

export default countOfGroupAnswers
