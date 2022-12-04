import { solve, bitsToInt, lodash } from './helper.ts'

solve((lines) => {
  let result = 0
  lines.forEach((line) => {
    const [left, right] = line.split(',')
    const [leftMin, leftMax] = left.split('-').map((x) => Number(x))
    const [rightMin, rightMax] = right.split('-').map((x) => Number(x))
    const min = Math.min(leftMin, rightMin)
    const max = Math.max(leftMax, rightMax)

    if (min === leftMin && max === leftMax) {
      result = result + 1
      return
    }
    if (min === rightMin && max === rightMax) {
      result = result + 1
      return
    }
  })
  return result
})
