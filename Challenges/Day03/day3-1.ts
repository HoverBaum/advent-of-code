interface Point {
  x: number
  y: number
}

interface IdentifiedPoint {
  x: number
  y: number
  lineIdentifiers: number[]
}

export const pointsForInstruction = (
  initialPoint: Point,
  instruction: string,
  lineIdentifier: number
) => {
  const steps = parseInt(instruction.substr(1))
  const directionChar = instruction.charAt(0)
  if (directionChar === 'R')
    return addStepsRight(initialPoint, steps, lineIdentifier)
  if (directionChar === 'D')
    return addStepsDownwards(initialPoint, steps, lineIdentifier)
  if (directionChar === 'L')
    return addStepsLeft(initialPoint, steps, lineIdentifier)
  if (directionChar === 'U')
    return addStepsUpwards(initialPoint, steps, lineIdentifier)
}

export const addStepsUpwards = (
  initialPoint: Point,
  steps: number,
  lineIdentifier: number
) =>
  Array.from(Array(steps).keys()).map(step => ({
    lineIdentifiers: [lineIdentifier],
    x: initialPoint.x,
    y: initialPoint.y + step + 1
  }))

export const addStepsDownwards = (
  initialPoint: Point,
  steps: number,
  lineIdentifier: number
) =>
  Array.from(Array(steps).keys()).map(step => ({
    lineIdentifiers: [lineIdentifier],
    x: initialPoint.x,
    y: initialPoint.y - step - 1
  }))

export const addStepsLeft = (
  initialPoint: Point,
  steps: number,
  lineIdentifier: number
) =>
  Array.from(Array(steps).keys()).map(step => ({
    lineIdentifiers: [lineIdentifier],
    x: initialPoint.x - step - 1,
    y: initialPoint.y
  }))

export const addStepsRight = (
  initialPoint: Point,
  steps: number,
  lineIdentifier: number
) =>
  Array.from(Array(steps).keys()).map(step => ({
    lineIdentifiers: [lineIdentifier],
    x: initialPoint.x + step + 1,
    y: initialPoint.y
  }))

export const createAllPointsForInstructionset = (
  instructions: string[],
  lineIdentifier: number
) => {
  const initialPoint: Point = { x: 0, y: 0 }
  return instructions.reduce((acc, instruction) => {
    if (acc.length === 0)
      return pointsForInstruction(initialPoint, instruction, lineIdentifier)
    const currentPoint = { x: acc[acc.length - 1].x, y: acc[acc.length - 1].y }
    return acc.concat(
      pointsForInstruction(currentPoint, instruction, lineIdentifier)
    )
  }, [])
}

export const mergePointsList = (
  pointsList: IdentifiedPoint[],
  secondList: IdentifiedPoint[]
) => {
  const joinedList = []
  // For first list just add each point once.
  pointsList.forEach((identifiedPoint: IdentifiedPoint) => {
    if (
      !joinedList.some(
        point => point.x === identifiedPoint && point.y === identifiedPoint
      )
    )
      joinedList.push(identifiedPoint)
  })
  // For second list add or merge.
  secondList.forEach(secondPoint => {
    const existingPoint = joinedList.find(
      point => point.x === secondPoint.x && point.y === secondPoint.y
    )

    if (!existingPoint) {
      joinedList.push(secondPoint)
    }

    if (existingPoint) {
      existingPoint.lineIdentifiers = existingPoint.lineIdentifiers.concat(
        secondPoint.lineIdentifiers
      )
    }
  })
  return joinedList
}

const onlyIntersections = (point: IdentifiedPoint) =>
  point.lineIdentifiers.length > 1

const addManhattenDistance = (point: IdentifiedPoint) => ({
  ...point,
  distance: Math.abs(point.x) + Math.abs(point.y)
})

const day3part1 = (textInput: string) => {
  const instructionsOne = textInput.split('\n')[0].split(',')
  const instructionsTwo = textInput.split('\n')[1].split(',')

  const pointsOne = createAllPointsForInstructionset(instructionsOne, 1)
  const pointsTwo = createAllPointsForInstructionset(instructionsTwo, 2)
  console.log(
    `Created points for both lines, they are ${pointsOne.length} and ${pointsTwo.length} long.`
  )

  const allPointsAndIntersections = mergePointsList(pointsOne, pointsTwo)
  console.log('merged all points into one list')

  const sortedIntersections = allPointsAndIntersections
    .filter(onlyIntersections)
    .map(addManhattenDistance)
    .sort((a, b) => {
      if (a.distance === b.distance) return 0
      if (a.distance < b.distance) return -1
      return 1
    })

  const result = sortedIntersections[0].distance
  return result
}

export default day3part1
