import fixAndFinish from './day8-2'

describe('Programming completion', () => {
  it('shoudl complete the program an find the right accumolator', () => {
    const input = `nop +0
    acc +1
    jmp +4
    acc +3
    jmp -3
    acc -99
    acc +1
    jmp -4
    acc +6`
    expect(fixAndFinish(input)).toBe(8)
  })
})
