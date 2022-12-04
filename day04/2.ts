import { solve, bitsToInt, lodash } from './helper.ts'

solve((lines) => {
  let result = 0
  lines.forEach((line) => {
    const [left, right] = line.split(',')
    const [leftMin, leftMax] = left.split('-').map((x) => Number(x))
    const [rightMin, rightMax] = right.split('-').map((x) => Number(x))
    const min = Math.min(leftMin, rightMin)
    const max = Math.max(leftMax, rightMax)

    for (let i = min; i <= max; i++) {
      const leftContains = i >= leftMin && i <= leftMax
      const rightContains = i >= rightMin && i <= rightMax
      if (leftContains && rightContains) {
        result = result + 1
        return
      }
    }
  })
  return result
})
