import { solve, bitsToInt } from './helper.ts'

solve((lines) => {
  let result = 0
  let mini = 0
  let all: number[] = []
  lines.forEach((line) => {
    if (!line) {
      all.push(mini)
      mini = 0
    }
    mini = mini + Number(line)
  })
  return all
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0)
})
