import { BADFAMILY } from 'dns'

type BagType = {
  identifier: string
  reachableBags: string[]
  hullComplete: boolean
  canReachTarget?: boolean
}

const lineToBag = (line: string): BagType => {
  if (line.includes('bags contain no other bags.')) return lineWithNoBags(line)
  //wavy olive bags contain 3 faded gray bags, 2 posh brown bags, 3 striped cyan bags.
  const regex = /^([\w\s]+) bags contain \d ([\w\s]+)(?:, \d([\w\s]+))*./
  const regexResult = regex.exec(line)
  const identifier: string = regexResult[1]
  const reachableBags: string[] = []
  // Start at two to now take self into reachables.
  for (let i = 2; i < regexResult.length; i++) {
    const bag = regexResult[i]
    if (bag) {
      reachableBags.push(bag.replace('bags', '').trim())
    }
  }
  return {
    hullComplete: false,
    identifier,
    reachableBags,
  }
}

const lineWithNoBags = (line: string): BagType => {
  const identifier = line.replace(' bags contain no other bags.', '')
  return {
    identifier,
    reachableBags: [],
    hullComplete: true,
  }
}

const completeHull = (bags: BagType[]): BagType[] => {
  let foundNewConnection = false
  const afterRound = bags.map((bag) => {
    bags.forEach((secondBag) => {
      if (secondBag.reachableBags.includes(bag.identifier)) {
        const originalLength = bag.reachableBags.length
        const allReachable = bag.reachableBags.concat(secondBag.reachableBags)
        bag.reachableBags = allReachable.filter((elem, pos) => {
          return allReachable.indexOf(elem) == pos
        })
        if (bag.reachableBags.length > originalLength) foundNewConnection = true
      }
    })
    return bag
  })
  return foundNewConnection ? completeHull(afterRound) : afterRound
}

const depthFirst = (bags: BagType[]): BagType[] => {
  bags.map((bag) => {
    const reachableBags: string[] = bag.reachableBags
    const checkedIdentifiers: string[] = []
    let lastLength = 0
    let newLength = reachableBags.length

    while (newLength > lastLength) {
      lastLength = reachableBags.length
      reachableBags.forEach((bagIdentifier) => {
        const oneMoreBag = bags.find((bag) => bag.identifier === bagIdentifier)
        if (!oneMoreBag) return
        const newlyReached = oneMoreBag.reachableBags
        newlyReached.forEach((identifier) => {
          if (!reachableBags.includes(identifier))
            reachableBags.push(identifier)
        })
      })
      newLength = reachableBags.length
    }

    bag.canReachTarget = bag.reachableBags.includes('shiny gold')
    return bag
  })
  return bags
}

const possibleContainers = (input: string) => {
  const bags = input
    .split('\n')
    .map((line) => line.trim())
    .map(lineToBag)

  // const completedBags = completeHull(bags)

  // return completedBags.filter((bag) => bag.reachableBags.includes('shiny gold'))
  //   .length

  return depthFirst(bags).filter((bag) => !!bag.canReachTarget).length
}

export default possibleContainers
