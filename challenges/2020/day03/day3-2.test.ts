import howManyTrees from './day3-2'

describe('Hitting trees on all slopes', () => {
  it('Should work on example input', () => {
    const input = `..##.......
    #...#...#..
    .#....#..#.
    ..#.#...#.#
    .#...##..#.
    ..#.##.....
    .#.#.#....#
    .#........#
    #.##...#...
    #...##....#
    .#..#...#.#`
    expect(howManyTrees(input)).toEqual(336)
  })
})
