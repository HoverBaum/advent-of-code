const treesOnAllSclopes = (textInput: string) => {
  const area = textInput.split('\n').map((line) => line.trim())
  const slope1Trees = treesOnSlope(area, 1, 1)
  const slope2Trees = treesOnSlope(area, 3, 1)
  const slope3Trees = treesOnSlope(area, 5, 1)
  const slope4Trees = treesOnSlope(area, 7, 1)
  const slope5Trees = treesOnSlope(area, 1, 2)
  return slope1Trees * slope2Trees * slope3Trees * slope4Trees * slope5Trees
}

const treesOnSlope = (area: string[], right: number, down: number) => {
  let currentX = 0
  const treesHit = area.reduce((acc, line, index) => {
    // only process lines that we will touch downwards.
    if (index % down !== 0) return acc
    const actualX = currentX % line.length
    const isTree = line[actualX] === '#'
    currentX += right
    return isTree ? acc + 1 : acc
  }, 0)
  return treesHit
}

export default treesOnAllSclopes
