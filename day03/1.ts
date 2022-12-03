import { solve, bitsToInt, lodash } from './helper.ts'

const pointsMap = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
  ''
)

const points = (input: string) => {
  return pointsMap.indexOf(input)
}

solve((lines) => {
  let result = 0
  lines.forEach((line) => {
    const items = line.split('')
    const half = Math.floor(items.length / 2)
    const firstHalf = items.slice(0, half)
    const secondHalf = items.slice(half, items.length)
    const intersection = lodash.intersection(firstHalf, secondHalf)[0]
    result = result + points(intersection)
  })
  return result
})
