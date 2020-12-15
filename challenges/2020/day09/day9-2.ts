import { checkXMASData } from './xmas-protocol'

const findWeakness = (input: string) => {
  const data = input
    .split('\n')
    .map((line) => line.trim())
    .map((line) => parseInt(line, 10))
  const { firstFalse } = checkXMASData(25, data)
  const numbersThatAddUp = data
    .reduce((acc, curr, index) => {
      // Check if following numbers add up to firstFalse.
      let i = index + 1
      let result = curr
      while (result < firstFalse && i < data.length) {
        result += data[i]
        i += 1
        if (result === firstFalse) {
          // Found numbers.
          return data.slice(index, i)
        }
      }
      return acc
    }, [])
    .sort((a, b) => a - b)
  console.log(numbersThatAddUp)
  return numbersThatAddUp[0] + numbersThatAddUp[numbersThatAddUp.length - 1]
}

export default findWeakness
