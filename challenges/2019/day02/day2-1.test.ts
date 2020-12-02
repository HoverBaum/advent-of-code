import { asArray } from './day2-1'

describe('Day 2 part 1', () => {
  it('should solve example one right', () => {
    expect(asArray('1,0,0,0,99').join(',')).toBe('2,0,0,0,99')
  })

  it('should solve example two right', () => {
    expect(asArray('2,3,0,3,99').join(',')).toBe('2,3,0,6,99')
  })

  it('should solve example three right', () => {
    expect(asArray('2,4,4,5,99,0').join(',')).toBe('2,4,4,5,99,9801')
  })

  it('should solve example four right', () => {
    expect(asArray('1,1,1,4,99,5,6,0,99').join(',')).toBe('30,1,1,4,2,5,6,0,99')
  })
})
