import { solve, bitsToInt, lodash } from './helper.ts'

let result = 0
solve((lines) => {
  const stream = lines[0].split('')
  let i = 0
  while (i < stream.length) {
    if (
      new Set([stream[i], stream[i + 1], stream[i + 2], stream[i + 3]]).size ===
      4
    ) {
      break
    }
    i++
  }
  return i + 4
})
