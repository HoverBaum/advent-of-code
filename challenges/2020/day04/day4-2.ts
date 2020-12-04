export type PassportType = {
  byr: string
  birthYear: number
  iyr: string
  issueYear: number
  eyr: string
  expirationYear: number
  hgt: string
  height: {
    value: number
    unit: 'cm' | 'in'
  }
  hcl: string
  hairColor: string
  ecl: 'amb' | 'blu' | 'brn' | 'gry' | 'grn' | 'hzl' | 'oth'
  eyeColor: 'amb' | 'blu' | 'brn' | 'gry' | 'grn' | 'hzl' | 'oth'
  pid: string
  passportId: number
  cid?: string
}

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

const onlyWithAllRequiredFields = (input: string) =>
  requiredFields.every((field) => input.indexOf(field) > -1)

export const validPassports = (passport: PassportType): boolean => {
  if (passport.birthYear < 1920 || passport.birthYear > 2002) return false
  if (passport.issueYear < 2010 || passport.issueYear > 2020) return false
  if (passport.expirationYear < 2020 || passport.expirationYear > 2030)
    return false
  if (!passport.hgt.includes('cm') && !passport.hgt.includes('in')) return false
  if (passport.height.unit === 'cm') {
    if (passport.height.value < 150 || passport.height.value > 193) return false
  } else {
    if (passport.height.value < 59 || passport.height.value > 76) return false
  }
  if (!/^#[a-f0-9]{6}$/.test(passport.hairColor)) return false
  if (!/^(amb|blu|brn|gry|grn|hzl|oth)$/.test(passport.eyeColor)) return false
  if (passport.passportId > 999999999) return false
  return true
}

const numberOfValidPassports = (textInput: string): number => {
  // Split on new lines with only space followed by new line.
  const passports = textInput
    .split(/\n\s*\n/)
    .filter(onlyWithAllRequiredFields)
    .map(parsePassport)
    .filter(validPassports)
  return passports.length
}

// Wow, first task is only counting 🙈
const parsePassport = (passportInput: string) => {
  const fields = passportInput
    .split('\n')
    .reduce((acc, line) => acc.concat(line.split(' ')), []) // Now entries like: 'ecl:brn'
    .filter((line) => line !== '')
    .map((line) => line.split(':'))

  const passport = Object.fromEntries(fields) as PassportType

  passport.birthYear = parseInt(passport.byr, 10)
  passport.issueYear = parseInt(passport.iyr, 10)
  passport.expirationYear = parseInt(passport.eyr, 10)
  passport.passportId = parseInt(passport.pid, 10)

  if (isNaN(passport.birthYear)) passport.birthYear = 99999999999
  if (isNaN(passport.issueYear)) passport.issueYear = 99999999999
  if (isNaN(passport.expirationYear)) passport.expirationYear = 99999999999
  if (isNaN(passport.passportId)) passport.passportId = 99999999999

  passport.eyeColor = passport.ecl
  passport.hairColor = passport.hcl

  // Parse height already for easier use later.
  // Note that weird values lit "DKJFH" as unit just get put to cm 🙊
  passport.height = {
    value: parseInt(passport.hgt.replace('cm', '').replace('in', ''), 10),
    unit: passport.hgt.indexOf('cm') > -1 ? 'cm' : 'in',
  }
  if (isNaN(passport.height.value)) passport.height.value = 0

  return passport
}

export default numberOfValidPassports
