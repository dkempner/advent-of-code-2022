import { solve, bitsToInt, lodash } from './helper.ts'

const pointsMap = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
  ''
)

const points = (input: string) => {
  return pointsMap.indexOf(input)
}

solve((lines) => {
  let result = 0
  const groups = lodash.chunk(lines, 3)
  groups.forEach((groupOf3) => {
    const sacks = groupOf3.map((x) => x.split(''))
    const match = lodash.intersection(...sacks)[0]
    result = result + points(match)
  })
  return result
})
