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

const day2part2 = (textInput: string) => {
  let originalSequence = textInput
    .split(',')
    .map(numberAsString => parseInt(numberAsString))

  const target = 19690720

  for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
      const sequence = [...originalSequence]
      sequence[1] = i
      sequence[2] = j
      const result = computeSequence(sequence)
      if (result[0] === target) {
        return 100 * i + j
      }
    }
  }
}

const computeSequence = (sequence: number[]) => {
  let instructionPointer = 0
  while (sequence[instructionPointer] !== 99) {
    sequence = handleOpcode(sequence, instructionPointer)
    instructionPointer += 4
  }
  return sequence
}

export default day2part2
