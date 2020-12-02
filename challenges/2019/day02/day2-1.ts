const handleOpcode = (sequence: number[], position: number) => {
  const opcode = sequence[position]
  const numberOnePosition = sequence[position + 1]
  const numberOne = sequence[numberOnePosition]
  const numberTwoPosition = sequence[position + 2]
  const numberTwo = sequence[numberTwoPosition]
  const targetPosition = sequence[position + 3]
  const result = opcode === 1 ? numberOne + numberTwo : numberOne * numberTwo
  sequence[targetPosition] = result
  return sequence
}

const day2part1 = (textInput: string) => {
  return asArray(textInput)[0]
}

export const asArray = (textInput: string) => {
  let sequence = textInput
    .split(',')
    .map(numberAsString => parseInt(numberAsString))

  sequence[1] = 12
  sequence[2] = 2

  let position = 0
  while (sequence[position] !== 99) {
    sequence = handleOpcode(sequence, position)
    position += 4
  }
  return sequence
}

export default day2part1
