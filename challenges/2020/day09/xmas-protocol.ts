export type XMASDataCheckResponse = {
  valid: boolean
  firstFalse?: number
}

/**
 * Checks if previous values contain two different numbers that
 * can be added up to the sought target.
 * @param previousValues
 * @param target
 */
const isValidEntry = (previousValues: number[], target: number): boolean => {
  while (previousValues.length > 1) {
    const value = previousValues.pop()
    for (const otherValue of previousValues) {
      if (value !== otherValue && value + otherValue === target) return true
    }
  }
  return false
}

export const checkXMASData = (
  preambleLength: number,
  data: number[]
): XMASDataCheckResponse => {
  for (const [index, element] of Object.entries(data)) {
    const i = parseInt(index, 10)
    if (i >= preambleLength) {
      const correspondingPreamble = data.slice(i - preambleLength, i)
      if (!isValidEntry(correspondingPreamble, element)) {
        return {
          valid: false,
          firstFalse: element,
        }
      }
    }
  }

  return { valid: true }
}
