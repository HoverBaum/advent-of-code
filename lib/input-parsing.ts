// Simply splits by line. May leave excessive whitespace.
export const asLines = (input: string): string[] => input.split('\n')

// Many problems want to look at each line, without extra spaces.
export const asTrimmedLines = (input: string): string[] =>
  asLines(input).map((line) => line.trim())

// Splits by line and parses to int.
export const asNumbers = (input: string): number[] =>
  asTrimmedLines(input).map((line) => parseInt(line, 10))

export const splitByEmptyLine = (input: string): string[] =>
  input.split(/\n\s*\n/)
