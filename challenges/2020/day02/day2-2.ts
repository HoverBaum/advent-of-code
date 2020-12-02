const countValidPasswords = (textInput: string): number => {
  console.log('Counting valid passwords...')
  return textInput
    .split('\n')
    .reduce((acc, cur) => (isLineValid(cur) ? acc + 1 : acc), 0)
}

export const isLineValid = (line: string): boolean => {
  const password = line.trim().split(':')[1].trim()
  const info = line.split(':')[0]
  const letter = info.split(' ')[1]
  const numbersInfo = info.split(' ')[0]
  const first = parseInt(numbersInfo.split('-')[0], 10)
  const second = parseInt(numbersInfo.split('-')[1], 10)
  return isPasswordValid(password, letter, first, second)
}

const isPasswordValid = (
  password: string,
  letter: string,
  first: number,
  second: number
): boolean => {
  const firstPositionIsRight = password[first - 1] === letter
  const secondPositionIsRight = password[second - 1] === letter
  if (
    (firstPositionIsRight && !secondPositionIsRight) ||
    (!firstPositionIsRight && secondPositionIsRight)
  ) {
    return true
  } else {
    return false
  }
}

export default countValidPasswords
