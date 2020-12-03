import howManyTrees from './day3-1'

describe('Hitting trees', () => {
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
    expect(howManyTrees(input)).toEqual(7)
  })
})
