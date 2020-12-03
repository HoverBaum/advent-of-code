const treesOnSlope = (textInput: string) => {
  const lines = textInput.split('\n').map((line) => line.trim())
  let currentX = 0
  return lines.reduce((acc, line) => {
    const actualX = currentX % line.length
    const isTree = line[actualX] === '#'
    currentX += 3
    return isTree ? acc + 1 : acc
  }, 0)
}

export default treesOnSlope
