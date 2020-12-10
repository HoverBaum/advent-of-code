import { groupToAllLetter, sumUp } from './day6-1'

describe('Finding answers', () => {
  it('should sum up right', () => {
    const input = [1, 2, 3]
    expect(input.reduce(sumUp, 0)).toBe(6)
  })

  it('should find all letters in group', () => {
    const input = 'ab\ncd'
    expect(JSON.stringify(groupToAllLetter(input))).toBe(
      JSON.stringify(['a', 'b', 'c', 'd'])
    )
  })
})
