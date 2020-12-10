import { seatSpecifierToLocation, sortByID } from './airplaneSeats'

const findMissingID = (input: string) => {
  const ids = input
    .split(/\n/)
    .map((line) => line.trim())
    .map(seatSpecifierToLocation)
    .map((seat) => Number(seat.id))
    .sort((a, b) => a - b)

  const idsMap = Object.fromEntries(ids.map((id) => [id, true]))
  const biggestId = ids[ids.length - 1]
  let myId = -1

  for (let i = 0; i < biggestId; i++) {
    if (!idsMap[i] && idsMap[i - 1] && idsMap[i + 1]) myId = i
  }
  return myId
}

export default findMissingID
