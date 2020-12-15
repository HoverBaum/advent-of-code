import { checkXMASData } from './xmas-protocol'

describe('XMAS Protocol', () => {
  it('Should find error', () => {
    const input = `35
    20
    15
    25
    47
    40
    62
    55
    65
    95
    102
    117
    150
    182
    127
    219
    299
    277
    309
    576`
    const data = input
      .split('\n')
      .map((line) => line.trim())
      .map((line) => parseInt(line, 10))
    expect(checkXMASData(5, data).firstFalse).toBe(127)
    expect(checkXMASData(5, data).valid).toBeFalsy()
  })
})
