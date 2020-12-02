const countValidPasswords = (textInput: string): number => {
  console.log('Counting valid passwords...')
  return textInput
    .split('\n')
    .reduce((acc, cur) => (isLineValid(cur) ? acc + 1 : acc), 0)
}

const isLineValid = (line: string): boolean => {
  const password = line.split(':')[1].trim()
  const info = line.split(':')[0]
  const letter = info.split(' ')[1]
  const numbersInfo = info.split(' ')[0]
  const min = parseInt(numbersInfo.split('-')[0], 10)
  const max = parseInt(numbersInfo.split('-')[1], 10)
  return isPasswordValid(password, letter, min, max)
}

const isPasswordValid = (
  password: string,
  letter: string,
  min: number,
  max: number
): boolean => {
  const numOfLetter = password
    .split('')
    .reduce((acc, cur) => (cur === letter ? acc + 1 : acc), 0)
  return numOfLetter >= min && numOfLetter <= max
}

export default countValidPasswords
