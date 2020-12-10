import { seatSpecifierToLocation } from './airplaneSeats'

const highestId = (textInput: string) => {
  let id = 0
  const passportInputs = textInput
    .split(/\n/)
    .map((line) => line.trim())
    .map(seatSpecifierToLocation)
    .forEach((seat) => {
      if (seat.id > id) id = seat.id
    })
  return id
}

export default highestId
