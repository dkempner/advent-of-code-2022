import { solve, bitsToInt, lodash } from './helper.ts'

// X - i need to Lose,
// Y - i need to Draw,
// Z - i need to Win

const points: Record<string, Record<string, string>> = {
  A: { X: 'Z', Y: 'X', Z: 'Y' },
  B: { X: 'X', Y: 'Y', Z: 'Z' },
  C: { X: 'Y', Y: 'Z', Z: 'X' },
}

const points2: Record<string, number> = {
  X: 1,
  Y: 2,
  Z: 3,
}

const points3: Record<string, number> = {
  X: 0,
  Y: 3,
  Z: 6,
}

solve((lines) => {
  let result = 0
  lines.forEach((line) => {
    const chars = line.split('')
    const them = chars[0]
    const outcome = chars[2]
    const me = points[them][outcome]

    const outcomePoints = points3[outcome]
    const roundTotal = points2[me] + outcomePoints
    console.log(roundTotal)
    result = result + roundTotal
  })
  return result
})
