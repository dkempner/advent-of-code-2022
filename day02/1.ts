import { solve, bitsToInt, lodash } from './helper.ts'

const points: Record<string, Record<string, number>> = {
  A: { X: 3, Y: 6, Z: 0 },
  B: { X: 0, Y: 3, Z: 6 },
  C: { X: 6, Y: 0, Z: 3 },
}

const points2: Record<string, number> = {
  X: 1,
  Y: 2,
  Z: 3,
}

solve((lines) => {
  let result = 0
  lines.forEach((line) => {
    const chars = line.split('')
    const them = line[0]
    const me = line[2]

    result = result + points2[me] + points[them][me]
  })
  return result
})
