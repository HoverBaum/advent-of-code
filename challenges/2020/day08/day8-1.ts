import { isLineValid } from '../day02/day2-2'

export type InstructionType = 'acc' | 'nop' | 'jmp'

export type Instruction = {
  instruction: InstructionType
  value: number
}

export const lineToInstruction = (line: string): Instruction => {
  const inputs = line.split(' ')
  const instruction = inputs[0] as InstructionType
  const value = parseInt(inputs[1], 10)
  return {
    instruction,
    value,
  }
}

const accBeforeLoop = (input: string) => {
  const lines = input.split('\n').map((line) => line.trim())
  const instructions = lines.map(lineToInstruction)
  let accumolator = 0
  let isLoop = false
  const visitedInstructions = []
  let pointer = 0
  do {
    const { instruction, value } = instructions[pointer]
    visitedInstructions.push(pointer)
    switch (instruction) {
      case 'acc':
        accumolator += value
        pointer += 1
        break
      case 'jmp':
        pointer += value
        break
      default:
        pointer += 1
        break
    }
    if (visitedInstructions.includes(pointer)) {
      isLoop = true
    }
  } while (!isLoop)
  return accumolator
}

export default accBeforeLoop
