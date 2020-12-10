type EyeColorType = 'amb' | 'blu' | 'brn' | 'gry' | 'grn' | 'hzl' | 'oth'

type LengthUnitType = 'cm' | 'in'

type PassportType = {
  birthYear: number
  issueYear: Number
  expirationYear: number
  height: {
    value: number
    unit: LengthUnitType
  }
  hairColor: string
  eyeColor: EyeColorType
  passportId: number
  cid?: string
}

type RawPassportData = {
  byr: string
  iyr: string
  eyr: string
  hgt: string
  hcl: string
  ecl: string
  pid: string
  cid?: string
}

const LOGGER_ENABLED = true

const log = (...args) => {
  if (LOGGER_ENABLED) console.log(...args)
}

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

const onlyWithAllRequiredFields = (input: string) =>
  requiredFields.every((field) => input.indexOf(field) > -1)

const numberOfValidPassports = (textInput: string): number => {
  // Split on new lines with only space followed by new line.
  const passports = textInput
    .split(/\n\s*\n/)
    .filter(onlyWithAllRequiredFields)
    .map(parsePassport)
    .filter((passport) => passport !== undefined)
  return passports.length
}

// Parse passport input. Assuming all fields are present.
const parsePassport = (passportInput: string): PassportType | undefined => {
  const fields = passportInput
    .split('\n')
    .reduce((acc, line) => acc.concat(line.split(' ')), []) // Now entries like: 'ecl:brn'
    .filter((line) => line !== '')
    .map((line) => line.split(':').map((elm) => elm.trim()))

  const rawPassport = Object.fromEntries(fields) as RawPassportData

  // Birth Year
  if (rawPassport.byr.length !== 4 || isNaN(Number(rawPassport.byr))) {
    log('Birth Year melformed', rawPassport.byr)
    return undefined
  }
  const birthYear = Number(rawPassport.byr)
  if (birthYear < 1920 || birthYear > 2002) {
    log('Birth Year out of range', birthYear)
    return undefined
  }

  // Issued Year
  if (rawPassport.iyr.length !== 4 || isNaN(Number(rawPassport.iyr))) {
    log('Issue Year melformed', rawPassport.iyr)
    return undefined
  }
  const issueYear = Number(rawPassport.iyr)
  if (issueYear < 2010 || issueYear > 2020) {
    log('Issue Year out of range', issueYear)
    return undefined
  }

  // Expiration Year
  if (rawPassport.eyr.length !== 4 || isNaN(Number(rawPassport.eyr))) {
    log('Expiration Year melformed', rawPassport.eyr)
    return undefined
  }
  const expirationYear = Number(rawPassport.eyr)
  if (expirationYear < 2020 || expirationYear > 2030) {
    log('Expiration Year out of range', expirationYear)
    return undefined
  }

  // Passport ID
  if (rawPassport.pid.length !== 9 || isNaN(Number(rawPassport.pid))) {
    log('Passport ID melformed', rawPassport.pid)
    return undefined
  }
  const passportId = Number(rawPassport.pid)

  // Eye color
  if (!/^(amb|blu|brn|gry|grn|hzl|oth)$/.test(rawPassport.ecl)) {
    log('Invalid Eye Color', rawPassport.ecl)
    return undefined
  }
  const eyeColor = rawPassport.ecl as EyeColorType

  // Hair color
  if (!/^#[a-f0-9]{6}$/.test(rawPassport.hcl)) {
    log('Hair Color melformed', rawPassport.hcl)
    return undefined
  }
  const hairColor = rawPassport.hcl

  // Height
  if (!/^\d+(cm|in)$/.test(rawPassport.hgt)) {
    log('Height is melformed', rawPassport.hgt)
    return undefined
  }
  const heightUnit: LengthUnitType =
    rawPassport.hgt.indexOf('cm') > -1 ? 'cm' : 'in'
  if (isNaN(Number(rawPassport.hgt.replace(heightUnit, '')))) {
    log('Height is not a number', rawPassport.hgt)
    return undefined
  }
  const value = Number(rawPassport.hgt.replace(heightUnit, ''))
  if (heightUnit === 'cm' && (value < 150 || value > 193)) {
    log('Height is out of bound', rawPassport.hgt)
    return undefined
  }
  if (heightUnit === 'in' && (value < 59 || value > 76)) {
    log('Height is out of bound', rawPassport.hgt)
    return undefined
  }
  const height = {
    value,
    unit: heightUnit,
  }

  return {
    birthYear,
    issueYear,
    expirationYear,
    passportId,
    eyeColor,
    hairColor,
    height,
    cid: rawPassport.cid,
  }
}

export default numberOfValidPassports
