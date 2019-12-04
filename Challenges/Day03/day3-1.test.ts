import {
  addStepsUpwards,
  addStepsDownwards,
  addStepsRight,
  addStepsLeft,
  pointsForInstruction,
  createAllPointsForInstructionset,
  mergePointsList
} from './day3-1'

describe('Day 3 part 1', () => {
  it('should add steps upwards right', () => {
    const result = addStepsUpwards({ x: 0, y: 0 }, 2, 1)
    expect(result).toEqual([
      { x: 0, y: 1, lineIdentifiers: [1] },
      { x: 0, y: 2, lineIdentifiers: [1] }
    ])
  })

  it('should add steps downwards right', () => {
    const result = addStepsDownwards({ x: 0, y: 0 }, 2, 1)
    const expectedResult = [
      { x: 0, y: -1, lineIdentifiers: [1] },
      { x: 0, y: -2, lineIdentifiers: [1] }
    ]
    expect(result).toEqual(expectedResult)
  })

  it('should add steps right right', () => {
    const result = addStepsRight({ x: 0, y: 0 }, 2, 1)
    const expectedResult = [
      { x: 1, y: 0, lineIdentifiers: [1] },
      { x: 2, y: 0, lineIdentifiers: [1] }
    ]
    expect(result).toEqual(expectedResult)
  })

  it('should add steps left right', () => {
    const result = addStepsLeft({ x: 0, y: 0 }, 2, 1)
    const expectedResult = [
      { x: -1, y: 0, lineIdentifiers: [1] },
      { x: -2, y: 0, lineIdentifiers: [1] }
    ]
    expect(result).toEqual(expectedResult)
  })

  it('chooses the right direction', () => {
    const result = pointsForInstruction({ x: 0, y: 0 }, 'L2', 1)
    const expectedResult = [
      { x: -1, y: 0, lineIdentifiers: [1] },
      { x: -2, y: 0, lineIdentifiers: [1] }
    ]
    expect(result).toEqual(expectedResult)
  })

  it('should create all points for instruction', () => {
    const result = createAllPointsForInstructionset(['R8', 'U5', 'L5', 'D3'], 1)
    const expectedResult = [
      { x: 1, y: 0, lineIdentifiers: [1] },
      { x: 2, y: 0, lineIdentifiers: [1] },
      { x: 3, y: 0, lineIdentifiers: [1] },
      { x: 4, y: 0, lineIdentifiers: [1] },
      { x: 5, y: 0, lineIdentifiers: [1] },
      { x: 6, y: 0, lineIdentifiers: [1] },
      { x: 7, y: 0, lineIdentifiers: [1] },
      { x: 8, y: 0, lineIdentifiers: [1] },
      { x: 8, y: 1, lineIdentifiers: [1] },
      { x: 8, y: 2, lineIdentifiers: [1] },
      { x: 8, y: 3, lineIdentifiers: [1] },
      { x: 8, y: 4, lineIdentifiers: [1] },
      { x: 8, y: 5, lineIdentifiers: [1] },
      { x: 7, y: 5, lineIdentifiers: [1] },
      { x: 6, y: 5, lineIdentifiers: [1] },
      { x: 5, y: 5, lineIdentifiers: [1] },
      { x: 4, y: 5, lineIdentifiers: [1] },
      { x: 3, y: 5, lineIdentifiers: [1] },
      { x: 3, y: 4, lineIdentifiers: [1] },
      { x: 3, y: 3, lineIdentifiers: [1] },
      { x: 3, y: 2, lineIdentifiers: [1] }
    ]
    expect(result).toEqual(expectedResult)
  })

  it('should merge points right', () => {
    const listOne = [
      { x: 1, y: 0, lineIdentifiers: [1] },
      { x: 2, y: 0, lineIdentifiers: [1] },
      { x: 3, y: 0, lineIdentifiers: [1] },
      { x: 4, y: 0, lineIdentifiers: [1] },
      { x: 5, y: 0, lineIdentifiers: [1] },
      { x: 6, y: 0, lineIdentifiers: [1] },
      { x: 7, y: 0, lineIdentifiers: [1] },
      { x: 8, y: 0, lineIdentifiers: [1] },
      { x: 8, y: 1, lineIdentifiers: [1] },
      { x: 8, y: 2, lineIdentifiers: [1] },
      { x: 8, y: 3, lineIdentifiers: [1] },
      { x: 8, y: 4, lineIdentifiers: [1] },
      { x: 8, y: 5, lineIdentifiers: [1] },
      { x: 7, y: 5, lineIdentifiers: [1] },
      { x: 6, y: 5, lineIdentifiers: [1] },
      { x: 5, y: 5, lineIdentifiers: [1] },
      { x: 4, y: 5, lineIdentifiers: [1] },
      { x: 3, y: 5, lineIdentifiers: [1] },
      { x: 3, y: 4, lineIdentifiers: [1] },
      { x: 3, y: 3, lineIdentifiers: [1] },
      { x: 3, y: 2, lineIdentifiers: [1] }
    ]
    const listTwo = [
      { x: 0, y: 1, lineIdentifiers: [2] },
      { x: 0, y: 2, lineIdentifiers: [2] },
      { x: 0, y: 3, lineIdentifiers: [2] },
      { x: 0, y: 4, lineIdentifiers: [2] },
      { x: 0, y: 5, lineIdentifiers: [2] },
      { x: 0, y: 6, lineIdentifiers: [2] },
      { x: 0, y: 7, lineIdentifiers: [2] },
      { x: 1, y: 7, lineIdentifiers: [2] },
      { x: 2, y: 7, lineIdentifiers: [2] },
      { x: 3, y: 7, lineIdentifiers: [2] },
      { x: 4, y: 7, lineIdentifiers: [2] },
      { x: 5, y: 7, lineIdentifiers: [2] },
      { x: 6, y: 7, lineIdentifiers: [2] },
      { x: 6, y: 6, lineIdentifiers: [2] },
      { x: 6, y: 5, lineIdentifiers: [2] },
      { x: 6, y: 4, lineIdentifiers: [2] },
      { x: 6, y: 3, lineIdentifiers: [2] },
      { x: 5, y: 3, lineIdentifiers: [2] },
      { x: 4, y: 3, lineIdentifiers: [2] },
      { x: 3, y: 3, lineIdentifiers: [2] },
      { x: 2, y: 3, lineIdentifiers: [2] }
    ]
    const result = mergePointsList(listOne, listTwo)
    const expectedResult = [
      { x: 1, y: 0, lineIdentifiers: [1] },
      { x: 2, y: 0, lineIdentifiers: [1] },
      { x: 3, y: 0, lineIdentifiers: [1] },
      { x: 4, y: 0, lineIdentifiers: [1] },
      { x: 5, y: 0, lineIdentifiers: [1] },
      { x: 6, y: 0, lineIdentifiers: [1] },
      { x: 7, y: 0, lineIdentifiers: [1] },
      { x: 8, y: 0, lineIdentifiers: [1] },
      { x: 8, y: 1, lineIdentifiers: [1] },
      { x: 8, y: 2, lineIdentifiers: [1] },
      { x: 8, y: 3, lineIdentifiers: [1] },
      { x: 8, y: 4, lineIdentifiers: [1] },
      { x: 8, y: 5, lineIdentifiers: [1] },
      { x: 7, y: 5, lineIdentifiers: [1] },
      { x: 6, y: 5, lineIdentifiers: [1, 2] },
      { x: 5, y: 5, lineIdentifiers: [1] },
      { x: 4, y: 5, lineIdentifiers: [1] },
      { x: 3, y: 5, lineIdentifiers: [1] },
      { x: 3, y: 4, lineIdentifiers: [1] },
      { x: 3, y: 3, lineIdentifiers: [1, 2] },
      { x: 3, y: 2, lineIdentifiers: [1] },
      { x: 0, y: 1, lineIdentifiers: [2] },
      { x: 0, y: 2, lineIdentifiers: [2] },
      { x: 0, y: 3, lineIdentifiers: [2] },
      { x: 0, y: 4, lineIdentifiers: [2] },
      { x: 0, y: 5, lineIdentifiers: [2] },
      { x: 0, y: 6, lineIdentifiers: [2] },
      { x: 0, y: 7, lineIdentifiers: [2] },
      { x: 1, y: 7, lineIdentifiers: [2] },
      { x: 2, y: 7, lineIdentifiers: [2] },
      { x: 3, y: 7, lineIdentifiers: [2] },
      { x: 4, y: 7, lineIdentifiers: [2] },
      { x: 5, y: 7, lineIdentifiers: [2] },
      { x: 6, y: 7, lineIdentifiers: [2] },
      { x: 6, y: 6, lineIdentifiers: [2] },
      { x: 6, y: 4, lineIdentifiers: [2] },
      { x: 6, y: 3, lineIdentifiers: [2] },
      { x: 5, y: 3, lineIdentifiers: [2] },
      { x: 4, y: 3, lineIdentifiers: [2] },
      { x: 2, y: 3, lineIdentifiers: [2] }
    ]
    expect(result).toEqual(expectedResult)
  })
})
