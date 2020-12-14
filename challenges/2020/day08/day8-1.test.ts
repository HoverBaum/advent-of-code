import accBeforeLoop from './day8-1'

describe('Programming parsing', () => {
  it('shoudl find the right accumolator', () => {
    const input = `nop +0
    acc +1
    jmp +4
    acc +3
    jmp -3
    acc -99
    acc +1
    jmp -4
    acc +6`
    expect(accBeforeLoop(input)).toBe(5)
  })
})
