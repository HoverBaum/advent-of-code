const day1part2 = textInput => {
  const calcFule = mass => {
    const additionalFuel = Math.floor(mass / 3) - 2
    if (additionalFuel <= 0) return 0
    return additionalFuel + calcFule(additionalFuel)
  }

  const inputNumbers = textInput
    .split('\n')
    .map(line => parseInt(line))
    .filter(number => !isNaN(number))

  const fule = inputNumbers.map(calcFule)

  const answer = fule.reduce((acc, curr) => acc + curr, 0)

  return answer
}

export default day1part2
