import * as fs from 'fs'
import * as path from 'path'

const run = async () => {
  const challengeString = process.argv[2]
  const dayToRun = parseInt(challengeString.split('-')[0])
  const partToRun = challengeString.split('-')[1] || '1'

  console.log(`Running challenge: Day ${dayToRun} - Part ${partToRun} 🎅`)

  const challengeFolder = path.resolve(
    `./Challenges/Day${dayToRun < 10 ? '0' : ''}${dayToRun}`
  )
  const solverPath = path.join(challengeFolder, `/day${dayToRun}-${partToRun}`)
  const inputPath = path.join(challengeFolder, '/input.txt')

  const solver = (await import(solverPath)).default
  const input = fs.readFileSync(inputPath).toString()

  const answer = solver(input)
  console.log('Answer:')
  console.log(answer)
}

run()
