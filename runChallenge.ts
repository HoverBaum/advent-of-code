import * as fs from 'fs'
import * as path from 'path'

let year = 2020

const run = async () => {
  const challengeString = process.argv[2]
  const dayToRun = parseInt(challengeString.split('-')[0])
  const partToRun = challengeString.split('-')[1] || '1'

  const yearInput = process.argv[3]
  if (yearInput) {
    const parsedYear = parseInt(yearInput, 10)
    if (!isNaN(parsedYear)) year = parsedYear
  }

  console.log(
    `Running challenge: ${year} Day ${dayToRun} - Part ${partToRun} 🎅`
  )

  const challengeFolder = path.resolve(
    `./challenges/${year}/day${dayToRun < 10 ? '0' : ''}${dayToRun}`
  )
  const solverPath = path.join(challengeFolder, `/day${dayToRun}-${partToRun}`)
  const inputPath = path.join(challengeFolder, '/input.txt')

  let solver
  try {
    solver = (await import(solverPath)).default
  } catch (e) {
    return console.error(`🚨 No solver found at: ${solverPath}!`)
  }
  if (!fs.existsSync(inputPath)) {
    return console.error(`🚨 No input found at: ${inputPath}!`)
  }
  const input = fs.readFileSync(inputPath).toString()

  const answer = solver(input)
  console.log('Answer:')
  console.log(answer)
}

run()
