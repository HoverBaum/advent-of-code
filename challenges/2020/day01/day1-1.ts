const day1part1 = (textInput: string) => {
  const entries = textInput.split('\n').map((entry) => parseInt(entry, 10))
  let currentEntry = 0
  let result
  while (entries.length > 1) {
    currentEntry = entries.pop()
    entries.forEach((entry) => {
      if (entry + currentEntry === 2020) {
        console.log('Found entries')
        console.log(entry, currentEntry)
        result = currentEntry * entry
      }
    })
  }
  return result
}

export default day1part1
