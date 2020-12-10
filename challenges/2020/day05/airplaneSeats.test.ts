import {
  AirplaneLocationType,
  seatSpecifierToLocation,
  sortByID,
} from './airplaneSeats'

describe('Parsing airline seats', () => {
  it('parses string right 1', () => {
    const input = 'BFFFBBFRRR'
    const parsed = seatSpecifierToLocation(input)
    expect(parsed.row).toBe(70)
    expect(parsed.column).toBe(7)
    expect(parsed.id).toBe(567)
  })

  it('parses string right 2', () => {
    const input = 'FFFBBBFRRR'
    const parsed = seatSpecifierToLocation(input)
    expect(parsed.row).toBe(14)
    expect(parsed.column).toBe(7)
    expect(parsed.id).toBe(119)
  })

  it('parses string right 3', () => {
    const input = 'BBFFBBFRLL'
    const parsed = seatSpecifierToLocation(input)
    expect(parsed.row).toBe(102)
    expect(parsed.column).toBe(4)
    expect(parsed.id).toBe(820)
  })

  it('should sort right', () => {
    const seats: AirplaneLocationType[] = [
      { id: 3, row: 5, column: 3 },
      {
        id: 2,
        row: 5,
        column: 3,
      },
      { id: 1, row: 4, column: 2 },
    ]
    expect(seats.sort(sortByID)[0].id).toBe(1)
  })
})
