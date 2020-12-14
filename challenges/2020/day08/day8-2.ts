import { Instruction, InstructionType, lineToInstruction } from './day8-1'

/**
 * Runs a programs defined by instructions.
 * Returning undefined, if the program has an infinite loop.
 * @param instructions
 */
const runProgram = (instructions: Instruction[]): number | undefined => {
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
  } while (!isLoop && pointer < instructions.length)
  return isLoop ? undefined : accumolator
}

const fixAndFinish = (input: string): number => {
  const lines = input.split('\n').map((line) => line.trim())
  const instructions = lines.map(lineToInstruction)
  let accumulator = undefined
  let index = 0

  // Bure force this 🤷‍♂️
  while (accumulator === undefined && index < instructions.length) {
    const { instruction } = instructions[index]
    if (instruction === 'jmp' || instruction === 'nop') {
      const program = instructions.map((instruction, i) => ({
        ...instruction,
        instruction:
          i === index
            ? instruction.instruction === 'jmp'
              ? 'nop'
              : 'jmp'
            : instruction.instruction,
      }))
      accumulator = runProgram(program)
    }
    index += 1
  }
  return accumulator
}

export default fixAndFinish
