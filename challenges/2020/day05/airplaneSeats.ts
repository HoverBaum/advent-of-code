export type AirplaneLocationType = {
  row: number
  column: number
  id: number
}

export const parseStringAsBinary = (zeroCha: string) => (
  input: string
): number => {
  const binaryString = input
    .split('')
    .map((cha) => (cha === zeroCha ? '0' : '1'))
    .join('')
  return parseInt(binaryString, 2)
}

export const parseFB = parseStringAsBinary('F')
export const parseLR = parseStringAsBinary('L')

export const seatSpecifierToLocation = (
  specifier: string
): AirplaneLocationType => {
  const row = parseFB(specifier.substr(0, 7))
  const column = parseLR(specifier.substr(7, 3))
  return {
    row,
    column,
    id: row * 8 + column,
  }
}

export const sortByID = (
  a: AirplaneLocationType,
  b: AirplaneLocationType
): -1 | 1 => {
  return a.id < b.id ? -1 : 1
}
