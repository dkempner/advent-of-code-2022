import { solve, bitsToInt } from './helper.ts'

solve((lines) => {
  let result = 0
  let mini = 0
  lines.forEach((line) => {
    if (!line) {
      if (mini > result) {
        result = mini
      }
      mini = 0
    }
    mini = mini + Number(line)
  })
  return result
})
