const day1part1 = textInput => {
  const inputNumbers = textInput
    .split('\n')
    .map(line => parseInt(line))
    .filter(number => !isNaN(number))

  const fule = inputNumbers.map(mass => Math.floor(mass / 3) - 2)

  const answer = fule.reduce((acc, curr) => acc + curr, 0)

  return answer
}

export default day1part1
