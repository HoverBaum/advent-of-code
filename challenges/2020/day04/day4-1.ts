type PassportType = {
  byr: number
  iyr: number
  eyr: number
  hgt: string
  hcl: string
  ecl: string
  pid: number
  cid?: number
}

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

const onlyeWithAllRequiredFields = (input: string) =>
  requiredFields.every((field) => input.indexOf(field) > -1)

const numberOfValidPassports = (textInput: string): number => {
  // Split on new lines with only space followed by new line.
  const passportInputs = textInput
    .split(/\n\s*\n/)
    .filter(onlyeWithAllRequiredFields)
  return passportInputs.length
}

// Wow, first task is only counting 🙈
const parsePassport = (passportInput: string) => {
  const fields = passportInput
    .split('\n')
    .reduce((acc, line) => acc.concat(line.split(' ')), []) // Now entries like: 'ecl:brn'
    .map((line) => line.split(':'))
  const passport = Object.fromEntries(fields) as PassportType
  return passport
}

export default numberOfValidPassports
