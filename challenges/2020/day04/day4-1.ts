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

export default numberOfValidPassports
