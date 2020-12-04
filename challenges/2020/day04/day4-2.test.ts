import { validateLocaleAndSetLanguage } from 'typescript'
import numberOfValidPassports, { PassportType, validPassports } from './day4-2'

const passport: PassportType = {
  iyr: '2016',
  hgt: '187cm',
  byr: '1980',
  pid: '977322718',
  eyr: '2027',
  ecl: 'brn',
  hcl: '#ceb3a1',
  birthYear: 1980,
  issueYear: 2016,
  expirationYear: 2027,
  passportId: 977322718,
  eyeColor: 'brn',
  hairColor: '#ceb3a1',
  height: { value: 187, unit: 'cm' },
}

describe('Validating passports', () => {
  it('should discover invalid passports', () => {
    const input = `eyr:1972 cid:100
    hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926
    
    iyr:2019
    hcl:#602927 eyr:1967 hgt:170cm
    ecl:grn pid:012533040 byr:1946
    
    hcl:dab227 iyr:2012
    ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277
    
    hgt:59cm ecl:zzz
    eyr:2038 hcl:74454a iyr:2023
    pid:3556412378 byr:2007`
    expect(numberOfValidPassports(input)).toBe(0)
  })

  it('should recognize valid passports', () => {
    const input = `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
    hcl:#623a2f
    
    eyr:2029 ecl:blu cid:129 byr:1989
    iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm
    
    hcl:#888785
    hgt:164cm byr:2001 iyr:2015 cid:88
    pid:545766238 ecl:hzl
    eyr:2022
    
    iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`
    expect(numberOfValidPassports(input)).toBe(4)
  })

  it('should validate birth year right', () => {
    expect(validPassports(passport)).toBeTruthy()

    const tooLow = { ...passport, birthYear: 1919 }
    expect(validPassports(tooLow)).toBeFalsy()

    const tooHigh = { ...passport, birthYear: 2003 }
    expect(validPassports(tooHigh)).toBeFalsy()
  })

  it('shoudl validate height right', () => {
    expect(validPassports(passport)).toBeTruthy()

    const noUnit = { ...passport, hgt: '234' }
    expect(validPassports(noUnit)).toBeFalsy()

    const toTallCM = { ...passport, height: { unit: 'cm', value: 194 } }
    // @ts-ignore
    expect(validPassports(toTallCM)).toBeFalsy()

    const toSmallCM = { ...passport, height: { unit: 'cm', value: 149 } }
    // @ts-ignore
    expect(validPassports(toSmallCM)).toBeFalsy()

    const toTallIN = { ...passport, height: { unit: 'in', value: 77 } }
    // @ts-ignore
    expect(validPassports(toTallIN)).toBeFalsy()

    const toSmallIN = { ...passport, height: { unit: 'in', value: 58 } }
    // @ts-ignore
    expect(validPassports(toSmallIN)).toBeFalsy()
  })
})
