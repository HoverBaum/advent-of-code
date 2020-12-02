const day1part2 = (textInput: string) => {
  const entries = textInput.split('\n').map((entry) => parseInt(entry, 10))
  let currentEntry = 0
  let result
  while (entries.length > 1 && !result) {
    currentEntry = entries.pop()
    entries.forEach((entry) => {
      if (result) return
      const entryCopy = entries.filter(
        (originalEntry) => originalEntry !== entry
      )
      entryCopy.forEach((secondEntry) => {
        if (entry + currentEntry + secondEntry === 2020) {
          console.log('Found entries')
          console.log(entry, currentEntry, secondEntry)
          result = currentEntry * entry * secondEntry
          return
        }
      })
    })
  }
  return result
}

export default day1part2
