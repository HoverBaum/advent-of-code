import { checkXMASData } from './xmas-protocol'

const findFirstFalse = (input: string) => {
  const data = input
    .split('\n')
    .map((line) => line.trim())
    .map((line) => parseInt(line, 10))
  const result = checkXMASData(25, data)
  return result.firstFalse || -1
}

export default findFirstFalse
